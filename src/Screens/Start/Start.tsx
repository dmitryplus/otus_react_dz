import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import s from './Start.module.sass';
import { FileList } from '../../Components/FileList';
import { Frame } from '../../Components/Frame';
import { AddFile } from '../../Components/AddFile';
import { Divider } from 'antd';

const Start: FC = () => (
  <div className={s.root}>
    <Frame>
      <Helmet>
        <title>Список файлов</title>
      </Helmet>
      <Divider orientation="left">Список файлов</Divider>
      <FileList />
      <Divider orientation="left">Загрузить свой файл</Divider>
      <AddFile />
    </Frame>
  </div>
);

export default Start;
