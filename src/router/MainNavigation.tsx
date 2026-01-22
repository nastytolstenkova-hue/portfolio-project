import { NavLink } from "react-router-dom";
import habits from "../assets/habits.png";
import overview from "../assets/overview.png"
import statistics from "../assets/statistics.png"
import timer from "../assets/timer.png"


export default function MainNavigation(){

  return (
    <div className="my-14">
      <NavLink to='/overview' className='flex m-3'><img src={overview} className="h-5 w-5 mr-2"/> Overview</NavLink>
      <NavLink to='/habits' className='flex m-3'><img src={habits} className="h-5 w-5 mr-2"/>Habits</NavLink>
      <NavLink to='/focus-timer' className='flex m-3'><img src={timer} className="h-5 w-5 mr-2"/>Focus Timer</NavLink>
      <NavLink to='/statistics' className='flex m-3'><img src={statistics} className="h-5 w-5 mr-2"/>Statistics</NavLink>
    </div>
  )
}