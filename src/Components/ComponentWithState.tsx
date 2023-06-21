import React, { Component, ReactHTMLElement, useEffect, useState } from 'react';
import { Container } from './Container';
import { BlockFontSize } from '../types/fontSize';
import { Panel } from './Panel';

import { unserialize } from 'locutus/php/var';

export function ComponentWithState() {
    const [fontSize, setFontSize] = useState<BlockFontSize>(1);
    const [xhprof, setXhprof] = useState({});

    useEffect(() => {

        fetch('./data/xhprof_foo.xhprof')
            .then((response) => response.text())
            .then((response) => {
                setXhprof(unserialize(response));
            })
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        // for (const key of Object.keys(xhprof)) {
        //     console.log(key, xhprof[key]);
        // }
    }, [xhprof]);

    return (
        <>
            <Container fontSize={fontSize} xhprof={xhprof} />
            {/*<Panel onFontSizeChange={setFontSize} />*/}
        </>
    );
}
