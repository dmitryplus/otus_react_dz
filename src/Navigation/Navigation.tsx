import React, { FC, PropsWithChildren } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

import Start from '../Screens/Start';
import NotFound from '../Screens/NotFound';
import { GetLinkToGraphTemplate } from '../Services';
import { LoaderWrapper } from '../Components/LoaderWrapper';

interface NavigationProps {
  children: any;
}

export const Navigation: FC<PropsWithChildren<NavigationProps>> = ({ children }) => (
  <HashRouter>
    {children}
    <Routes>
      <Route index element={<Start />} />
      <Route path={GetLinkToGraphTemplate()} element={<LoaderWrapper />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </HashRouter>
);
