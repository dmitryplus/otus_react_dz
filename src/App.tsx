import * as React from 'react';
import { Provider } from 'react-redux';
import { Start } from './Pages/Start';

import { store } from './Redux/store';
import { Navigation } from './Navigation';

export function App() {
  return (
    <Provider store={store}>
      <Navigation>
        <Start />
      </Navigation>
    </Provider>
  );
}
