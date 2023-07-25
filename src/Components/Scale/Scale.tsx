import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateScale } from '../../Redux/svg';
import s from "./Scale.module.sass";
import { Button, Input, Space } from "antd";
import { FullscreenExitOutlined, FullscreenOutlined, MinusOutlined, PlusOutlined } from "@ant-design/icons";

export const Scale: React.FC = () => {
  const scale = useSelector((store) => store.svg.scale);
  const dispatch = useDispatch<any>();

  return (
    <div className={s.root}>
      <Space direction="vertical" size="small">
        <Space.Compact>
          <Input addonBefore="Масштаб:" value={scale.toFixed(2)} onInput={(e) => false}/>
          <Button type="primary" icon={<PlusOutlined />} onClick={(e) => dispatch(updateScale(0.1))} />
          <Button type="primary" icon={<MinusOutlined />} onClick={(e) => dispatch(updateScale(-0.1))} />
        </Space.Compact>
      </Space>
    </div>
  );
};
