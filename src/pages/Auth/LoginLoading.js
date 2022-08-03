import AuthService from "../../services/authservice";
import LoadingPage from "../LoadingPage";
import { useNavigate } from "react-router-dom";

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

      if (firstLogin === "false") {
        console.log("firstLogin아아아아아", firstLogin);
        nav("/loginhome");
      } else {
        nav("/");
      }

      console.log("로그인 정보 확인", res.data);
    })
    .catch(e => {
      console.error(e, "로그인에 실패했습니다.");
    });
  console.log("현재 유저", JSON.parse(localStorage.getItem("user")));

  return <LoadingPage />;
};

export default LoginLoading;
