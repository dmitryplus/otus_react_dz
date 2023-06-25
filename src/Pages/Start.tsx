import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

export const Start: FC = () => {
    return (
        <>
            <div>Страница приветствия для всех</div>
            <NavLink to='auth'> Авторизация </NavLink>
            <NavLink to='/'> Главная страница </NavLink>
            <NavLink to='catalog'> Каталог </NavLink>
            <NavLink to='xhprof'> Вывод элементов </NavLink>
        </>
    );
};
