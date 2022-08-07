import AuthService from "../../services/authservice";
import LoadingPage from "../LoadingPage";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAppDispatch } from "../../store";
import { setUser } from "../../store/features/userSlice";

const LoginLoading = () => {
  const dispatch = useAppDispatch();
  const setUserInfo = user_token => {
    dispatch(setUser(user_token));
    console.log(user_token);
  };
  const nav = useNavigate();
  const token = new URLSearchParams(location.search).get("token");
  const firstLogin = new URLSearchParams(location.search).get("firstLogin");
  localStorage.setItem("token", JSON.stringify(token));
  useEffect(() => {
    AuthService.login(token)
      .then(res => {
        localStorage.setItem("isLogin", JSON.stringify("true"));
        setUserInfo(res.data);
      })
      .catch(e => {
        console.error(e, "로그인에 실패했습니다.");
      })
      .finally(() => {
        // 오류나도 일단 넘어가게
        setTimeout(() => {
          if (firstLogin === "true") {
            nav("/loginhome");
          } else {
            nav("/");
          }
        }, 1000);
      });
  }, []);

  return (
    <>
      <LoadingPage />
    </>
  );
};

export default LoginLoading;
