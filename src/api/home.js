import HomeService from "../services/homeservice";

export const GetRecommend = async () => {
  try {
    const res = await HomeService.getRecommend();
    console.log(res);
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
