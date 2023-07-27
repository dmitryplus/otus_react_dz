import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { Xhprof } from 'src/Types/Xhprof';

export interface FilesState {
  files: [];
  data: Xhprof | null;
  dot: string | null;
  svg: string | null;
  error: string | null;
  threshold: number;
  upload: [UploadRow] | null;
}

export interface UploadRow {
  name: string,
  data: string | ArrayBuffer
}

export type FileDispatch = ThunkDispatch<FilesState, any, AnyAction>;
