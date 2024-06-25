import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isMenuOpen: false,
};

const menuSlice: any = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsMenuOpen: (state,action) => {
      state.isMenuOpen = action.payload;
    },
  },
});

export const { setIsMenuOpen } = menuSlice.actions;
export default menuSlice.reducer;
