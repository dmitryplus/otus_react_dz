import { Xhprof } from '../Types/xhprof';
import { xhprofGetPossibleMetrics } from './xhprofGetPossibleMetrics';


// function xhprof_build_parent_child_key($parent, $child) {
//     if ($parent) {
//         return $parent . "==>" . $child;
//     } else {
//         return $child;
//     }
// }


export const xhprofBuildParentChildKey = (parent: string | null, child: string): string => {
    if (parent !== null) {
        return parent + '==>' + child;
    } else {
        return child;
    }
};
