import React, { useEffect, useState } from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload } from 'antd';
import type { UploadFile, UploadProps } from 'antd/es/upload/interface';
import { addFileToList, addUpload } from '../../Redux/files';
import { useDispatch } from 'react-redux';
import { UploadRow } from 'src/Types';

export const AddFile: React.FC = () => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const dispatch = useDispatch<any>();

  useEffect(() => {
    fileList.forEach((file) => {
      const reader = new FileReader();

      reader.readAsText(file);

      reader.onload = function () {
        dispatch(addFileToList(file.name));

        const uploadFile: UploadRow = {
          name: file.name,
          data: reader.result,
        };

        dispatch(addUpload(uploadFile));
      };
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
