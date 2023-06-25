import React, { FC } from 'react';

export const Auth: FC = () => {
    const onClick = () => {
        console.log('auth click');
    };

    return (
        <>
            <div>Авторизация</div>
            <button onClick={onClick}>Вход</button>
        </>
    );
};
