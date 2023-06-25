import React, { FC, ReactNode } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Auth } from './Components/Auth';
import { Main } from './Pages/Main';
import { Catalog } from './Pages/Catalog';
import { ComponentWithState } from './Components/ComponentWithState';
import { NotFound } from './Pages/NotFound';

interface NavigationProps {
    children: ReactNode;
}

export const Navigation: FC<NavigationProps> = ({ children }) => (
    <BrowserRouter>
        {children}
        <Routes>
            <Route path='/auth' element={<Auth />} />
            <Route index element={<Main />} />
            <Route path='/catalog' element={<Catalog />} />
            <Route path='/xhprof' element={<ComponentWithState />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    </BrowserRouter>
);
