import { useState, useEffect } from "react";


export interface OneHab {
      id: string;
      habitName: string;
      habitDescription: string;
      completedDays: boolean[];
      habitColor: string;

}

export interface OneHabProps {
  oneHab: OneHab;
  deleteFunction: (index: string) => void;
}

const colorMap: Record<string, string> = {
  blue: "bg-blue-300 dark:bg-blue-900/40 border-blue-500",
  pink: "bg-pink-200 dark:bg-pink-900/40 border-pink-300",
  green: "bg-green-200/20 dark:bg-green-900/40 border-green-500",
  yellow: "bg-yellow-300/60 dark:bg-yellow-900/40 border-yellow-400",
  red: "bg-red-300 dark:bg-red-900/40 border-red-500",
  grey: "bg-zinc-300 dark:bg-zinc-700 border-zinc-500",
};



export default function Habit({oneHab, deleteFunction}:OneHabProps){
  const[percent, setPercent] = useState<number>(0);

  const[arrayComplDay, setArrayComplDay] = useState<boolean[]>(oneHab.completedDays);



  const userColor = colorMap[oneHab.habitColor] ? colorMap[oneHab.habitColor] : colorMap['blue'] 

  const handleDeleteFunct = async (index: string) => {
    if (!window.confirm("Are you sure you want to delete this habit?")) return;
  
  try {
    const response = await fetch(`https://6988e1d3780e8375a6895ce5.mockapi.io/habit/habit/${oneHab.id}`, {
      method: 'DELETE'   
      })

    if (response.ok) {
      deleteFunction(index);
    }
  } catch (error) {
    console.error("Delete failed:", error);
  }
};

const completedFunction = async (index: number) => {
  if (percent !== 100){
  const updatedArray = arrayComplDay.map((day, id) => (index === id ? !day : day));
  
  setArrayComplDay(updatedArray);
  

  
  try {
    const response = await fetch(`https://6988e1d3780e8375a6895ce5.mockapi.io/habit/habit/${oneHab.id}`, {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        ...oneHab, 
        completedDays: updatedArray 
      })
    });

    if (!response.ok) {
      throw new Error('Failed to update habit');
    }
  } catch (error) {
    console.error("Something went wrong during refresh:", error);
    
  }}
};

  useEffect(()=>{
    const count = arrayComplDay.filter(Boolean).length;
    setPercent(Math.round((count/21)*100));
  },[arrayComplDay])
  
  return (
    
        <div className={`${userColor} m-2 p-2 rounded-md font-mono border border-blue-500  shadow-[inset_0_0_25px_rgba(59,130,246,0.4)] hover:border-blue-800 hover:cursor-pointer `}
        >
          
          <div className="flex justify-between ">
            <div>
              <h2>{oneHab.habitName}</h2>
              <p>{oneHab.habitDescription}</p>
            </div>
            <p>{percent}%</p>

          </div>
          
          <div className="grid grid-cols-7">
            {arrayComplDay.map((day:boolean, index:number)=> {
            const completed = day === true 
              ? 'border border-blue-700 text-blue-700 bg-blue-300 dark:bg-blue-400/30 dark:text-white shadow-[0_0_7px_rgba(59,130,246,0.5)]' 
              : 'dark:bg-zinc-800/50 text-blue-400 dark:text-zinc-400';
              return (
              
                <button  
                key={index} 
                onClick={()=>completedFunction(index)} 
                className={`${completed} m-1 rounded-full hover:cursor-pointer`}
                >
                  {index + 1} 
                  </button>
                  );
            })}
          </div>
          <div className="flex justify-end"><button className="hover:cursor-pointer active:scale-95" onClick={()=>handleDeleteFunct(oneHab.id)}>delete</button></div>
        </div> 
  )
}