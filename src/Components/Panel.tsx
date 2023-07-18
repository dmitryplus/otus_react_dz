import React, { Dispatch, SetStateAction } from 'react';
import { ScaleBlock } from './ScaleBlock';
import { ScaleSize } from '../Types';
import * as Styles from './styles';

interface PanelProps {

}

export const Panel: React.FC<PanelProps> = ({}: PanelProps) => {

    return (
        <>
            <Styles.Toolbox>
                <ScaleBlock />

            </Styles.Toolbox>
        </>
    );
};
