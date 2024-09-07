import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ToDoProvider from './Context/index.jsx'
import './index.css';


createRoot(document.getElementById('root')).render(
  




<React.StrictMode><ToDoProvider> <App /></ToDoProvider></React.StrictMode>
)
