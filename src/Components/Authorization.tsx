import React, { FC, useState } from 'react';
import { useUserContext } from '../UserProvider';
import { useNavigate } from 'react-router-dom';

export const Authorization: FC = () => {
    const [inputName, setInputName] = useState('');

    const [, { login }] = useUserContext();
    const navigate = useNavigate();

    const onClick = () => {
        login(inputName);
        navigate('/');
    };

    return (
        <>
            <label>
                Имя пользователя:{' '}
                <input
                    data-testid='inputName'
                    value={inputName}
                    onChange={(e) => setInputName(e.target.value)}
                />
            </label>
            <button data-testid='enterButton' onClick={onClick}>
                Вход
            </button>
        </>
    );
};
