import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import Home from './pages/home/Home'
import reportWebVitals from './reportWebVitals';
import './i18n.js';

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback="Loading...">
      <Home />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
