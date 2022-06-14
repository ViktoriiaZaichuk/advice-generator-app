import axios from 'axios';

const API_URL = 'https://api.adviceslip.com/advice';

export async function getAdvice(id) {
    try {

      const getAdvice = await axios.get(API_URL);
      return getAdvice.data;

    } catch (error) {

      throw error;

    }
}