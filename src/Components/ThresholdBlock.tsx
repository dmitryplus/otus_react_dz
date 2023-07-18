import React, { Dispatch, MouseEventHandler, SetStateAction, useCallback, useState } from 'react';
import { ScaleSize } from '../Types';
import { useDispatch, useSelector } from 'react-redux';
import { updateScale } from '../Redux/svg';
import { setTreshold } from '../Redux/files';


export const ThresholdBlock: React.FC = () => {

    const threshold = useSelector(store => store.files.threshold);

    const [localThreshold, setLocalThreshold] = useState(threshold);

    const dispatch = useDispatch<any>();



    return (
        <>
            <p>Ограничение на вывод:</p>
            <input defaultValue={threshold.toFixed(2)} onInput={e => setLocalThreshold(e.target.value)} />
            <button onClick={e => dispatch(setTreshold(localThreshold))}>Установить</button>
        </>

    );
};
