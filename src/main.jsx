import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ViewState from './context/ViewState.jsx';
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import '../css/style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ViewState>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ViewState>
)
