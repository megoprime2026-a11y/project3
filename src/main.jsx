import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './assets/components/Home.jsx'
import './assets/components/style.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)
