import { useState } from "react"

const inputDesign = " p-2 border border-blue-500 rounded-md focus:ring-2 focus:ring-blue-700 outline-none m-2 w-90 text-blue-100"

export default function FormAddHabit(){
  const[habitName, setHabitName] = useState<string>('');
  const[description, setDescription] = useState<string>('');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <form className="relative rounded-md p-2 mx-3 bg-zinc-800 border border-blue-600/30 shadow-blue-400/70 shadow-[inset_0_0_15px_rgba(59,130,246,0.4)]">
        
        <h1 className="text-blue-400 m-2">Add new habit</h1>
        
        <button type='button' className="text-blue-300 rounded-xs w-6 h-6 ml-7.5 absolute top-2 right-4  active:cursor-pointer hover:cursor-pointer ">✕</button>
        <div className="flex flex-col mt-7">
          
          <input className={inputDesign} placeholder="habit"/>
          <input className={inputDesign} placeholder="mini-description"/>
          <div className="flex justify-end">
            <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-8 my-3 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.4)] active:scale-95 transition-all cursor-pointer">Add</button>

          </div>
          

        </div>
       
      </form>

    </div>
    
  )
}