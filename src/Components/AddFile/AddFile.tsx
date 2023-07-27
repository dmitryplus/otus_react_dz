import React, { useEffect, useState } from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload } from 'antd';
import type { UploadFile, UploadProps } from 'antd/es/upload/interface';
import { setData, addFileToList } from '../../Redux/files';
import { useDispatch } from 'react-redux';
import { GetLinkToGraph } from '../../Services';
import { useNavigate } from 'react-router-dom';

export const AddFile: React.FC = () => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const dispatch = useDispatch<any>();

  const navigate = useNavigate();

  useEffect(() => {
    fileList.forEach((file) => {
      const reader = new FileReader();

      reader.readAsText(file);

      dispatch(addFileToList(file.name));

      dispatch(setData(reader.result));

      navigate(GetLinkToGraph(file.name));
    });
  }, [fileList]);

  const props: UploadProps = {
    accept: '.xhprof',
    showUploadList: false,
    beforeUpload: (file) => {
      setFileList([file]);

      return false;
    },
    fileList,
  };

  return (
    <>
      <Upload {...props}>
        <Button icon={<UploadOutlined />}>Загрузить (.xhprof)</Button>
      </Upload>
    </>
  );
};
