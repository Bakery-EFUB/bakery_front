import axios from "axios";

const token = JSON.parse(localStorage.getItem("token"));

console.log("토큰", token);

export default axios.create({
  baseURL: "https://caker.shop/",
  headers: {
    "X-AUTH-TOKEN": token,
  },
});
