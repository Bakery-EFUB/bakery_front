<<<<<<< HEAD
import StoreService from "../services/storeservice";

export const GetStoreSearchResult = async keyword => {
  try {
    const res = await StoreService.getStoreSearch(keyword);
    console.log(res);
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const GetStoreDetail = async store_id => {
  try {
    const res = await StoreService.getStoreDetail(store_id);
    console.log(res);
  } catch (err) {
    return Promise.reject(err);
  }
};
=======
import StoreService from "../services/storeservice";

export const GetStoreSearchResult = async keyword => {
  try {
    const res = await StoreService.getStoreSearch(keyword);
    console.log(res);
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const GetStoreDetail = async store_id => {
  try {
    const res = await StoreService.getStoreDetail(store_id);
    console.log(res);
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const GetMyStoreDetail = async () => {
  try {
    const res = await StoreService.getMyStoreDetail();
    console.log(res);
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

>>>>>>> ce39361191a01c19de76bc5ea1997237ef32bd81
