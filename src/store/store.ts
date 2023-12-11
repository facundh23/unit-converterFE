import { configureStore } from "@reduxjs/toolkit";
import { convertorSlice } from "./slices/convertor/convertorSlice";

export const store = configureStore({
  reducer: {
    convertor: convertorSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
