import React, { FC, ReactNode } from 'react';
import { NotFound } from './Pages/NotFound';
//import { useTokenContext } from 'src/TokenProvider';

interface ProtectedRoutesProps {
    children: ReactNode;
}

export const ProtectedRoutes: FC<ProtectedRoutesProps> = ({ children }) => {

    const auth = false;

    // const [token] = useTokenContext();
    // const location = useLocation();

    if (auth) return <>{children}</>;
    return <NotFound />;
};
