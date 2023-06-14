import React from 'react';
import ReactDOM from 'react-dom/client';
import { Calculator } from './Components/Calculator';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Calculator result='empty string' />
    </React.StrictMode>
);
