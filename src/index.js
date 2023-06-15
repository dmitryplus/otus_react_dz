import React from 'react';
import ReactDOM from 'react-dom/client';
import { CalculatorAsClassWithState } from '@/Components/CalculatorAsClassWithState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <CalculatorAsClassWithState result='empty string' />
    </React.StrictMode>
);
