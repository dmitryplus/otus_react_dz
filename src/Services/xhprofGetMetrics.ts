import { Xhprof } from '../Types/xhprof';

type functionResult = [string];

export const xhprofGetMetrics = (rowData: Xhprof): functionResult => {
  return ['wt', 'cpu', 'mu', 'pmu'];
};
