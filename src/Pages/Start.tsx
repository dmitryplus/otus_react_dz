import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { UserName, useUserContext } from '../UserProvider';

export const Start: FC = () => {
    const [UserName] = useUserContext();

    const toMainPage = <NavLink to='/'> Главная страница </NavLink>;

    let returnComponents = (
        <>
            <div>Меню:</div>
            {toMainPage}
            <NavLink to='auth'> Вход </NavLink>
        </>
    );

    if (UserName) {
        returnComponents = (
            <>
                <p>
                    Пользователь: <b>{UserName}</b>
                </p>
                <div>Меню:</div>
                {toMainPage}
                <NavLink to='catalog'> Каталог </NavLink>
                <NavLink to='xhprof'> Вывод элементов </NavLink>
                <NavLink to='auth'> Выход </NavLink>
            </>
        );
    }

    return returnComponents;
};
