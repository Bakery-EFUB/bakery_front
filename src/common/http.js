import axios from "axios";

const token = JSON.parse(localStorage.getItem("token"));

console.log("토큰", token);

export default axios.create({
  baseURL: "https://caker.shop/",
  headers: {
    "Content-type": "application/json",
    "X-AUTH-TOKEN": token,
  },
});
