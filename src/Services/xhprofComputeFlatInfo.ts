import { Xhprof, xprofParams } from '../Types/xhprof';
import { xhprofComputeInclusiveTimes } from './xhprofComputeInclusiveTimes';
import { xhprofGetMetrics } from './xhprofGetMetrics';

type functionResult = {
  symTable: object;
  totals: xprofParams;
};

export const xhprofComputeFlatInfo = (rowData: Xhprof): functionResult => {
  const metrics = xhprofGetMetrics(rowData);

  //TODO  вынести в состояние
  const totals: xprofParams = {
    ct: 0,
    wt: 0,
    ut: 0,
    st: 0,
    cpu: 0,
    mu: 0,
    pmu: 0,
    samples: 0,
  };

  const symbol_tab = xhprofComputeInclusiveTimes(rowData);

  //TODO переделать - первый раз пустой, возможно еще не догрузился файл
  if (symbol_tab['main()'] === undefined) {
    return {
      symTable: [],
      totals: totals,
    };
  }

  metrics.forEach(function (metric, indexMetric, metrics) {
    totals[metric] = symbol_tab['main()'][metric];
  });

  for (const key of Object.keys(symbol_tab)) {
    metrics.forEach(function (metric, indexMetric, metrics) {
      symbol_tab[key]['excl_' + metric] = symbol_tab[key][metric];
    });

    totals.ct += symbol_tab[key].ct;
  }

  return {
    symTable: symbol_tab,
    totals: totals,
  };
};
