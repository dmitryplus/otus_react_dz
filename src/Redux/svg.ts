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
    height: number | null,
    width: number | null,
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
            state.height = Number(allParams['height'].replace('pt',''));
            state.width = Number(allParams['width'].replace('pt',''));
            state.id = allParams['id'];

            const startTranslate = allParams['transform'].indexOf('translate(') + 'translate('.length;
            const stopTranslate = allParams['transform'].indexOf(')', startTranslate);

            state.translate = allParams['transform'].slice(startTranslate, stopTranslate);

            state.elements = parsed?.children[0]?.children;
        },

        updateScale: (state, action) => {
            state.scale += action.payload;


            console.log(state.width, state.height);

            // console.log(state);
            //
            const translateX = (1 - state.scale) * Number(state.width);
            const translateY = (1 - state.scale) * Number(state.height);
            //
            //state.translate = translateX + ' ' + translateY

            //state.translate = '0 0';
            //
            // console.log(state);

        }
    }
});

export const { fillStateFromSvg, updateScale } = svgSlice.actions;

