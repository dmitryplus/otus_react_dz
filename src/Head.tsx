import React, { FC } from 'react';
import { Helmet } from 'react-helmet';

export const defaultSetting = {
  titleTemplate: '%s - Xhprof React Graph',
  defaultTitle: 'Xhprof React Graph',
};

export const Head: FC = () => (
  <Helmet {...defaultSetting}>
    <html lang="ru" />
  </Helmet>
);

Head.displayName = 'Head';
