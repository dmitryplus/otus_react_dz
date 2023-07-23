import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { Frame } from '../../Components/Frame';
import { Helmet } from 'react-helmet';

import s from './Graph.module.sass';

const Graph: FC = () => {
  //const location = useLocation();
  //const navigate = useNavigate();
  // const onClick = () => {
  //   const state = location.state as NavigationState;
  //   navigate(state?.from || '/');
  // };
  const { filename } = useParams();

  return (
    <div className={s.root}>
      <Helmet>
        <title>{filename}</title>
      </Helmet>

      <Frame>
        <h1>{filename}</h1>

      </Frame>
    </div>
  );
};

export default Graph;
