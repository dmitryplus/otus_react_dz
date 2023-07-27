import React from 'react';
import { Scale } from '../Scale/Scale';
import { Threshold } from '../Threshold/Threshold';
import s from './Panel.module.sass';
import { Col, Row } from 'antd';

export const Panel: React.FC = () => (
  <div className={s.root}>
    <Row>
      <Col flex={1}>
        <Scale />
      </Col>
      <Col flex={1}>
        <Threshold />
      </Col>
    </Row>
  </div>
);
