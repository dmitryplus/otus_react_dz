import React from 'react';
import * as Styles from './styles';
import { BlockFontSize } from '../types/fontSize';

interface ContainerProps {
    fontSize: BlockFontSize;
}

export const Container = ({ fontSize }: ContainerProps) => {
    return (
        <Styles.Container>
            <Styles.Block fontSize={fontSize}>First block</Styles.Block>
            <Styles.Block fontSize={fontSize}>Second block</Styles.Block>
            <Styles.Block fontSize={fontSize}>Third block</Styles.Block>
        </Styles.Container>
    );
};
