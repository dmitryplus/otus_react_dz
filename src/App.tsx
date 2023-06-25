import * as React from 'react';
import { Navigation } from './Navigation';
import { Start } from './Pages/Start';

export const App: React.FC = () => {
    return (
        <Navigation>
            <Start />
        </Navigation>
    );
};
