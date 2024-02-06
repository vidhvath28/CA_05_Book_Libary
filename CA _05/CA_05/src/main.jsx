

import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const root = document.getElementById('root');

// Use createRoot instead of render
const rootInstance = createRoot(root);

// Wrap your App component with BrowserRouter
rootInstance.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
export default rootInstance;