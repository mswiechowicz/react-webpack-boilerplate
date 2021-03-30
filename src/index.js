import React from 'react';
import reactDOM from 'react-dom';

import App from './App';

const rootElement = document.getElementById('root');
if(rootElement) {
    reactDOM.render(<App />, rootElement);
}