import HomeService from "../services/homeservice";

export const GetRecommendShop = async () => {
  try {
    const res = await HomeService.getRecommend();
    console.log(res);
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const GetOrder = async () => {
  try {
    const res = await HomeService.getOrder();
    console.log(res);
  } catch (err) {
    return Promise.reject(err);
  }
};
