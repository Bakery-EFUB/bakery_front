import http from "../common/http";

const HomeService = {
  getRecommend: () => http.get(`/stores/recommends`),
  getOrder: () => http.get(`/orders/newOrder`),
};
export default HomeService;
