import * as React from 'react';
import { Provider } from 'react-redux';
import { Start } from './Pages/Start';

import { store } from './Redux/store';
import { Navigation } from './Navigation';

// eslint-disable-next-line react/function-component-definition
export const App: React.FC = () => (
  <Provider store={store}>
    <Navigation>
      <Start />
    </Navigation>
  </Provider>
);
