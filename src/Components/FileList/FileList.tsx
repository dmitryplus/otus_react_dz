import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetData, updateFilesList } from '../../Redux/files';
import { FileDispatch, State } from '../../Types';
import s from './FileList.module.sass';

import { List, Space } from 'antd';
import { GetLinkToGraph } from '../../Services';
import { Link } from 'react-router-dom';

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

  return (
    <div className={s.root}>
      <List
        size="large"
        bordered
        dataSource={filesList}
        renderItem={(item) => (
          <List.Item>
            <Space direction="vertical">
              <Link to={GetLinkToGraph(item)}>{item}</Link>
            </Space>
          </List.Item>
        )}
      />
    </div>
  );
};

FileList.displayName = 'List';
