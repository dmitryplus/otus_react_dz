import React, { FC, PropsWithChildren } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

import FileList from '../Screens/FileList';
import NotFound from '../Screens/NotFound';
import { GetLinkToGraphTemplate } from '../Services';
import { LoaderWrapper } from '../Components/LoaderWrapper/LoaderWrapper';

interface NavigationProps {
  children: any;
}

export const Navigation: FC<PropsWithChildren<NavigationProps>> = ({ children }) => (
  <HashRouter>
    {children}
    <Routes>
      <Route index element={<FileList />} />
      <Route path={GetLinkToGraphTemplate()} element={<LoaderWrapper />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </HashRouter>
);
