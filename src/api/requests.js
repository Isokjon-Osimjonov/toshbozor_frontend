// api/requests.js
import { API } from "./axios";

export const FETCH_PRODUCTS = async (endpoint) => {
  try {
    const response = await API.get(endpoint);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
