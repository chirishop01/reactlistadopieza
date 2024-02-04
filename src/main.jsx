import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import PiezaProvider from './componentes/PiezaProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <PiezaProvider>
    <React.StrictMode>
   
    <App />
 
  </React.StrictMode>   
  </PiezaProvider>,
)
