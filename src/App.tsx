import * as React from 'react';
import { Start } from './Pages/Start';

import { Provider } from 'react-redux';
import { store } from './Redux/store';
import { Navigation } from './Navigation';

export const App: React.FC = () => {
    return (
        <Provider store={store}>
            <Navigation>
                <Start />
            </Navigation>
        </Provider>
    );
};
