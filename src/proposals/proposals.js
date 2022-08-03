import http from "../common/http";
 const Proposals = {
    getOrder: () => http.get(`/orders`),
 };
 export default Proposals;