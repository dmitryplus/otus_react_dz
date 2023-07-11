import { Xhprof } from '../Types/xhprof';
import { xhprofGetPossibleMetrics } from './xhprofGetPossibleMetrics';

//type functionResult = [string];


// function xhprof_parse_parent_child($parent_child) {
//     $ret = explode("==>", $parent_child);
//
//     // Return if both parent and child are set
//     if (isset($ret[1])) {
//         return $ret;
//     }
//
//     return array(null, $ret[0]);
// }

export const xhprofParseParentChild = (parent_child: string) => {


    const ret = parent_child.split('==>');

    if (ret[1] !== undefined) {
        return { parent: ret[0], child: ret[1] };
    }

    return { parent: null, child: ret[0] };
};
