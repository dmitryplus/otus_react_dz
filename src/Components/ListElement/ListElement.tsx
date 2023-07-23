import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { GetLinkToGraph } from 'src/Services/Navigation';
import s from './ListElement.module.sass';

interface FileProps {
  fileName: string;
}

export const ListElement: FC<FileProps> = ({ fileName }) => (
  <div className={s.root}>
    <Link to={GetLinkToGraph(fileName)}>{fileName}</Link>
  </div>
);
ListElement.displayName = 'ListElement';
