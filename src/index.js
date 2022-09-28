import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';
import ProfitService from './services/profit';
import '@fortawesome/fontawesome-free/js/all.js';

const profitService = new ProfitService();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App profitService={profitService}/>
  </React.StrictMode>
);
