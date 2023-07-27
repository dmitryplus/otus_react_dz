import * as React from 'react';
import { Provider } from 'react-redux';

import { store } from './Redux/store';
import { Navigation } from './Navigation';
import { Head } from './Head';

export const App: React.FC = () => (
  <Provider store={store}>
    <Navigation>
      <Head />
    </Navigation>
  </Provider>
);
