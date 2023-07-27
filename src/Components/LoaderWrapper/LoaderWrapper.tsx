import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';
import { MouseWrapper } from '../MouseWrapper';
import { createDotFromXhprof, getSvgFromGraphviz, loadXhprofData, setData } from '../../Redux/files';
import { Error } from '../Error';
import { State } from '../../Types';
import { Panel } from '../Panel/Panel';
import { unserialize } from 'locutus/php/var';

export function LoaderWrapper() {
  const xhprofData = useSelector((store: State) => store.files.data);
  const filesList = useSelector((store: State) => store.files.files);
  const dotData = useSelector((store: State) => store.files.dot);
  const originalSvg = useSelector((store: State) => store.files.svg);
  const uploadRows = useSelector((store: State) => store.files.upload);

  const isError = useSelector((store: State) => store.files.error);

  const dispatch = useDispatch<any>();

  const { filename } = useParams();

  useEffect(() => {

    if (filename === null || xhprofData != null || !filesList.includes(filename)) {
      return;
    }

    if (uploadRows !== null) {
      const uploadRow = uploadRows.filter((row) => row.name === filename);

      console.log('uploadRow',uploadRow);

      if (uploadRow.length) {
        dispatch(setData(unserialize(uploadRow[0].data)));

        return;
      }
    }

  //  if (filename != null && xhprofData === null && filesList.includes(filename)) {
      dispatch(loadXhprofData(filename));
  //  }
  }, [xhprofData, uploadRows]);

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

  return null;
}
