import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'd2coding/d2coding-subset.css'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
