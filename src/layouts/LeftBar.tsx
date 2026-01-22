
import MainNavigation from "../router/MainNavigation";
import accPicture from "../assets/user.png"

export default function LeftBar(){

  return (
    <div className="flex flex-col justify-between bg-zinc-800 h-dvh w-3/12 text-blue-200 pl-6" >
      <div className="flex ml-3 mt-5 items-center">
        <img src={accPicture} className="h-6 mr-2 "/>
        <p>user</p>
      </div>
      <div className="flex flex-col">
        <MainNavigation/>
      </div>
      <div className="flex ml-3">
        <p className="mr-2">light/dark mode</p>
        <input type='checkbox' className="cursor-pointer"/>
      </div>
    </div>
  )
}