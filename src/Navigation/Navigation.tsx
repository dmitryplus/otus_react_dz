import React, { FC, PropsWithChildren } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

import Start from 'src/Screens/Start';
import NotFound from 'src/Screens/NotFound';
import { GetLinkToGraphTemplate } from 'src/Services';
import { LoaderWrapper } from 'src/Components/LoaderWrapper';

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
