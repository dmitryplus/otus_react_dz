import React, { Dispatch, SetStateAction } from 'react';
import { ScaleBlock } from './ScaleBlock';
import { ThresholdBlock } from './ThresholdBlock';

interface PanelProps {}

export const Panel: React.FC<PanelProps> = ({}: PanelProps) => {
  return (
    <div>
      <ScaleBlock />
      <ThresholdBlock />
    </div>
  );
};
