import React, { Component, ReactHTMLElement, useEffect, useState } from 'react';
import { Container } from './Container';
import { ScaleSize, Xhprof } from '../Types';
import { Panel } from './Panel';
import { LoadXhprofFromFolder } from '../Services';
import * as Styles from './styles';
import { useDispatch, useSelector } from 'react-redux';

import { useLocation, useParams } from 'react-router-dom';
import { createDotFromXhprof, getSvgFromGraphviz, loadXhprofData } from '../Redux/files';

export function ComponentWithState() {
    //const [scaleSize, setScaleSize] = useState<ScaleSize>(1);

    const xhprofData = useSelector(store => store.files.data);
    const filesList = useSelector(store => store.files.files);
    const dotData = useSelector(store => store.files.dot);
    const originalSvg = useSelector(store => store.files.svg);

    const dispatch = useDispatch<any>();

    const { filename } = useParams();

    useEffect(() => {
        if (filename != null && xhprofData === null && filesList.includes(filename)) {
            dispatch(loadXhprofData(filename));
        }
    }, [xhprofData]);

    useEffect(() => {
        if (xhprofData != null) {
            dispatch(createDotFromXhprof());
        }
    }, [dotData, xhprofData]);

    useEffect(() => {
        if (dotData != null && originalSvg === null) {
            dispatch(getSvgFromGraphviz(dotData));
        }
    }, [dotData]);


    let resultSvgContainer = <></>;

    if (originalSvg != null) {
        resultSvgContainer = <Container />;
    }

    return (
        <>
            {/*<Panel onScaleSizeChange={setScaleSize} />*/}
            <Styles.MainScreen>
                {resultSvgContainer}
            </Styles.MainScreen>
        </>
    );
}
