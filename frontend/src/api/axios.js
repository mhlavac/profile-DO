import axios from "axios";
import { API_URL } from "../config";

const instance = axios.create({
  baseURL: 'http://localhost:5555/api/',
  withCredentials: true,
});

export default instance;
