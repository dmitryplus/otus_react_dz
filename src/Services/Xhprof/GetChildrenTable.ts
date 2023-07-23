import { Xhprof } from '../Types/xhprof';
import { getPossibleMetrics } from './GetPossibleMetrics';
import { parseParentChild } from './ParseParentChild';
import { ChildrenTable } from '../Types';

export const getChildrenTable = (rowData: Xhprof) => {
  const children_table: ChildrenTable = {};

  for (const parent_child of Object.keys(rowData)) {
    const info = rowData[parent_child];

    const { parent, child } = parseParentChild(parent_child);

    if (parent === null) {
      break;
    }

    if (children_table[parent] === undefined) {
      children_table[parent] = [child];
    } else {
      children_table[parent].push(child);
    }
  }

  return children_table;
};
