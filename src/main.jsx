import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Add this import
import './index.css';
import App from './App.jsx';


import "@fontsource/outfit";
import "@fontsource/roboto";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> {/* Add this wrapper */}
      <App />
    </BrowserRouter>
  </StrictMode>
);
