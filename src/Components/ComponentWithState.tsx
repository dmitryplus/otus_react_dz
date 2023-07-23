import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';
import { MouseWrapper } from './MouseWrapper';
import { createDotFromXhprof, getSvgFromGraphviz, loadXhprofData } from '../Redux/files';
import { Error } from './Error';
import { State } from '../Types';
import { Panel } from './Panel';

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

  if (isError) {
    return <Error />;
  }

  if (originalSvg != null) {
    return (
      <>
        <MouseWrapper />
        <Panel />
      </>
    );
  }

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <></>;
}
