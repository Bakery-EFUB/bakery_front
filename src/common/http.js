import axios from "axios";

export default axios.create({
  baseURL: "https://caker.shop/",
  headers: {
    "Content-type": "application/json",
  },
});
