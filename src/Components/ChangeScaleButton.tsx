import React, { Dispatch, SetStateAction, useCallback } from 'react';
import { ScaleSize } from '../Types';

interface ButtonProps {
    label: ScaleSize;
    onChildScaleSizeChange: Dispatch<SetStateAction<ScaleSize>>;
}

export const ChangeScaleButton: React.FC<ButtonProps> = ({
    label,
    onChildScaleSizeChange,
}: ButtonProps) => {
    const childHandleInputChange = useCallback(
        () => onChildScaleSizeChange(label),
        [onChildScaleSizeChange, label]
    );

    return (
        <button type='button' onClick={childHandleInputChange}>
            {label}
        </button>
    );
};
