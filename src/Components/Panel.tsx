import React, { Dispatch, SetStateAction } from 'react';
import { ScaleBlock } from './ScaleBlock';
import { ScaleSize } from '../Types';
import * as Styles from './styles';
import { ThresholdBlock } from './ThresholdBlock';

interface PanelProps {

}

export const Panel: React.FC<PanelProps> = ({}: PanelProps) => {

    return (
        <>
            <Styles.Toolbox>
                <ScaleBlock />
                <ThresholdBlock />
            </Styles.Toolbox>
        </>
    );
};
