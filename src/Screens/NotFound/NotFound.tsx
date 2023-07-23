import React from 'react';
import { Frame } from 'src/Components/Frame';
import { Link } from 'react-router-dom';
import s from './NotFound.module.sass';

// eslint-disable-next-line react/function-component-definition
const NotFound: React.FC = () => (
  <div className={s.root}>
    <Frame>
      <div>404</div>
      <Link to=".">В список файлов</Link>
    </Frame>
  </div>
);

export default NotFound;
