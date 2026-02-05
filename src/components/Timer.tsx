import refresh from '../assets/reload.png';
import setting from '../assets/gear.png';
import { useState, useEffect } from 'react';

  const designButtonTime = 'font-mono text-sm rounded-full px-4 py-1 w-fit text-white bg-zinc-700 mx-4 shadow-xs shadow-blue-400/50 '
  const activeButton = ' active:cursor-pointer active:shadow-none active:scale-95 hover:cursor-pointer hover:shadow-md'

export default function Timer(){
  const[isTimer, setIsTimer] = useState<boolean>(false);
  const[timerTime, setTimerTime] = useState<number>(25);

  useEffect(()=>{
    if (isTimer){
      const timer = setInterval(()=>{
        setTimerTime(value=>value-1)
      },1000);

      return () => clearInterval(timer)}
    },[isTimer])

  const handleStartTimer = () => {
    setIsTimer(true);
    
  }

  const handleStopTimer = () => {
    setIsTimer(false);
  }

  
  return (
    <div className="">
      <div className="flex justify-center my-5">
        <div className='flex flex-col justify-center items-center border-2 border-blue-400/40 bg-zinc-900/50 h-60 w-60 rounded-full shadow-blue-400/70 shadow-[inset_0_0_25px_rgba(59,130,246,0.4)]'>
          <p className="text-5xl font-mono font-bold text-blue-400">{timerTime}</p>
          <p className="text-xs uppercase tracking-[0.2em] text-white mt-2">minutes</p>

        </div>
        
      </div>
      <div className="flex justify-center ">
        <button className={`rounded-xl bg-zinc-700 shadow-xs shadow-blue-400/50 ${activeButton} `} onClick={handleStopTimer}><img src={refresh} className="h-5 w-5 m-2"/></button>
        <button className={`font-mono border rounded-full px-6 w-fit text-white bg-blue-400 border-cyan-400 backdrop-blur-md mx-4 shadow-md shadow-blue-400/50 ${activeButton}
      `} onClick={handleStartTimer}>start</button>
        <button className={`rounded-xl bg-zinc-700 shadow-xs shadow-blue-400/50 ${activeButton} `}><img src={setting} className="h-5 w-5 m-2"/></button>
      </div>
      <div className="flex justify-center my-7">
        <button className={`${designButtonTime} ${activeButton}`} onClick={()=>setTimerTime(Number(25))}>25 min</button>
        <button className={`${designButtonTime} ${activeButton}`} onClick={()=>setTimerTime(Number(45))}>45 min</button>
        <button className={`${designButtonTime} ${activeButton}`} onClick={()=>setTimerTime(Number(60))}>60 min</button>
      </div>
    </div>
  )
}