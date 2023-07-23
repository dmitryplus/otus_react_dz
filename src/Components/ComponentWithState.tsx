import React, { useEffect } from 'react';
import { Container } from './Container';
import { useDispatch, useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';
import { createDotFromXhprof, getSvgFromGraphviz, loadXhprofData } from '../Redux/files';
import { Error } from './Error';
import { State } from '../Types';

export function ComponentWithState() {
  const xhprofData = useSelector((store: State) => store.files.data);
  const filesList = useSelector((store: State) => store.files.files);
  const dotData = useSelector((store: State) => store.files.dot);
  const originalSvg = useSelector((store: State) => store.files.svg);

  const isError = useSelector((store: State) => store.files.error);

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

  return resultSvgContainer;
}
