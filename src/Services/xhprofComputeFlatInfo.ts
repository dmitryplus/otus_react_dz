import { Xhprof, xprofParams } from '../Types/xhprof';
import { xhprofComputeInclusiveTimes } from './xhprofComputeInclusiveTimes';
import { xhprofGetMetrics } from './xhprofGetMetrics';

type functionResult = {
    symTable: object,
    totals: xprofParams,
};


// function xhprof_compute_flat_info($raw_data, &$overall_totals) {
//
//     global $display_calls;
//
//     $metrics = xhprof_get_metrics($raw_data);
//
//     $overall_totals = array("ct" => 0,
//         "wt" => 0,
//         "ut" => 0,
//         "st" => 0,
//         "cpu" => 0,
//         "mu" => 0,
//         "pmu" => 0,
//         "samples" => 0
// );
//
//     // compute inclusive times for each function
//     $symbol_tab = xhprof_compute_inclusive_times($raw_data);
//

//     /* total metric value is the metric value for "main()" */
//     foreach ($metrics as $metric) {
//         $overall_totals[$metric] = $symbol_tab["main()"][$metric];
//     }
//
//     /*
//      * initialize exclusive (self) metric value to inclusive metric value
//      * to start with.
//      * In the same pass, also add up the total number of function calls.
//      */
//     foreach ($symbol_tab as $symbol => $info) {
//         foreach ($metrics as $metric) {
//             $symbol_tab[$symbol]["excl_" . $metric] = $symbol_tab[$symbol][$metric];
//         }
//         if ($display_calls) {
//             /* keep track of total number of calls */
//             $overall_totals["ct"] += $info["ct"];
//         }
//     }
//
//     /* adjust exclusive times by deducting inclusive time of children */
//     foreach ($raw_data as $parent_child => $info) {
//         list($parent, $child) = xhprof_parse_parent_child($parent_child);
//
//         if ($parent) {
//             foreach ($metrics as $metric) {
//                 // make sure the parent exists hasn't been pruned.
//                 if (isset($symbol_tab[$parent])) {
//                     $symbol_tab[$parent]["excl_" . $metric] -= $info[$metric];
//                 }
//             }
//         }
//     }
//
//     return $symbol_tab;
// }

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
