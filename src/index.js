import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MarkdownProvider } from './context/MarkdownContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MarkdownProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </MarkdownProvider>
  
);

