import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../store";
import { NavState } from "./navInterfaces";

const initialState: NavState = {
  isOpenMobileNav: false,
  navList: [
    { value: "Features", to: "/features" },
    { value: "Blog", to: "/blog" },
    { value: "Premium", to: "/premium" },
    { value: "App", to: "/app" },
  ],
  activePath: "/",
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setIsOpenMobileNav: (state: NavState, action: PayloadAction<any>) => {
      state.isOpenMobileNav = action.payload.value;
    },
    setActivePath: (state: NavState, action: PayloadAction<any>) => {
      state.activePath = action.payload.value;
    },
  },
});

export const { setIsOpenMobileNav, setActivePath } = navSlice.actions;

export const selectNavList = (state: RootState) => {
  return state.nav.navList;
};
export const selectIsOpenMobileNav = (state: RootState) => {
  return state.nav.isOpenMobileNav;
};
export const selectActivePath = (state: RootState) => {
  return state.nav.activePath;
};

export default navSlice.reducer;
