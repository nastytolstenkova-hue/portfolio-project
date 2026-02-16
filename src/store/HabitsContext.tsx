import { createContext, type ReactNode } from "react";
import { useState } from "react";

export interface IHabit {
  id: string;
  habitName: string;
  habitDescription: string;
  completedDays: boolean[];
  habitColor: string;
}

export interface IHabitsContext {
  habitsList: IHabit[];
  setHabitsList: React.Dispatch<React.SetStateAction<IHabit[]>>;
  getHabits: () => void;
}

export const HabitsContext = createContext<IHabitsContext | undefined>(undefined);

export function HabitsContextProvider({children}:{children: ReactNode}){
  const [habitsList, setHabitsList] = useState<IHabit[]>([])
  
  const getHabits = async() => {
      try {
        const response = await fetch('https://6988e1d3780e8375a6895ce5.mockapi.io/habit/habit')
        
        if (!response.ok) {
          throw new Error('Ошибка сервера');
        }
  
        const data = await response.json();
  
        setHabitsList(data);
      } catch (error) {
      console.error("Something went wrong:", error);
      }
      
  
    }
 

  return (
    <HabitsContext.Provider value={{habitsList, setHabitsList, getHabits}}>
      {children}
    </HabitsContext.Provider>
  )
}

