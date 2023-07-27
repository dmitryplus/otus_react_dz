import { Xhprof } from '../../Types/Xhprof';
import { getMetrics } from './GetMetrics';
import { parseParentChild } from './ParseParentChild';

export const computeInclusiveTimes = (rowData: Xhprof) => {
  const metrics = getMetrics(rowData);

  const symbol_tab: Xhprof = {};

  for (const parent_child of Object.keys(rowData)) {
    const info = rowData[parent_child];

    const { parent, child } = parseParentChild(parent_child);

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
