import React from 'react';
// eslint-disable-next-line react/no-deprecated
import { render } from 'react-dom';
import App from './App';

render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root'),
);
