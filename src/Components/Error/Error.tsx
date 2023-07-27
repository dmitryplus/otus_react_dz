import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import s from './Error.module.sass';

export const Error: FC = () => (
  <div className={s.root}>
    <h1>Ошибка </h1>
    <p>Что-то пошло не так</p>
    <Link to=".">В список файлов</Link>
  </div>
);
Error.displayName = 'Error';
