import React from 'react';

interface ButtonProps {
    label: string;
    onClick?: () => void;
}

export const Button = ({ label, ...props }: ButtonProps) => {
    if (label.length !== 1) {
        return <></>;
    }

    return (
        <button type="button" {...props}>
            {label}
        </button>
    );
};
