import React, { Component, ReactHTMLElement, useEffect, useState } from 'react';
import { Container } from './Container';
import { ScaleSize, Xhprof } from '../Types';
import { Panel } from './Panel';
import { LoadXhprofFromFolder } from '../Services';
import * as Styles from './styles';
import { useDispatch, useSelector } from 'react-redux';

import { useLocation, useParams } from 'react-router-dom';
import { loadXhprofData } from '../Redux/files';

export function ComponentWithState() {
    //const [scaleSize, setScaleSize] = useState<ScaleSize>(1);

    const xhprofData = useSelector(state => state.files.data);
    const filesList = useSelector(state => state.files.files);

    const dispatch = useDispatch<any>();

    const { filename } = useParams();


    useEffect(() => {
        if (filename != null && xhprofData === null && filesList.includes(filename)) {
            dispatch(loadXhprofData(filename));
        }
    }, [xhprofData]);

    return (
        <>
            {/*<Panel onScaleSizeChange={setScaleSize} />*/}
            <Styles.MainScreen>
                {/*<Container xhprof={xhprofData} />*/}
            </Styles.MainScreen>
        </>
    );
}
