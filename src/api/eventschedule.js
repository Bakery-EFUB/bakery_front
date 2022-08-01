import PickupService from "../services/pickupservice";

export const GetAllSchedules = async (storeId) => {
  try {
    const res = await PickupService.getAllSchedules(storeId);
    console.log(res);
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const DeleteSchedule = async (storeId, eventId) => {
  try {
    const res = await PickupService.deleteSchedule(storeId, eventId);
    console.log(res);
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const AddSchedule = async (data) => {
  try {
    const res = await PickupService.addSchedule(data);
    console.log(res);
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
}
