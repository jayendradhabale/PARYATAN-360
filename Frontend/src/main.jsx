import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div>
      <h1>Welcome to React</h1>
    </div>
  </StrictMode>,
)
