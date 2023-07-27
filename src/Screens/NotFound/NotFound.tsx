import React from 'react';
import { Link } from 'react-router-dom';
import s from './NotFound.module.sass';
import { Frame } from '../../Components/Frame';

const NotFound: React.FC = () => (
  <div className={s.root}>
    <Frame>
      <div>404</div>
      <Link to=".">В список файлов</Link>
    </Frame>
  </div>
);

export default NotFound;
