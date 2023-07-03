import React, { FC, useState } from 'react';
import { useUserContext } from '../UserProvider';
import { useNavigate } from 'react-router-dom';

export const Logout: FC = () => {
    const [, { logout }] = useUserContext();
    const navigate = useNavigate();

    const onClick = () => {
        logout();

        navigate('/');
    };

    return <button data-testid='exitButton' onClick={onClick}>Выйти</button>;
};
