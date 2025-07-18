import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {store} from './Store/store.js'

createRoot(document.getElementById('root')).render(
  <Provider store={store}> 
          <BrowserRouter>
  
  <StrictMode>
    <App />
  </StrictMode>
  </BrowserRouter>
  </Provider>

  ,
)
