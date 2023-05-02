import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './components/reduux/store';
import { BrowserRouter } from 'react-router-dom'
import ContextProvider from './components/contextapi/contextapi';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Provider store={ store }>
    <BrowserRouter>
      <ContextProvider>
        <App />
      </ContextProvider>
    </BrowserRouter>
  </Provider>

);

