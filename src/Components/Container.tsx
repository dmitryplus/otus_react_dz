import React from 'react';
import * as Styles from './styles';
import { BlockFontSize, Xhprof } from '../Types';

interface ContainerProps {
    fontSize: BlockFontSize;
    xhprof: Xhprof;
}

export const Container: React.FC<ContainerProps> = ({
    fontSize,
    xhprof,
}: ContainerProps) => {
    return (
        <Styles.Container>
            {Object.keys(xhprof).map((key, index) => (
                <Styles.Block key={index.toString()} fontSize={fontSize}>
                    <p>{key}</p>
                    <p>
                        <span>ct: {xhprof[key].ct}</span>&nbsp;
                        <span>wt: {xhprof[key].wt}</span>&nbsp;
                        <span>cpu: {xhprof[key].cpu}</span>&nbsp;
                        <span>mu: {xhprof[key].mu}</span>&nbsp;
                        <span>pmu: {xhprof[key].pmu}</span>&nbsp;
                    </p>
                </Styles.Block>
            ))}
        </Styles.Container>
    );
};
