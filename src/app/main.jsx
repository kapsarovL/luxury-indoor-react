import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.jsx';
import '../assets/styles/index.css';

import { PropertyProvider } from '../context/PropertyContext.jsx';
import ErrorBoundary from '../components/ErrorBoundary.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PropertyProvider>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </PropertyProvider>
  </StrictMode>
);
