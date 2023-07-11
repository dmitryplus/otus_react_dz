import { Xhprof } from '../Types/xhprof';
import { xhprofGetMetrics } from './xhprofGetMetrics';
import { xhprofParseParentChild } from './xhprofParseParentChild';


//type functionResult = [string];



// function xhprof_compute_inclusive_times($raw_data) {
//     global $display_calls;
//
//     $metrics = xhprof_get_metrics($raw_data);
//
//     $symbol_tab = array();
//
//     /*
//      * First compute inclusive time for each function and total
//      * call count for each function across all parents the
//      * function is called from.
//      */
//     foreach ($raw_data as $parent_child => $info) {
//
//         list($parent, $child) = xhprof_parse_parent_child($parent_child);
//
//         if ($parent == $child) {
//             /*
//              * XHProf PHP extension should never trigger this situation any more.
//              * Recursion is handled in the XHProf PHP extension by giving nested
//              * calls a unique recursion-depth appended name (for example, foo@1).
//              */
//             xhprof_error("Error in Raw Data: parent & child are both: $parent");
//             return;
//         }
//
//         if (!isset($symbol_tab[$child])) {
//
//             if ($display_calls) {
//                 $symbol_tab[$child] = array("ct" => $info["ct"]);
//             } else {
//                 $symbol_tab[$child] = array();
//             }
//             foreach ($metrics as $metric) {
//                 $symbol_tab[$child][$metric] = $info[$metric];
//             }
//         } else {
//             if ($display_calls) {
//                 /* increment call count for this child */
//                 $symbol_tab[$child]["ct"] += $info["ct"];
//             }
//
//             /* update inclusive times/metric for this child  */
//             foreach ($metrics as $metric) {
//                 $symbol_tab[$child][$metric] += $info[$metric];
//             }
//         }
//     }
//
//     return $symbol_tab;
// }


export const xhprofComputeInclusiveTimes = (rowData: Xhprof) => {

    const metrics = xhprofGetMetrics(rowData);

    const symbol_tab: Xhprof = {};

    for (const parent_child of Object.keys(rowData)) {
        const info = rowData[parent_child];

        const { parent, child } = xhprofParseParentChild(parent_child);

        if (parent == child) {
            throw new Error(
                `Error in Raw Data: parent & child are both: ${parent}`
            );
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
