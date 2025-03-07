
# API Flask pour l'Assistant IA

Ce document explique comment configurer et utiliser l'API Flask pour communiquer avec le modèle d'IA.

## Prérequis

- Python 3.7 ou supérieur
- Flask et autres dépendances (voir ci-dessous)

## Installation

1. Installez les dépendances Python:

```bash
pip install flask flask-cors
```

2. Si vous utilisez un modèle d'IA spécifique, installez également ses dépendances:

```bash
# Par exemple pour transformer ou un modèle spécifique
pip install transformers torch
```

## Lancement de l'API

1. Naviguez vers le dossier où se trouve le fichier `api-example.py`
2. Lancez l'API:

```bash
python api-example.py
```

Le serveur démarrera sur le port 5000 par défaut (http://localhost:5000).

## Intégration avec un vrai modèle d'IA

Pour connecter cette API à un véritable modèle d'IA:

1. Modifiez la fonction `get_ai_response` dans `api-example.py` pour utiliser votre modèle:

```python
# Exemple avec un modèle Hugging Face Transformers
from transformers import AutoModelForCausalLM, AutoTokenizer

model_name = "votre-modele-prefere"
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForCausalLM.from_pretrained(model_name)

def get_ai_response(message):
    inputs = tokenizer(message, return_tensors="pt")
    outputs = model.generate(**inputs, max_length=100)
    response = tokenizer.decode(outputs[0], skip_special_tokens=True)
    return response
```

## Sécurité

Dans un environnement de production:
- Ajoutez une authentification
- Utilisez HTTPS
- Limitez les requêtes par IP
- Considérez l'utilisation d'un reverse proxy comme Nginx
