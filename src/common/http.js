import axios from "axios";

const token = JSON.parse(localStorage.getItem("token"));

export default axios.create({
  baseURL: "https://caker.shop/",
  headers: {
    "X-AUTH-TOKEN": token,
  },
});
