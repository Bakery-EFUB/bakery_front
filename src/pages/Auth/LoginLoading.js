import AuthService from "../../services/authservice";
import LoadingPage from "../LoadingPage";
import { useNavigate } from "react-router-dom";

const LoginLoading = () => {
  const nav = useNavigate();
  const token = new URL(document.location.toString()).searchParams.get('token');
  
  AuthService.login(token)
    .then((res) => {
      localStorage.setItem('user', JSON.stringify(res.data));
      nav("/");
    }).catch((e) => {
    console.error(e, "로그인에 실패했습니다.");
  });
  return <LoadingPage/>;
};

export default LoginLoading;
