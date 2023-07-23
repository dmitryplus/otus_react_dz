import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateScale } from '../../Redux/svg';
import s from "./Scale.module.sass";

export const Scale: React.FC = () => {
  const scale = useSelector((store) => store.svg.scale);
  const dispatch = useDispatch<any>();

  return (
    <div className={s.root}>
      <p>Масштаб: {scale.toFixed(2)}</p>
      <button type="button" onClick={(e) => dispatch(updateScale(0.1))}>
        +
      </button>
      <button type="button" onClick={(e) => dispatch(updateScale(-0.1))}>
        -
      </button>
    </div>
  );
};
