import React, { FC } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

import FileList from '../Screens/FileList';
import NotFound from '../Screens/NotFound';
import { GetLinkToGraphTemplate } from '../Services/Navigation';
import { ComponentWithState } from '../Components/ComponentWithState';

export const Navigation: FC = ({ children }) => (
  <HashRouter>
    {children}
    <Routes>
      <Route index element={<FileList />} />
      <Route path={GetLinkToGraphTemplate()} element={<ComponentWithState />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </HashRouter>
);
