import { Xhprof } from '../Types/xhprof';
import { xhprofGetPossibleMetrics } from './xhprofGetPossibleMetrics';

type functionResult = [string];

export const xhprofGetMetrics = (rowData: Xhprof): functionResult => {
    return ['wt', 'cpu', 'mu', 'pmu'];
};
