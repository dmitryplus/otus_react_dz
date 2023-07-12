import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { GetFilesList } from '../Services';


export const updateFilesList = createAsyncThunk(
    'files/fetchAll',
    async () => {
        const response = await GetFilesList();
        return response.data;
    }
);


interface FilesState {
    files: [];
}

const initialState = {
    files: []
} as FilesState;

export const filesSlice = createSlice({
    name: 'files',
    initialState,
    reducers: {
        // standard reducer logic, with auto-generated action types per reducer
    },
    extraReducers: (builder) => {
        builder.addCase(updateFilesList.fulfilled, (state, action) => {
            state.files = action.payload;
        });
    }
});

