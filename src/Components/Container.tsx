import React from 'react';
import * as S from './styles';
import { BlockFontSize } from '../types/fontSize';

interface ContainerProps {
    fontSize: BlockFontSize;
}

export const Container = ({ fontSize }: ContainerProps) => {
    return (
        <S.Container>
            <S.Block fontSize={fontSize}>First block</S.Block>
            <S.Block fontSize={fontSize}>Second block</S.Block>
            <S.Block fontSize={fontSize}>Third block</S.Block>
        </S.Container>
    );
};
