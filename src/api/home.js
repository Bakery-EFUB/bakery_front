import HomeService from "../services/homeservice";

export const GetRecommendShop = async () => {
  try {
    const res = await HomeService.getRecommend();
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const GetOrder = async () => {
  try {
    const res = await HomeService.getOrder();
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
