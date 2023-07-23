import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import s from './FileList.module.sass';
import { List } from '../../Components/List';
import { Frame } from '../../Components/Frame';

const FileList: FC = () => (
  <div className={s.root}>
    <Frame>
      <Helmet>
        <title>Список файлов</title>
      </Helmet>
      <div>Список файлов</div>
      <List />
    </Frame>
  </div>
);

export default FileList;
