import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetData, updateFilesList } from 'src/Redux/files';
import { ListElement } from 'src/Components/ListElement';
import { FileDispatch, State } from 'src/Types';
import { v4 as uuidv4 } from 'uuid';
import s from './List.module.sass';

export const List: FC = () => {
  const filesList = useSelector((state: State) => state.files.files);
  const dispatch: FileDispatch = useDispatch();

  useEffect(() => {
    dispatch(resetData());
  }, [dispatch]);

  useEffect(() => {
    if (!filesList.length) {
      dispatch(updateFilesList());
    }
  }, [dispatch, filesList]);

  return (
    <div className={s.root}>
      {filesList.map((fileName: string) => (
        <ListElement fileName={fileName} key={uuidv4()} />
      ))}
    </div>
  );
};

List.displayName = 'List';
