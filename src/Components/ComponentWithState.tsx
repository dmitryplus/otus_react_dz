import React, { Component, ReactHTMLElement, useEffect, useState } from 'react';
import { Container } from './Container';
import { ScaleSize, Xhprof } from '../Types';
import { Panel } from './Panel';
import { LoadXhprofFromFolder } from '../Services';
import * as Styles from './styles';
import { useDispatch, useSelector } from 'react-redux';

import { useLocation, useParams } from 'react-router-dom';
import { createDotFromXhprof, getSvgFromGraphviz, loadXhprofData } from '../Redux/files';
import { Error } from './Error';

export function ComponentWithState() {
  const xhprofData = useSelector((store) => store.files.data);
  const filesList = useSelector((store) => store.files.files);
  const dotData = useSelector((store) => store.files.dot);
  const originalSvg = useSelector((store) => store.files.svg);

  const isError = useSelector((store) => store.files.error);

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

  if (isError) {
    resultSvgContainer = <Error />;
  }

  return (
    <>
      <Styles.MainScreen>{resultSvgContainer}</Styles.MainScreen>
    </>
  );
}
