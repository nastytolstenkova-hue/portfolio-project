import { useState } from "react";
import FormAddHabit from "../components/FormAddHabit"

export default function Habits(){
  const [isModal, setIsModal] = useState<boolean>(false)

  const openModal = () => {
    setIsModal(true);
  }

  const closeModal = () => {
    setIsModal(false);
  }

  return (
    <div>
      <div>
        <h1  className="font-mono border rounded-2xl p-1 px-6 w-fit mx-auto mb-8  text-cyan-300 bg-blue-500/10 border-blue-500/30 backdrop-blur-md    
      ">My habits</h1>
        <button onClick={openModal} className="font-mono border rounded-full px-6 h-9 w-fit text-white  backdrop-blur-md mx-4 shadow-md shadow-blue-400/50 bg-blue-400 border-cyan-400 active:cursor-pointer active:shadow-none active:scale-95 hover:cursor-pointer hover:shadow-md">+ Add</button>
      </div>
      {isModal && <FormAddHabit closeFunction={closeModal}/>}
      
    </div>
  )
}