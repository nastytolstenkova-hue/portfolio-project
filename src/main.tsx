import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { HabitContextProvider } from './store/HabitsContext.tsx'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
   
      <HabitContextProvider>
        <App/>
      </HabitContextProvider>  
    
     
  </StrictMode>,
)
