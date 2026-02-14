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



export default function Habit({oneHab, deleteFunction}:OneHabProps){
  const[percent, setPercent] = useState<number>(0);
  const[arrayComplDay, setArrayComplDay] = useState<boolean[]>(oneHab.completedDays);

  const userColor = oneHab.habitColor === 'blue' ? 'bg-blue-300 shadow-blue-400/70' : oneHab.habitColor === 'pink' ? 'bg-pink-300 shadow-pink-400/70' : oneHab.habitColor === 'green' ? 'bg-green-300 shadow-green-400/70' : oneHab.habitColor === 'yellow' ? 'bg-yellow-300 shadow-yellow-400/70' : oneHab.habitColor === 'red' ? 'bg-red-300 shadow-red-400/70' : oneHab.habitColor === 'bg-grey-300 shadow-grey-400/70'


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
    
  }
};

  useEffect(()=>{
    const count = arrayComplDay.filter(Boolean).length;
    setPercent(Math.round((count/21)*100));
  },[arrayComplDay])
  
  return (
    <div className={`${userColor} m-2 p-2 rounded-md font-mono border border-blue-500  shadow-[inset_0_0_25px_rgba(59,130,246,0.4)] hover:border-blue-800 hover:cursor-pointer `}>
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