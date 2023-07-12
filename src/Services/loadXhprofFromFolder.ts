import { unserialize } from 'locutus/php/var';

const folder: string = '../Data/';

// export const LoadXhprofFromFolder = (
//     fileName: string
// ): void => {
//     fetch(folder + fileName)
//         .then((response) => response.text())
//         .then((response) => {
//             return unserialize(response);
//         })
//         .catch((err) => console.log(err));
// };

import axios from '../Hooks/axios';

export const LoadXhprofFromFolder = async (fileName: string): Promise<{ data: T; status: number }> => {
    const { data, status } = await axios.get(folder + fileName);

    if (status !== 200) {
        throw new Error();
    }

    return { data: unserialize(data) , status };
};