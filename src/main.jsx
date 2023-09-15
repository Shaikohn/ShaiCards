import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux';
import store from './redux/store/store.js';
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import axios from 'axios'

axios.defaults.baseURL= "http://localhost:3001/"
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
)
