import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { GetFilesList, LoadXhprofFromFolder, xhprofGenerateDotScript } from '../Services';
import { Xhprof } from '../Types';
import { GetGraphvizSvg } from '../Services/getGrapvizSvg';


export const updateFilesList = createAsyncThunk(
    'files/fetchAll',
    async () => {
        const response = await GetFilesList();
        return response.data;
    }
);

export const loadXhprofData = createAsyncThunk(
    'files/loadXhprof',
    async (fileName: string) => {
        const response = await LoadXhprofFromFolder(fileName);
        return response.data;
    }
);

export const getSvgFromGraphviz = createAsyncThunk(
    'files/getSvg',
    async (dotFile: string) => {
        const response = await GetGraphvizSvg(dotFile);
        return response.data;
    }
);

interface FilesState {
    files: [],
    data: Xhprof | null,
    dot: string | null,
    svg: string | null,
    error: string | null,
}

const initialState = {
    files: [],
    data: null,
    dot: null,
    svg: null,
    error: null,
} as FilesState;

export const filesSlice = createSlice({
    name: 'files',
    initialState,
    reducers: {
        createDotFromXhprof: (state = initialState) => {
            if (state.data != null && state.dot == null) {
                state.dot = xhprofGenerateDotScript(state.data);
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(updateFilesList.fulfilled, (state, action) => {
            state.files = action.payload;
        });
        builder.addCase(loadXhprofData.fulfilled, (state, action) => {
            state.data = action.payload;
        });
        builder.addCase(getSvgFromGraphviz.fulfilled, (state, action) => {
            state.svg = action.payload;
            state.error = null;
        });
        builder.addCase(getSvgFromGraphviz.rejected, (state, action) => {
            state.error = 'Graph Error';
            state.svg = null;
        });
    }
});

export const { createDotFromXhprof } = filesSlice.actions;

