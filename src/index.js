import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css'; // Ensure this line is present

console.log('index.js rendered'); // Add console log

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default root;