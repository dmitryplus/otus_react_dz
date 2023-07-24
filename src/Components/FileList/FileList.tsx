import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetData, updateFilesList } from 'src/Redux/files';
import { ListElement } from 'src/Components/ListElement';
import { FileDispatch, State } from 'src/Types';
import { v4 as uuidv4 } from 'uuid';
import s from './FileList.module.sass';

import { Divider, List, Typography } from 'antd';

export const FileList: FC = () => {
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


  const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ];


  return (
    <div className={s.root}>
      {filesList.map((fileName: string) => (
        <ListElement fileName={fileName} key={uuidv4()} />
      ))}

      {/*<>*/}
      {/*  <Divider orientation="left">Default Size</Divider>*/}
      {/*  <List*/}
      {/*    header={<div>Header</div>}*/}
      {/*    footer={<div>Footer</div>}*/}
      {/*    bordered*/}
      {/*    dataSource={data}*/}
      {/*    renderItem={(item) => (*/}
      {/*      <List.Item>*/}
      {/*        <Typography.Text mark>[ITEM]</Typography.Text> {item}*/}
      {/*      </List.Item>*/}
      {/*    )}*/}
      {/*  />*/}
      {/*  <Divider orientation="left">Small Size</Divider>*/}
      {/*  <List*/}
      {/*    size="small"*/}
      {/*    header={<div>Header</div>}*/}
      {/*    footer={<div>Footer</div>}*/}
      {/*    bordered*/}
      {/*    dataSource={data}*/}
      {/*    renderItem={(item) => <List.Item>{item}</List.Item>}*/}
      {/*  />*/}
      {/*  <Divider orientation="left">Large Size</Divider>*/}
      {/*  <List*/}
      {/*    size="large"*/}
      {/*    header={<div>Header</div>}*/}
      {/*    footer={<div>Footer</div>}*/}
      {/*    bordered*/}
      {/*    dataSource={data}*/}
      {/*    renderItem={(item) => <List.Item>{item}</List.Item>}*/}
      {/*  />*/}
      {/*</>*/}




    </div>
  );
};

FileList.displayName = 'List';
