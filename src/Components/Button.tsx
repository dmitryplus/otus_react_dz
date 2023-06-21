import React, { Dispatch, SetStateAction, useCallback } from 'react';
import { BlockFontSize } from '../types/fontSize';

interface ButtonProps {
    label: BlockFontSize;
    onChildFontSizeChange: Dispatch<SetStateAction<BlockFontSize>>;
}

export const Button: React.FC<ButtonProps> = ({
    label,
    onChildFontSizeChange,
}: ButtonProps) => {
    const childHandleInputChange = useCallback(
        () => onChildFontSizeChange(label),
        [onChildFontSizeChange, label]
    );

    return (
        <button type='button' onClick={childHandleInputChange}>
            {label}
        </button>
    );
};
