import React from 'react';
import ReactDOM from 'react-dom/client'  // 'react-dom/client';
import './styles.css';
import App from './App'  //'./App';
import {ContextProvider} from './SocketContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextProvider>
    <App />
  </ContextProvider>
);

 
 
