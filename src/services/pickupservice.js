import http from "../common/http";

const PickupService = {
  getAllSchedules: storeId => http.get(`/store/${storeId}/events`),
  deleteSchedule: (storeId, eventId) =>
    http.delete(`/store/${storeId}/events/${eventId}`),
  addSchedule: data => http.post("/events", data),
};
export default PickupService;
