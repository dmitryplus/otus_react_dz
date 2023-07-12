import * as React from 'react';
import { Start } from './Pages/Start';

import { Provider } from 'react-redux';
import { store } from './Redux/store';

export const App: React.FC = () => {
    return (
        <Provider store={store}>
            <Start />
        </Provider>
    );
};
