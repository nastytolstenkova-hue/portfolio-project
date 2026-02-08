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
        <h1>My habits</h1>
        <button onClick={openModal}>+ Add</button>
      </div>
      {isModal && <FormAddHabit closeFunction={closeModal}/>}
      
    </div>
  )
}