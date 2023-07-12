import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { GetFilesList, LoadXhprofFromFolder } from '../Services';


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
    data: string | null
}

const initialState = {
    files: [],
    data: null
} as FilesState;

export const filesSlice = createSlice({
    name: 'files',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(updateFilesList.fulfilled, (state, action) => {
            state.files = action.payload;
        });
        builder.addCase(loadXhprofData.fulfilled, (state, action) => {
            state.data = action.payload;
        });
    }
});

