import { configureStore } from '@reduxjs/toolkit';
import { filesSlice } from './files';
import { svgSlice } from './svg';

export const store = configureStore({
  reducer: {
    files: filesSlice.reducer,
    svg: svgSlice.reducer,
  },
});
