import React, { FC } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

import FileList from 'src/Screens/FileList';
import Graph from 'src/Screens/Graph';
import NotFound from 'src/Screens/NotFound';
import { GetLinkToGraphTemplate } from 'src/Services/Navigation';
import { ComponentWithState } from "../Components/ComponentWithState";
import { Start } from "../Screens/Start";

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
