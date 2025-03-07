interface ApiResponse {
  response?: string;
  answer?: string;
  error?: string;
}

const API_URL = "https://benin-service-chatbot.onrender.com";
const MAX_RETRIES = 3;
const RETRY_DELAY = 1000; // 1 seconde entre les tentatives

/**
 * Envoie un message à l'API avec plusieurs tentatives en cas d'échec.
 * @param content Le message à envoyer.
 * @param retryCount Le nombre de tentatives déjà effectuées.
 * @returns La réponse de l'API.
 */
export const sendMessageToAPI = async (content: string, retryCount = 0): Promise<ApiResponse> => {
  try {
    console.log(`Tentative d'envoi à l'API (essai ${retryCount + 1}/${MAX_RETRIES + 1})...`);

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({ query: content }),
    };

    const response = await fetch(API_URL, requestOptions);
    const contentType = response.headers.get('Content-Type') || "";
    let data: any;

    if (contentType.includes('application/json')) {
      data = await response.json();
    } else {
      const text = await response.text();
      try {
        // On tente tout de même de parser en JSON, si c'est possible
        data = JSON.parse(text);
      } catch {
        // Si ce n'est pas un JSON valide, on considère le texte comme la réponse
        data = { response: text };
      }
    }

    console.log(data);

    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }

    return data;
  } catch (error) {
    console.error(`Erreur lors de l'appel à l'API (essai ${retryCount + 1}):`, error);

    if (retryCount < MAX_RETRIES) {
      console.log(`Nouvelle tentative dans ${RETRY_DELAY / 1000} secondes...`);
      await new Promise(resolve => setTimeout(resolve, RETRY_DELAY));
      return sendMessageToAPI(content, retryCount + 1);
    }

    const errorMessage = error instanceof Error ? error.message : "Erreur inconnue";
    return { error: errorMessage };
  }
};

/**
 * Fonction simplifiée pour envoyer un message à l'API.
 * @param content Le message à envoyer.
 * @returns La réponse de l'API.
 */
export const sendMessage = async (content: string): Promise<ApiResponse> => {
  return await sendMessageToAPI(content);
};
