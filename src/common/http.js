import axios from "axios";

const token = JSON.parse(localStorage.getItem("token"));

console.log("토큰", token);

export default token
  ? axios.create({
      baseURL: "https://dev.caker.shop/",
      headers: {
        "X-AUTH-TOKEN": token,
      },
    })
  : axios.create({
      baseURL: "https://dev.caker.shop/",
    });
