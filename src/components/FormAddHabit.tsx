import { useState } from "react"

const inputDesign = " p-2 border border-zinc-700 rounded-md focus:ring-2 focus:ring-blue-500 outline-none m-2 w-90"

export default function FormAddHabit(){
  const[habitName, setHabitName] = useState<string>('');
  const[description, setDescription] = useState<string>('');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <form className="relative rounded-md p-2 mx-3 bg-zinc-800 ">
        
        <h1 className="text-zinc-100 m-2">Add new habit</h1>
        
        <button type='button' className="text-zink-100 rounded-xs w-6 h-6 ml-7.5 absolute top-2 right-4 text-amber-50 active:cursor-pointer hover:cursor-pointer ">✕</button>
        <div className="flex flex-col mt-7">
          
          <input className={inputDesign} placeholder="habit"/>
          <input className={inputDesign} placeholder="mini-description"/>
          <div className="flex justify-end">
            <button className="bg-zinc-500 font-mono rounded-md px-6 h-9 w-fit text-white  backdrop-blur-md mx-4 mt-4 shadow-2xs active:cursor-pointer active:shadow-none active:scale-95 hover:cursor-pointer hover:shadow-md">Add</button>

          </div>
          

        </div>
        
       
      </form>

    </div>
    
  )
}