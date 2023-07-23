import { createSlice } from '@reduxjs/toolkit';
import { parse } from 'svg-parser';
import { SvgState } from '../Types';

const initialState = {
  params: null,
  elements: null,
  viewBox: null,
  height: null,
  width: null,
  id: null,
  translate: null,
  scale: 1,
} as SvgState;

export const svgSlice = createSlice({
  name: 'svg',
  initialState,
  reducers: {
    fillStateFromSvg: (state: SvgState = initialState, action) => {
      const fullParsed = parse(action.payload);

      const parsed = fullParsed?.children[0];

      const allParams = { ...parsed?.properties, ...fullParsed?.children[0]?.children[0]?.properties };

      state.params = allParams;

      state.viewBox = allParams.viewBox;
      state.height = Number(allParams.height.replace('pt', ''));
      state.width = Number(allParams.width.replace('pt', ''));

      state.originalWidth = state.width;
      state.originalHeight = state.height;

      state.id = allParams.id;

      state.translate = `4 ${Math.round(state.height)}`;

      state.elements = parsed?.children[0]?.children;

      state.scale = 1;
    },

    updateScale: (state, action) => {
      state.scale += action.payload;

      if (state.scale < 0.1) {
        state.scale = 0.1;
      }

      if (state.originalWidth && state.originalHeight) {
        state.width = Math.round(state!.originalWidth * state.scale);
        state.height = Math.round(state.originalHeight * state.scale);
        state.translate = `4 ${Math.round(state.originalHeight)}`;
      }
    },
  },
});

export const { fillStateFromSvg, updateScale } = svgSlice.actions;
