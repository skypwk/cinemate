import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import {ScrollToTop} from './components';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router
     future={{
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    }}>
      <ScrollToTop />
      <App />
    </Router>
  </React.StrictMode>
);

