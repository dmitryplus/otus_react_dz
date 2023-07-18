import React, { Dispatch, MouseEventHandler, SetStateAction, useCallback } from 'react';
import { ScaleSize } from '../Types';
import { useDispatch, useSelector } from 'react-redux';
import { updateScale } from '../Redux/svg';

interface ButtonProps {
}


export const ScaleBlock: React.FC<ButtonProps> = ({}: ButtonProps) => {

    console.log('work');

    const scale = useSelector(store => store.svg.scale);
    const dispatch = useDispatch<any>();

    return (
        <>
            <p>Масштаб: {scale.toFixed(2)}</p>
            <button type='button' onClick={e => dispatch(updateScale(0.1))}>+</button>
            <button type='button' onClick={e => dispatch(updateScale(-0.1))}>-</button>

        </>

    );
};
