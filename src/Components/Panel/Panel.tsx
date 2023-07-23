import React from 'react';
import { Scale } from '../Scale/Scale';
import { Threshold } from '../Threshold/Threshold';
import s from './Panel.module.sass';

export const Panel: React.FC = () => (
  <div className={s.root}>
    <Scale />
    <Threshold />
  </div>
);
