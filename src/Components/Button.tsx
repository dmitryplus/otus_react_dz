import React from 'react';

interface ButtonProps {
    label: string;
}

export const Button = ({ label }: ButtonProps) => {
    if (label.length !== 1) {
        return <></>;
    }

    return (
        <button type='button' onClick={() => alert(label)}>
            {label}
        </button>
    );
};
