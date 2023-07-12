import { configureStore } from "@reduxjs/toolkit";
import { filesSlice } from './files';

export const store = configureStore({
  reducer: {
    files: filesSlice.reducer,
  },
});
