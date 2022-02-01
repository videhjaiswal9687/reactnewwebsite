import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';

//ReactDOM to render Code to the DOM
//ReactDOM render methods ,it takes two arguments:-
//1.) HTML Code 
//2.) HTML Element 


// ReactDOM.render(<h1 style={{textAlign:'center',backgroundColor:'teal',color:'white'}}>
//   Hello Everyone!!!</h1>,document.getElementById('root'))

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
