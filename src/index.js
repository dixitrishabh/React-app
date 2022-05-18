import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

// const x=15;
// const y =46;
// const z =77;
// const a =40;
// let max;
//  max = (
//   <h1>{x > y && x > z && x > a ? x : y > z && y > a ? y : z > a ? z : a} </h1>
// );

// const myelement = <h1>{max}</h1>
// const myelement = <h1>Simple interest:{1000*5*5/100}</h1>
// const myelement2 = <h1>Dollar into INR:{100*77.67}</h1>
// const myelement3 = <h1>Dollar into INR:{2000 (1 + 0.08 / 12) (12 * 5)-2000}</h1>
root.render(
    // myelement
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
