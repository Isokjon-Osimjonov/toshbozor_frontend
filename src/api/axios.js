import axios from "axios";
import { BASE_URL } from "../constants";

class Requests {
  constructor() {
    this.api = axios.create({
      baseURL: BASE_URL,
    });
  }
  get(endpoint) {
    return this.api.get(endpoint);
  }
}

export const API = new Requests();
