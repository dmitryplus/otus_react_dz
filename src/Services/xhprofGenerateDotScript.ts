import { Xhprof } from '../Types/xhprof';
import {
    xhprofBuildParentChildKey,
    xhprofComputeFlatInfo,
    xhprofGetChildrenTable,
    xhprofParseParentChild
} from './index';

import { sprintf } from 'sprintf-js';

export const xhprofGenerateDotScript = (rowData: Xhprof) => {
        const threshold = 0.01;

        const right: Xhprof = {};
        const left: Xhprof = {};

        const max_width = 5;
        const max_height = 3.5;
        const max_fontsize = 35;
        const max_sizing_ratio = 20;


        const { symTable, totals } = xhprofComputeFlatInfo(rowData);

        const childrenTable = xhprofGetChildrenTable(rowData);

        let node: string | null = 'main()';


        //console.log(childrenTable[node]);


        interface Paths {
            [key: string]: boolean;
        }

        const path: Paths = {};
        const path_edges: Paths = {};
        const visited: Paths = {};

        while (node !== null) {

            visited[node] = true;

            if (childrenTable[node] !== undefined) {

                let max_child: string | null = null;


                childrenTable[node].forEach(function(child, index) {

                    if (visited[child] === undefined) {

                        const childWt = rowData[xhprofBuildParentChildKey(node, child)].wt;

                        if (
                            max_child === null ||
                            Math.abs(childWt) >
                            Math.abs(
                                rowData[
                                    xhprofBuildParentChildKey(node, max_child)
                                    ].wt
                            )
                        ) {
                            max_child = child;
                        }
                    }

                });


                if (max_child !== null) {
                    path[max_child] = true;
                    path_edges[xhprofBuildParentChildKey(node, max_child)] = true;
                }
                node = max_child;

            } else {
                node = null;
            }
        }

        //TODO тут можно обработать benchmark
        // // if it is a benchmark callgraph, we make the benchmarked function the root.
        //// if ($source == "bm" && array_key_exists("main()", $sym_table)) {


        //TODO тут можно фильтровать
// // use the function to filter out irrelevant functions.
// if (!empty($func)) {

        const func = undefined;


        let result = 'digraph call_graph {\n';


        //TODO  тут обрабатываем параметр threshold - перенести в стэйт
        // Filter out functions whose exclusive time ratio is below threshold, and
        // also assign a unique integer id for each function to be generated. In the
        // meantime, find the function with the most exclusive time (potentially the
        // performance bottleneck).


        let cur_id = 0;
        let max_wt = 0;

        for (const symbol of Object.keys(symTable)) {

            const info = symTable[symbol];

            if (func === undefined && Math.abs(info.wt / totals.wt) < threshold) {
                delete symTable[symbol];
            } else {

                if (max_wt == 0 || max_wt < Math.abs(info.excl_wt)) {
                    max_wt = Math.abs(info.excl_wt);
                }

                symTable[symbol].id = cur_id;
                cur_id++;
            }

        }


        let label = '';

        // // Generate all nodes' information.
        for (const symbol of Object.keys(symTable)) {
            let sizing_factor = 0;

            const info = symTable[symbol];

            if (info.excl_wt == 0) {
                sizing_factor = max_sizing_ratio;
            } else {
                sizing_factor = max_wt / Math.abs(info.excl_wt);
                if (sizing_factor > max_sizing_ratio) {
                    sizing_factor = max_sizing_ratio;
                }

            }

            let fillcolor = ((sizing_factor < 1.5) ? ', style=filled, fillcolor=red' : '');

            // highlight nodes along critical path.
            if (!fillcolor && path[symbol] !== undefined) {
                fillcolor = ', style=filled, fillcolor=yellow';
            }

            const fontsize = ', fontsize=' + Math.round(max_fontsize / ((sizing_factor - 1) / 10 + 1));

            const width = ', width=' + sprintf('%.1f', max_width / sizing_factor);
            const height = ', height=' + sprintf('%.1f', max_height / sizing_factor);

            let shape = '';
            let name = '';

            if (symbol === 'main()') {
                shape = 'octagon';
                name = 'Total: ' + (totals.wt / 1000.0) + ' ms\\n'
                    + symbol.replace(/'/g, '\\\'');
            } else {
                shape = 'box';
                name = symbol.replace(/'/g, '\\\'') + '\\nInc: ' + sprintf('%.3f', info.wt / 1000) +
                    ' ms (' + sprintf('%.1f%%', 100 * info.wt / totals.wt) + ')';
            }


            label = ', label=\"' + name + '\\nExcl: '
                + (sprintf('%.3f', info.excl_wt / 1000.0)) + ' ms ('
                + sprintf('%.1f%%', 100 * info.excl_wt / totals.wt)
                + ')\\n' + info.ct + ' total calls\"';


            result += 'N' + symTable[symbol].id;

            result += '[shape=' + shape + label + width + height + fontsize + fillcolor + '];\n';


        }

// // Generate all the edges' information.

        for (const parent_child of Object.keys(rowData)) {

            const info = rowData[parent_child];


            const { parent, child } = xhprofParseParentChild(parent_child);

            if (symTable[parent] !== undefined && symTable[child] !== undefined && (
                func === undefined || (func !== undefined && (parent === func || child === func))
            )) {


                label = info.ct === 1 ? info.ct + ' call' : info.ct + ' calls';

                let headlabel = symTable[child].wt > 0 ? sprintf('%.1f%%', 100 * info.wt / symTable[child].wt) : '0.0%';

//                let taillabel = (symTable[parent].wt > 0) ? sprintf('%.1f%%', 100 * info.wt / (symTable[parent].wt - symTable[parent].excl_wt)) : '0.0%';
                let taillabel = (symTable[parent].wt > 0) ? sprintf('%.1f%%', 100 * info.wt / (symTable[parent].wt)) : '0.0%';

                let linewidth = 1;
                let arrow_size = 1;

                if (path_edges[xhprofBuildParentChildKey(parent, child)] !== undefined) {
                    linewidth = 10;
                    arrow_size = 2;
                }

                result += 'N' + symTable[parent].id + ' -> N' + symTable[child].id;

                result += `[arrowsize=${arrow_size}, color=grey, style="setlinewidth(${linewidth})",`
                    + ' label="' + label + '", headlabel="' + headlabel + '", taillabel="' + taillabel + '" ]';

                result += ';\n';
            }

        }
        result = result + '\n}';

        return result;
    }
;
