import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './components/theme-provider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
    {/* <ThemeProvider attribute="class" defaultTheme="dark" enableSystem> */}
    {/* <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem> */}
    {/* <ThemeProvider attribute="data-theme" defaultTheme="light" enableSystem> */}
    <App />
  </ThemeProvider>
  </StrictMode>,
)
