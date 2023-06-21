import React, { Component, ReactHTMLElement, useEffect, useState } from 'react';
import { Container } from './Container';
import { BlockFontSize, Xhprof } from '../Types';
import { Panel } from './Panel';
import { LoadXhprofFromFolder } from '../Services';

export function ComponentWithState() {
    const [fontSize, setFontSize] = useState<BlockFontSize>(1);
    const [xhprof, setXhprof] = useState({});

    useEffect(() => {
        LoadXhprofFromFolder('xhprof_foo.xhprof', setXhprof);
    }, []);

    return (
        <>
            <Panel onFontSizeChange={setFontSize} />
            <Container fontSize={fontSize} xhprof={xhprof} />
        </>
    );
}
