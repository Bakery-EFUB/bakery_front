import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";
const name = "UserSlice";

const initialState = {
  nickname: "",
  imageUrl: "",
  role: "",
  email: "",
  name: "",
  phoneNum: "",
  isLogin: false,
};

export const userSlice = createSlice({
  name: name,
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.nickname = action.payload.nickname;
      state.imageUrl = action.payload.imageUrl;
      state.role = action.payload.role;
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.phoneNum = action.payload.phoneNum;
      state.isLogin = true;
    },
    initUser: state => {
      state.nickname = initialState.nickname;
      state.imageUrl = initialState.imageUrl;
      state.role = initialState.role;
      state.email = initialState.email;
      state.name = initialState.name;
      state.phoneNum = initialState.phoneNum;
      state.isLogin = initialState.isLogin;
    },
  },
  extraReducers: builder => {
    builder.addCase(PURGE, () => initialState);
  },
});

export const { setUser, initUser } = userSlice.actions;

export default userSlice.reducer;
