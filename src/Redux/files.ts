import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { GetFilesList, LoadXhprofFromFolder, xhprofGenerateDotScript } from '../Services';
import { Xhprof } from '../Types';


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

interface FilesState {
    files: [],
    data: Xhprof | null,
    dot: string | null,
}

const initialState = {
    files: [],
    data: null,
    dot: null
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
    }
});

export const { createDotFromXhprof } = filesSlice.actions;

