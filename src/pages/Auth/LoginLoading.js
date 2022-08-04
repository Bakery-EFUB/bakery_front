import AuthService from "../../services/authservice";
import LoadingPage from "../LoadingPage";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const LoginLoading = () => {
  const nav = useNavigate();

  const token = new URL(document.location.toString()).searchParams.get("token");
  localStorage.setItem("token", JSON.stringify(token));

  const firstLogin = new URL(document.location.toString()).searchParams.get(
    "firstLogin",
  );

  AuthService.login(token)
    .then(res => {
      localStorage.setItem("user", JSON.stringify(res.data));
      localStorage.setItem("isLogin", JSON.stringify("true"));
    })
    .catch(e => {
      console.error(e, "로그인에 실패했습니다.");
    });

  setTimeout(() => {
    if (firstLogin === "true") {
      nav("/loginhome");
    } else {
      nav("/");
    }
  }, 2000);

  console.log("현재 유저", JSON.parse(localStorage.getItem("user")));

  return (
    <>
      <LoadingPage />
    </>
  );
};

export default LoginLoading;
