import React from 'react';
import * as S from './styles';
import { BlockFontSize } from '../types/fontSize';
import { Button } from './Button';

interface ContainerProps {
    fontSize: BlockFontSize;
    xhprof: unknown;
}

export const Container = ({ fontSize, xhprof }: ContainerProps) => {
    return (
        <S.Container>
            {Object.keys(xhprof as Object).map((key, index) => (
                <S.Block key={key} fontSize={fontSize}>
                    {key}
                    {index}
                    {xhprof[key]}
                </S.Block>
            ))}


        </S.Container>
    );
};
