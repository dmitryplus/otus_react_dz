import React, { FC } from 'react';

export const Authorization: FC = () => {
    const onClick = () => {
        console.log('auth click');
    };

    return (
        <>
            <button onClick={onClick}>Вход</button>
        </>
    );
};
