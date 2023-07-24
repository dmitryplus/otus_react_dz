import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import s from './Start.module.sass';
import { FileList } from 'src/Components/FileList';
import { Frame } from 'src/Components/Frame';
import { Divider } from "antd";

const Start: FC = () => (
  <div className={s.root}>
    <Frame>
      <Helmet>
        <title>Список файлов</title>
      </Helmet>
      <Divider orientation="left">Список файлов</Divider>
      <FileList />
    </Frame>
  </div>
);

export default Start;
