import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeConfig } from './config/theme.config.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeConfig>
    <App />

    </ThemeConfig>
  </StrictMode>,
)
