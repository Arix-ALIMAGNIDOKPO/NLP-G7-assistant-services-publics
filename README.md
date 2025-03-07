# Assistant Services Publics

<div align="center">
  <img src="https://archive.apdp.bj/wp-content/uploads/2020/06/banorservicepub-scaled.jpg" alt="Logo Public Service" width="25%" height="100">
</div>

## 📖 Overview

Assistant Services Publics is a chatbot powered by Retrieval Augmented Generation (RAG) designed to enhance accessibility to public services in Benin. This tool answers questions and resolves problems related to public services in Benin, making government resources more accessible to citizens and others. Our project aims to contribute to the growing AI ecosystem in Benin while providing practical value.

## 📋 Features

- Interactive chatbot interface for public service inquiries
- RAG (Retrieval Augmented Generation) technology for accurate responses
- Information about various public services in Benin
- User-friendly interface built with modern web technologies

## 🚀 Live Demo

Try the application here: [Assistant Services Publics](https://assistant-services-publics.vercel.app/)

## 💻 Installation

### Back-end Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/Arix-ALIMAGNIDOKPO/NLP-G7-assistant-services-publics.git
   ```

2. Navigate to the backend directory:
   ```bash
   cd NLP-G7-assistant-services-publics/backend
   ```

3. Check your Python version (Python 3.11.3 recommended):
   ```bash
   python --version
   ```

4. Create a virtual environment:
   ```bash
   python -m venv env
   ```

5. Activate the virtual environment:
   - Windows:
     ```bash
     env\Scripts\activate
     ```
   - macOS/Linux:
     ```bash
     source env/bin/activate
     ```

6. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

7. Initialize the database:
   ```bash
   python create_db.py
   ```

### Front-end Setup

1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```

2. Install dependencies:
   ```bash
   npm i
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## 🛠️ Technologies

### Backend
- Python 3.11.3
- RAG (Retrieval Augmented Generation)
- Database (SQLite or other implementation)

### Frontend
- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## 📱 Usage

After installation, you can use the application locally by:

1. Running both backend and frontend servers
2. Opening the provided local development URL in your browser
3. Interacting with the chatbot by asking questions about public services in Benin

Alternatively, you can access the deployed version at [https://assistant-services-publics.vercel.app/](https://assistant-services-publics.vercel.app/)

## 👥 Contributing

We welcome contributions to improve the Assistant Services Publics!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the [MIT License](LICENSE).

## 🔗 Contact

For questions or feedback, please open an issue in the GitHub repository.

---

<div align="center">
  <p>Made with ❤️ by NLP Group 7</p>
</div>
