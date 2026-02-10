import { useEffect, useState } from "react";
import FormAddHabit from "../components/FormAddHabit"



interface Habit {
      id: string;
      habitName: string;
      habitDescription: string;
      completedDays: boolean[];

}

export default function Habits(){
  const [isModal, setIsModal] = useState<boolean>(false);
  const [habitsList, setHabitsList] = useState<Habit[]>([])

  const openModal = () => {
    setIsModal(true);
  }

  const closeModal = () => {
    setIsModal(false);
  }

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

  useEffect(() => {
    getHabits()
  },[]);
  

  return (
    <div>
      <div>
        <h1  className="font-mono border rounded-2xl p-1 px-6 w-fit mx-auto mb-8  text-cyan-300 bg-blue-500/10 border-blue-500/30 backdrop-blur-md    
      ">My habits</h1>
        <button onClick={openModal} className="font-mono border rounded-full px-6 h-9 w-fit text-white  backdrop-blur-md mx-4 shadow-md shadow-blue-400/50 bg-blue-400 border-cyan-400 active:cursor-pointer active:shadow-none active:scale-95 hover:cursor-pointer hover:shadow-md">+ Add</button>
        <div>
          <h2 className="flex justify-center text-xl uppercase tracking-[0.2em] text-white mt-10">Create new habit</h2>
          <p className="uppercase font-mono text-zinc-200 mt-10">How it works

            Building a habit is easier than it seems.

            For 21 days, you focus on one simple habit and practice it every day.
            Each day you complete the habit, you mark your progress and move one step closer to making it part of your routine.

            The key is consistency, not perfection.
            Some days will be easy, some won’t — and that’s okay. What matters is showing up and continuing.

            After 21 days, the habit feels more natural, requires less effort, and becomes something you do without overthinking.

            Small daily actions lead to real change.</p>
          </div>
      </div>
      {isModal && <FormAddHabit closeFunction={closeModal}/>}
      
    </div>
  )
}