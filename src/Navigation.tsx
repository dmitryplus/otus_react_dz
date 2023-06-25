import React, { FC, ReactNode } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './Pages/Login';
import { Main } from './Pages/Main';
import { Catalog } from './Pages/Catalog';
import { ComponentWithState } from './Components/ComponentWithState';
import { NotFound } from './Pages/NotFound';
import { ProtectedRoutes } from './ProtectedRoutes';

interface NavigationProps {
    children: ReactNode;
}

const authElements = (
    <ProtectedRoutes>
        <Routes>
            <Route index element={<Main />} />
            <Route path='/catalog' element={<Catalog />} />
            <Route path='/xhprof' element={<ComponentWithState />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    </ProtectedRoutes>
);

export const Navigation: FC<NavigationProps> = ({ children }) => (
    <BrowserRouter>
        {children}
        <Routes>
            <Route path='/auth' element={<Login />} />
            <Route path='*' element={authElements} />
        </Routes>
    </BrowserRouter>
);
