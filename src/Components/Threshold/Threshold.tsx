import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTreshold } from 'src/Redux/files';
import s from './Threshold.module.sass';
import { State } from 'src/Types';
import { Button, Input, Space } from 'antd';

export const Threshold: React.FC = () => {
  const threshold = useSelector((store: State) => store.files.threshold);

  const [localThreshold, setLocalThreshold] = useState(threshold);

  const dispatch = useDispatch<any>();

  return (
    <div className={s.root}>
      <Space direction="vertical" size="small">
        <Space.Compact>
          <Input
            addonBefore="Коэффицент:"
            defaultValue={threshold.toFixed(2)}
            onInput={(e) => setLocalThreshold(e.target.value)}
          />
          <Button type="primary" onClick={(e) => dispatch(setTreshold(localThreshold))}>
            Установить
          </Button>
        </Space.Compact>
      </Space>
    </div>
  );
};
