import http from "../common/http";
const AuthService = {
  getLogin: () => http.get(`/login`),
};
export default AuthService;
