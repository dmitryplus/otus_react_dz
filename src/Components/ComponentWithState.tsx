import React, { Component, ReactHTMLElement, useState } from 'react';
import { Container } from './Container';
import { BlockFontSize } from '../types/fontSize';
import { Panel } from './Panel';

export function ComponentWithState() {
    const [fontSize, setFontSize] = useState<BlockFontSize>(1);
    return (
        <>
            <Container fontSize={fontSize} />
            <Panel onFontSizeChange={setFontSize} />
        </>
    );
}
