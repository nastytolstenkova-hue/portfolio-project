import { useContext } from "react";
import { HabitsContext } from "../store/HabitsContext";

export default function Statistics(){
  const context = useContext(HabitsContext)
  
    if (!context) {
       throw new Error("Habits must be used within a HabitContextProvider");
    }
  
    const { habitsList } = context;

    const totalDone = habitsList.reduce((acc, habit) => 
      acc + habit.completedDays.filter(Boolean).length, 0);


    const totalPossible = habitsList.length * 21;


    const efficiency = totalPossible > 0 
      ? Math.round((totalDone / totalPossible) * 100) 
      : 0;

    const bestStreak = habitsList.reduce((max, habit) => {
  
      let currentStreak = 0;
      for (let day of habit.completedDays) {
        if (day) currentStreak++;
        else break; 
  }
    return Math.max(max, currentStreak);
    }, 0);
    
  return (
    <div className="font-mono">
      <h1 className=" border rounded-2xl p-1 px-6 w-fit mx-auto mb-8  text-cyan-300 bg-blue-500/10 border-blue-500/30 backdrop-blur-md  
      ">Space Analytics</h1>
      <div className="grid grid-cols-3 font-mono gap-3">
        <div className="border border-cyan-400 rounded-lg p-5 shadow-[inset_0_0_25px_rgba(59,130,246,0.4)] bg-cyan-900/10 grid justify-center">
          <p className="flex justify-center text-sm text-cyan-600 ">Habits</p>
          <p className="flex justify-center text-5xl text-cyan-500">{habitsList.length}</p>
        </div>
        <div className="border border-pink-400 rounded-lg p-5 shadow-[inset_0_0_25px_rgba(59,130,246,0.4)] bg-pink-900/10 grid justify-center">
          <p className="flex justify-center text-sm text-pink-400">Challenges won</p>
          <p className="flex justify-center text-5xl text-pink-500">{habitsList.filter(h => h.completedDays.filter(Boolean).length === 21).length}</p>
        </div>
        <div className="border border-green-400 rounded-lg p-5 shadow-[inset_0_0_25px_rgba(59,130,246,0.4)] bg-green-900/10 grid justify-center  ">
          <p className="flex justify-center text-sm text-green-600">Efficiency</p>
          <p className="flex justify-center text-5xl text-green-500">{efficiency}%</p>
        </div>
      </div>
      <div className="mt-6 border border-zinc-400 rounded-lg p-5 grid grid-cols-2">
        <div>
          <p className="flex justify-center mb-2">Habits in the progress</p>
          <div className="max-h-48 border border-yellow-200 p-4 rounded-lg overflow-y-auto">
            {habitsList.map((habit)=>
                          habit.completedDays.filter(Boolean).length !== 21 && 
                          <div className="grid grid-cols-2">
                            <p>{habit.habitName}</p>
                            <p className="flex justify-end">
                              {
                    Math.round(((habit.completedDays.filter(Boolean).length)/21)*100)} %
                            </p>
                          </div>
                        )}
                      </div>
          </div>
        <div className="grid">
          <p className="flex justify-end mr-5">User's strike</p>
          <div className="text-yellow-400 ">
            <p className="flex p-2 ml-10 justify-end text-5xl rounded-full shadow-[inset_0_0_25px_rgba(59,130,246,0.4)]">{bestStreak}</p>
            <p className="flex justify-end text-xm mr-5">Days</p>

          </div>
          
        </div>
      </div>
    </div>
  )
}
