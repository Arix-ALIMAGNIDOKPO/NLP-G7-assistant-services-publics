# 🤖 Assistant des Services Publics Béninois

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000.svg)](https://vercel.com)
[![Open Issues](https://img.shields.io/github/issues/Arix-ALIMAGNIDOKPO/NLP-G7-assistant-services-publics)](https://github.com/Arix-ALIMAGNIDOKPO/NLP-G7-assistant-services-publics/issues)

<div align="center">
  <img src="https://archive.apdp.bj/wp-content/uploads/2020/06/banorservicepub-scaled.jpg" alt="Logo Public Service" width="30%">
  <p>🌍 <a href="https://assistant-services-publics.vercel.app/" target="_blank">Application en ligne</a>
</div>

Chatbot intelligent utilisant la technologie RAG (Retrieval Augmented Generation) pour améliorer l'accès aux services publics au Bénin.

## Installation rapide

```bash
# Clone du projet
git clone https://github.com/Arix-ALIMAGNIDOKPO/NLP-G7-assistant-services-publics.git
cd NLP-G7-assistant-services-publics

# Configuration du backend
cd backend
python -m venv env
source env/bin/activate  # Linux/Mac
env\Scripts\activate    # Windows
pip install -r requirements.txt
python create_db.py

# Configuration du frontend
cd ../frontend
npm i
```

## ▶ Exécution

```bash
# Backend (port 8000)
cd backend && python api.py

# Frontend (port 5173)
cd ../frontend && npm run dev
```

## 🛠 Stack technique

| Composant       | Technologies                                                                |
|-----------------|-----------------------------------------------------------------------------|
| **Chatbot AI**    | LangChain, Gemini, chroma db
| **Backend**     | flask API                                       |
| **Frontend**    | React 18, Vite, TypeScript, shadcn-ui, Tailwind CSS                         |
| **Déploiement** | Vercel, render.com , GitHub Actions                                              |


## 📄 Licence

Logiciel open-source sous licence [MIT](LICENSE) - © 2024 Équipe G7 NLP


## 📄 Application en ligne

Ce projet a été déployé sur le lien suivant <a href="https://assistant-services-publics.vercel.app/" target="_blank">Application en ligne</a>

<div align="center">
  <sub>Développé avec ❤️ pour l'innovation publique au Bénin</sub>
</div>
```

