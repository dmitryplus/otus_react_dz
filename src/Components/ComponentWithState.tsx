import React, { Component, ReactHTMLElement, useEffect, useState } from 'react';
import { Container } from './Container';
import { ScaleSize, Xhprof } from '../Types';
import { Panel } from './Panel';
import { LoadXhprofFromFolder } from '../Services';
import * as Styles from './styles';
import { useDispatch, useSelector } from 'react-redux';

import { useLocation, useParams } from 'react-router-dom';
import { createDotFromXhprof, loadXhprofData } from '../Redux/files';

export function ComponentWithState() {
    //const [scaleSize, setScaleSize] = useState<ScaleSize>(1);

    const xhprofData = useSelector(store => store.files.data);
    const filesList = useSelector(store => store.files.files);
    const dotData = useSelector(store => store.files.dot);

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
        if (dotData != null) {
            console.log('dot data create');
        }
    }, [dotData]);

    return (
        <>
            {/*<Panel onScaleSizeChange={setScaleSize} />*/}
            <Styles.MainScreen>
                {/*<Container xhprof={xhprofData} />*/}
            </Styles.MainScreen>
        </>
    );
}
