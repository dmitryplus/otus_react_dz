import React, { FC, ReactNode } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './Pages/Login';
import { Main } from './Pages/Main';
import { Catalog } from './Pages/Catalog';
import { ComponentWithState } from './Components/ComponentWithState';
import { useUserContext } from './UserProvider';

interface NavigationProps {
    children: ReactNode;
}

export const Navigation: FC<NavigationProps> = ({ children }) => {
    const [UserName] = useUserContext();


    let privatePages = <></>;


    if (UserName) {
        privatePages = (
            <Routes>
                <Route index element={<Main />} />
                <Route path='/catalog' element={<Catalog />} />
                <Route path='/xhprof' element={<ComponentWithState />} />
            </Routes>
        );
    }

    return (
        <BrowserRouter>
            {children}
            {privatePages}
            <Routes>
                <Route path='/auth' element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
};
