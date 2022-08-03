import http from "../common/http";
const AuthService = {
  login: token => {
    http.defaults.headers.common["X-AUTH-TOKEN"] = token;
    return http.get("/members/account/profile");
  },
  logout: () => {},
};
export default AuthService;
