import { createSlice } from "@reduxjs/toolkit";
import { log } from "console";

const initialState = {
  users: {
    email: "u.yasa2001@gmail.com",
    password: "1234",
  },
  formRegister: {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  },
  formLogin: {
    email: "",
    password: "",
  },
  isLogin: false,
  isShow: false,
  selected: "login",
};

const userSlice:any = createSlice({
  name: "user",
  initialState,
  reducers: {
    successfullyLogin: (state) => {
      if (
        state.formLogin.email === state.users.email &&
        state.formLogin.password === state.users.password
      ) {
        state.isLogin = true;
        state.isShow = false;
      }
    },
    setIsShow: (state, action) => {
      state.isShow = action.payload;
    },
    setIsLogin: (state, action) => {
      state.isLogin = action.payload;
    },
    setSelected: (state, action) => {
      state.selected = action.payload;
    },
    setFormLogin: (state, action) => {
      state.formLogin = action.payload;
    },
    setFormRegister: (state, action) => {
      state.formRegister = action.payload;
    },
    handleChangeLogin: (state, action) => {
      state.formLogin = {
        ...state.formLogin,
        [action.payload.field]: action.payload.value,
      };
    },
    handleChangeRegister: (state, action) => {
      state.formRegister = {
        ...state.formRegister,
        [action.payload.field]: action.payload.value,
      };
    },
  },
});

export const {
  setIsLogin,
  setIsShow,
  setSelected,
  setFormLogin,
  setFormRegister,
  handleChangeLogin,
  handleChangeRegister,
  successfullyLogin,
} = userSlice.actions;
export default userSlice.reducer;
