
from flask import Flask, request, jsonify
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)  # Ceci permet les requêtes cross-origin

# Simuler une réponse d'IA pour l'exemple
# Dans un cas réel, vous importeriez votre modèle d'IA ici
def get_ai_response(message):
    # C'est ici que vous appelleriez votre modèle d'IA
    # Exemple : response = model.generate(message)
    return f"Voici ma réponse à votre message: '{message}'. Je suis un modèle d'IA simulé."

@app.route('/api/chat', methods=['POST'])
def chat():
    data = request.json
    user_message = data.get('message', '')
    
    if not user_message:
        return jsonify({"error": "Message vide"}), 400
    
    # Obtenir la réponse du modèle IA
    ai_response = get_ai_response(user_message)
    
    return jsonify({
        "response": ai_response,
        "timestamp": "2023-08-18T12:34:56Z"  # Dans une vraie application, utilisez datetime.now().isoformat()
    })

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(debug=True, host='0.0.0.0', port=port)
