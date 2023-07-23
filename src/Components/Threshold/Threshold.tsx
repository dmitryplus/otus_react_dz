import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTreshold } from '../../Redux/files';
import s from './Threshold.module.sass';
import { State } from '../../Types';

export const Threshold: React.FC = () => {
  const threshold = useSelector((store: State) => store.files.threshold);

  const [localThreshold, setLocalThreshold] = useState(threshold);

  const dispatch = useDispatch<any>();

  return (
    <div className={s.root}>
      <p>Ограничение на вывод:</p>
      <input defaultValue={threshold.toFixed(2)} onInput={(e) => setLocalThreshold(e.target.value)} />
      <button onClick={(e) => dispatch(setTreshold(localThreshold))}>Установить</button>
    </div>
  );
};
