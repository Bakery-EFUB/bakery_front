import axios from "axios";

const token = JSON.parse(localStorage.getItem("token"));

export default axios.create({
  baseURL: "https://caker.shop/",
  headers: {
    "Content-type": "application/json",
    "X-AUTH-TOKEN": token,
  },
});
