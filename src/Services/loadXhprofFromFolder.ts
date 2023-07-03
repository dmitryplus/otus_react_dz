import { unserialize } from 'locutus/php/var';
import { Xhprof } from '../Types';
import { Dispatch, SetStateAction } from 'react';

const DEFAULT_ROW_LIMIT: number = 100;
const folder: string = './Data/';

export const LoadXhprofFromFolder = (
    fileName: string,
    saveMethod: Dispatch<SetStateAction<Xhprof>>,
    rowLimit: number = DEFAULT_ROW_LIMIT
): void => {
    fetch(folder + fileName)
        .then((response) => response.text())
        .then((response) => {
            const originalData = unserialize(response);

            const xhprofData: Xhprof = {};

            let counter = 1;
            for (const key of Object.keys(originalData)) {
                if (counter > rowLimit) {
                    break;
                }

                xhprofData[key] = originalData[key];

                counter++;
            }

            saveMethod(xhprofData);
        })
        .catch((err) => console.log(err));
};
