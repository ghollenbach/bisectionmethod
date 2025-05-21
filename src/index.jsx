import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Bisection from './Bisection';
import reportWebVitals from './reportWebVitals';
import 'katex/dist/katex.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Bisection />
  </React.StrictMode>
);

reportWebVitals();