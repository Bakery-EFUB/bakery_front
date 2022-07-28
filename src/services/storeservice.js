import http from "../common/http";

const StoreService = {
  getStoreSearch: keyword => http.get(`/stores/search?keyword=${keyword}`),
  getStoreDetail: store_id => http.get(`/stores/${store_id}`),
};
export default StoreService;
