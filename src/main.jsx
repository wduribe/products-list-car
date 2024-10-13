import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppProducts } from './AppProducts';
import './style.css';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProducts/>
  </StrictMode>,
)
