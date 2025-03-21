import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './app.css';         // Si tienes otros estilos personalizados
import './styles/tailwind.css';  // Archivo para Tailwind CSS



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)