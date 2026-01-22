import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { HabitContextProvider } from './store/HabitsContext.tsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <HabitContextProvider>
        <App />
      </HabitContextProvider>  
    </BrowserRouter>
     
  </StrictMode>,
)
