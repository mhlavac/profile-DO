import axios from 'axios';

const BASE_URL = 'http://localhost:5555/api';

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/register`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// En el mismo archivo donde tienes registerUser y axios importados
export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, userData); // Cambia la URL a la ruta correcta para el inicio de sesión
    return response.data;
  } catch (error) {
    throw error;
  }
};
