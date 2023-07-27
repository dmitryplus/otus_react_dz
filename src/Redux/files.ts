import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { GetFilesList, GetGraphvizSvg, LoadXhprofFromFolder, generateDotScript } from '../Services';
import { FilesState } from '../Types';

export const updateFilesList = createAsyncThunk('files/fetchAll', async () => {
  const response = await GetFilesList();
  return response.data;
});

export const loadXhprofData = createAsyncThunk('files/loadXhprof', async (fileName: string) => {
  const response = await LoadXhprofFromFolder(fileName);
  return response.data;
});

export const getSvgFromGraphviz = createAsyncThunk('files/getSvg', async (dotFile: string) => {
  const response = await GetGraphvizSvg(dotFile);
  return response.data;
});

const initialState = {
  files: [],
  data: null,
  dot: null,
  svg: null,
  error: null,
  threshold: 0.01,
} as FilesState;

export const filesSlice = createSlice({
  name: 'files',
  initialState,
  reducers: {
    setTreshold: (state: FilesState, action) => {
      state.dot = null;
      state.svg = null;
      state.error = null;
      state.threshold = Number(action.payload);
    },
    resetData: (state = initialState) => {
      state.data = null;
      state.dot = null;
      state.svg = null;
      state.error = null;

      if (typeof state.upload === 'undefined') {
        state.upload = null;
      }
    },
    createDotFromXhprof: (state = initialState) => {
      if (state.data != null && state.dot == null) {
        state.dot = generateDotScript(state.data, state.threshold);
      }
    },
    setData: (state = initialState, action) => {
      state.data = action.payload;
    },
    addFileToList: (state = initialState, action) => {
      state.files = [...state.files, action.payload];
    },
    addUpload: (state = initialState, action) => {
      if (state.upload === null) {
        state.upload = [action.payload];
      } else {
        state.upload = [...state.upload, action.payload];
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
      state.svg = action.payload as string;
      state.error = null;
    });
    builder.addCase(getSvgFromGraphviz.rejected, (state, action) => {
      state.error = 'Graph Error';
      state.svg = null;
    });
  },
});

export const { createDotFromXhprof, resetData, setTreshold, setData, addFileToList, addUpload } = filesSlice.actions;
