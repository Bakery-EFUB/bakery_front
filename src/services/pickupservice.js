import http from "../common/http";

const PickupService = {
  getAllSchedules: storeId => http.get(`/stores/${storeId}/events`),
  deleteSchedule: (storeId, eventId) =>
    http.delete(`/stores/${storeId}/events/${eventId}`),
  addSchedule: data => http.post("/events", data),
};
export default PickupService;
