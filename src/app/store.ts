import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import navReducer from "./state/navSlice";

export const store = configureStore({
  reducer: {
    nav: navReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
