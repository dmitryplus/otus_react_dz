import { Xhprof } from '../Types/xhprof';
import { xhprofGetMetrics } from './xhprofGetMetrics';
import { xhprofParseParentChild } from './xhprofParseParentChild';

export const xhprofComputeInclusiveTimes = (rowData: Xhprof) => {
  const metrics = xhprofGetMetrics(rowData);

  const symbol_tab: Xhprof = {};

  for (const parent_child of Object.keys(rowData)) {
    const info = rowData[parent_child];

    const { parent, child } = xhprofParseParentChild(parent_child);

    if (parent == child) {
      throw new Error(`Error in Raw Data: parent & child are both: ${parent}`);
    }

    if (symbol_tab[child] === undefined) {
      symbol_tab[child] = { ct: info.ct };

      metrics.forEach(function (metric, index, metrics) {
        symbol_tab[child][metric] = info[metric];
      });
    } else {
      symbol_tab[child].ct += info.ct;

      metrics.forEach(function (metric, index, metrics) {
        symbol_tab[child][metric] += info[metric];
      });
    }
  }

  return symbol_tab;
};
