import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import ToDoProvider from './contexts/ToDoContext';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <ToDoProvider>
      <App />
    </ToDoProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
