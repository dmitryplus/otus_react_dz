import React, { Component, ReactHTMLElement, useEffect, useState } from 'react';
import { Container } from './Container';
import { ScaleSize, Xhprof } from '../Types';
import { Panel } from './Panel';
import { LoadXhprofFromFolder } from '../Services';
import * as Styles from './styles';

export function ComponentWithState() {
    const [scaleSize, setScaleSize] = useState<ScaleSize>(1);
    const [xhprofData, setXhprofData] = useState({});

    useEffect(() => {
        LoadXhprofFromFolder('xhprof_foo.xhprof', setXhprofData);
    }, []);

    return (
        <>
            <Panel onScaleSizeChange={setScaleSize} />
            <Styles.MainScreen scaleSize={scaleSize}>
                <Container xhprof={xhprofData} />
            </Styles.MainScreen>
        </>
    );
}
