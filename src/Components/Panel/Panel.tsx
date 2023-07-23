import React from 'react';
import { ScaleBlock } from '../ScaleBlock';
import { ThresholdBlock } from '../ThresholdBlock';
import s from './Panel.module.sass';

export const Panel: React.FC = () => (
  <div className={s.root}>
    <ScaleBlock />
    <ThresholdBlock />
  </div>
);
