import React from 'react';
import ReactDOM from 'react-dom/client';
import { ComponentWithState } from '@/Components/ComponentWithState';
import { ErrorBoundary } from '@/Components/ErrorBoundary';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ErrorBoundary>
            <ComponentWithState />
        </ErrorBoundary>
    </React.StrictMode>
);
