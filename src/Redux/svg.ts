import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { GetFilesList, LoadXhprofFromFolder, xhprofGenerateDotScript } from '../Services';
import { Xhprof } from '../Types';
import { GetGraphvizSvg } from '../Services/getGrapvizSvg';
import { parse } from 'svg-parser';

interface SvgElement {
    type: string,
    tagName: string,
    properties: Object,
    children: []
}

interface SvgParams {
    class: string,
    height: string,
    id: string,
    transform: string,
    viewBox: string,
    width: string,
    xmlns: string,
    'xmlns:xlink': string,
}

interface SvgState {
    params: SvgParams | null
    elements: [SvgElement] | null,
}

const initialState = {
    params: null,
    elements: null
} as SvgState;

export const svgSlice = createSlice({
    name: 'svg',
    initialState,
    reducers: {
        fillStateFromSvg: (state = initialState, action) => {

            const fullParsed = parse(action.payload);

            const parsed = fullParsed?.children[0];

            state.params = { ...parsed?.properties, ...fullParsed?.children[0]?.children[0]?.properties };
            state.elements = parsed?.children[0]?.children;
        }
    }
});

export const { fillStateFromSvg } = svgSlice.actions;

