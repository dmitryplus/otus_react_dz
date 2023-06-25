import * as React from 'react';
import { Navigation } from './Navigation';
import { Start } from './Pages/Start';
import { UserProvider } from './UserProvider';

export const App: React.FC = () => {
    return (
        <UserProvider>
            <Navigation>
                <Start />
            </Navigation>
        </UserProvider>
    );
};
