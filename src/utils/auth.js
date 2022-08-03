export const isLogined = localStorage.getItem("user");
export const userRole = JSON.parse(localStorage.getItem("user"))?.role;
export const userName = JSON.parse(localStorage.getItem("user"))?.nickname;
export const userImage = JSON.parse(localStorage.getItem("user"))?.imageUrl;
