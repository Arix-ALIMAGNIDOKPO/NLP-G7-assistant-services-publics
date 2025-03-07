
# 🤖 Assistant des Services Publics Béninois

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000.svg)](https://vercel.com)

<div align="center">
  <img src="https://archive.apdp.bj/wp-content/uploads/2020/06/banorservicepub-scaled.jpg" alt="Logo Public Service" width="25%" height="100">
</div>

Un chatbot intelligent utilisant la technologie RAG (Retrieval Augmented Generation) pour améliorer l'accès aux services publics au Bénin. Ce projet s'inscrit dans une dynamique nationale d'innovation technologique au service des citoyens.

[**Live Demo**](https://assistant-services-publics.vercel.app/) | [Documentation technique](#) | [Contribuer](#contribuer)

## ✨ Fonctionnalités

- Réponses précises sur les procédures administratives
- Support multilingue (français, anglais, langues locales)
- Interface conversationnelle intuitive
- Base de connaissances évolutive
- Intégration avec les systèmes gouvernementaux

## 🚀 Démarrage rapide

### Prérequis

- Python 3.11+
- Node.js 18+
- PostgreSQL 15+

### Installation

#### Backend (API)

```bash
git clone https://github.com/Arix-ALIMAGNIDOKPO/NLP-G7-assistant-services-publics.git
cd backend

# Configuration de l'environnement
python -m venv env
source env/bin/activate  # Linux/MacOS
# env\Scripts\activate  # Windows

# Installation des dépendances
pip install -r requirements.txt

# Configuration de la base de données
python create_db.py

# Lancement du serveur
uvicorn main:app --reload
Frontend (Interface Web)
bash
Copy
cd frontend
npm install
npm run dev
🛠 Architecture technique
Backend
Framework: FastAPI

NLP: LangChain, HuggingFace Transformers

Base de données: PostgreSQL + FAISS

Embeddings: Sentence-Transformers

Cache: Redis

Frontend
Framework: React 18

Build Tool: Vite

UI Toolkit: shadcn-ui

Styling: Tailwind CSS

State Management: Zustand

🌍 Déploiement
L'application est déployée sur Vercel avec une intégration CI/CD :

bash
Copy
# Configuration du déploiement
npm install -g vercel
vercel deploy --prod

📄 Licence
Ce projet est sous licence MIT - voir le fichier LICENSE pour plus de détails.

