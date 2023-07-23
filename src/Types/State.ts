import { FilesState } from './Files';
import { SvgState } from './Svg';

export interface State {
  files: FilesState;
  svg: SvgState;
}
