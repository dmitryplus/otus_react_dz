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
                Имя пользователя: <input value={inputName} onChange={e => setInputName(e.target.value)} />
            </label>
            <button onClick={onClick}>Вход</button>
        </>
    );
};
