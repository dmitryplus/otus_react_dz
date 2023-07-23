import { Xhprof } from '../Types/xhprof';

type functionResult = [string];

export const getMetrics = (rowData: Xhprof): functionResult => {
  return ['wt', 'cpu', 'mu', 'pmu'];
};
