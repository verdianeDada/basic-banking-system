import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './index.css'
import dotenv from 'dotenv'

// loading ../env file variables
dotenv.config()

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
);

