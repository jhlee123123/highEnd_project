import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import QnaOne from './Qna/QnaOne';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <QnaOne />
  </React.StrictMode>
);

