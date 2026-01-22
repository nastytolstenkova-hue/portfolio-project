import { createContext, type ReactNode } from "react";

export interface IHabit {
  id: string;
  habit: string;
  complexity: string;
  category: string;
  date: string[];
}

export const HabitContext = createContext('');

export function HabitContextProvider({children}:{children: ReactNode}){
  const a = 'h'
 

  return (
    <HabitContext.Provider value={a}>
      {children}
    </HabitContext.Provider>
  )
}

