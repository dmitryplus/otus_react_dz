import { createSlice } from '@reduxjs/toolkit';
import { parse } from 'svg-parser';

export interface SvgElement {
    type: string,
    tagName: string,
    properties: {
        class?: string,
        id?: string,
        value?: string,
        fill?: string,
        stroke?: string,
        points?: string,
        "text-anchor"?: string,
        "font-family"?: string,
        "font-size"?: string,
        "stroke-width"?: string,
        d?: string,
        x?: string,
        y?: string
    },
    value?: string,
    children: [SvgElement]
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
    viewBox: string | null,
    height: string | null,
    width: string | null,
    id: string | null,
    translate: string | null,
    scale: number
}

const initialState = {
    params: null,
    elements: null,
    viewBox: null,
    height: null,
    width: null,
    id: null,
    translate: null,
    scale: 1
} as SvgState;

export const svgSlice = createSlice({
    name: 'svg',
    initialState,
    reducers: {
        fillStateFromSvg: (state = initialState, action) => {

            const fullParsed = parse(action.payload);

            const parsed = fullParsed?.children[0];

            const allParams = { ...parsed?.properties, ...fullParsed?.children[0]?.children[0]?.properties };

            state.params = allParams;

            state.viewBox = allParams['viewBox'];
            state.height = allParams['height'];
            state.width = allParams['width'];
            state.id = allParams['id'];

            const startTranslate = allParams['transform'].indexOf('translate(') + 'translate('.length;
            const stopTranslate = allParams['transform'].indexOf(')', startTranslate);

            state.translate = allParams['transform'].slice(startTranslate, stopTranslate);

            state.elements = parsed?.children[0]?.children;

            console.log(state.params);
        }
    }
});

export const { fillStateFromSvg } = svgSlice.actions;

