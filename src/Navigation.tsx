import React, { FC, ReactNode } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ComponentWithState } from './Components/ComponentWithState';
import { Start } from './Pages/Start';

interface NavigationProps {
    children: ReactNode;
}

export const Navigation: FC<NavigationProps> = ({ children }) => {

    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Start />} />
                <Route path='/view/:filename' element={<ComponentWithState />} />
            </Routes>
        </BrowserRouter>
    );
};
