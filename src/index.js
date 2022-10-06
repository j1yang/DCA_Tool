import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';
import ProfitService from './services/profit';
import '@fortawesome/fontawesome-free/js/all.js';
import AuthService from './services/auth_service';
import {firebaseApp} from './services/firebase'

const profitService = new ProfitService();
const authService = new AuthService(firebaseApp);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App 
        profitService={profitService} 
        authService={authService}
      />
  </React.StrictMode>
);
