import React, { MouseEventHandler, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fillStateFromSvg } from '../../Redux/svg';
import { Panel } from '../Panel';
import { Canvas } from '../Canvas/Canvas';
import { State } from '../../Types';
import s from './MouseWrapper.module.sass';

export const MouseWrapper: React.FC = () => {
  const [isScroll, setScroll] = useState(false);

  const originalSvg = useSelector((store: State) => store.files.svg);

  const dispatch = useDispatch<any>();

  const containerRef = useRef(null);

  useEffect(() => {
    if (originalSvg != null) {
      dispatch(fillStateFromSvg(originalSvg));
    }
  }, [originalSvg]);

  function onMouseDown(e: MouseEventHandler<HTMLDivElement>) {
    setScroll(true);
    containerRef.current.style.cursor = 'all-scroll';
  }

  function onMouseUp(e: MouseEventHandler<HTMLDivElement>) {
    setScroll(false);
    containerRef.current.style.cursor = 'default';
  }

  function onMouseMove(e: MouseEventHandler<HTMLDivElement>) {
    if (isScroll) {
      containerRef.current.scrollLeft = containerRef.current.scrollLeft - e.movementX;
      containerRef.current.scrollTop = containerRef.current.scrollTop - e.movementY;
    }
  }

  return (
    <div
      className={s.root}
      ref={containerRef}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
    >
      <Canvas />
    </div>
  );
};
