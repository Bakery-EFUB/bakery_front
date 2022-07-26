import axios from "axios";

const API = axios.create({
  baseURL: "https://caker.shop",
});

export default API;
