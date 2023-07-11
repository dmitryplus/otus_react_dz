import { Xhprof } from '../Types/xhprof';
import { xhprofGetPossibleMetrics } from './xhprofGetPossibleMetrics';
import { xhprofParseParentChild } from './xhprofParseParentChild';
import { ChildrenTable } from '../Types';

//
// function xhprof_get_children_table($raw_data)
// {
//     $children_table = [];
//     foreach ($raw_data as $parent_child => $info) {
//     [$parent, $child] = xhprof_parse_parent_child($parent_child);
//     if (!isset($children_table[$parent])) {
//         $children_table[$parent] = [$child];
//     } else {
//         $children_table[$parent][] = $child;
//     }
// }
//
//     return $children_table;
// }

export const xhprofGetChildrenTable = (rowData: Xhprof) => {
    const children_table: ChildrenTable = {};

    for (const parent_child of Object.keys(rowData)) {
        const info = rowData[parent_child];

        const { parent, child } = xhprofParseParentChild(parent_child);

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
