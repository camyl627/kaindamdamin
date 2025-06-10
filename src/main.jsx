import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import AuthenticationRoutes from './routes/authenticationRoutes.jsx';
import AppRoutes from './routes/App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthenticationRoutes />
      <AppRoutes />
    </BrowserRouter>
  </StrictMode>
);
