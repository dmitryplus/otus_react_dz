import * as React from 'react';
import { ComponentWithState } from './Components/ComponentWithState';
import { Auth } from './Components/Auth';
import { Navigation } from './Navigation';
import { Start } from './Pages/Start';
import { Main } from './Pages/Main';
import { Catalog } from './Pages/Catalog';

export const App: React.FC = () => {
    return (
        <Navigation>
            <Start />
        </Navigation>
    );
};
