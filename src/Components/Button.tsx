import React, { useCallback } from 'react';
import { BlockFontSize } from '../types/fontSize';

interface ButtonProps {
    label: BlockFontSize;
    onChildFontSizeChange: unknown;
}

export const Button = ({ label, onChildFontSizeChange }: ButtonProps) => {

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
