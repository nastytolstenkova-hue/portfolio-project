import refresh from '../assets/reload.png';

import { useState, useEffect } from 'react';

  const designButtonTime = 'font-mono text-sm rounded-full px-4 py-1 w-fit text-blue-800 dark:text-white bg-blue-500/40 dark:bg-zinc-700 mx-4 shadow-xs shadow-blue-400/50 '
  const activeButton = ' active:cursor-pointer active:shadow-none active:scale-95 hover:cursor-pointer hover:shadow-md'
  const startButton = `font-mono border rounded-full px-6 h-9 w-fit text-white  backdrop-blur-md mx-4 shadow-md shadow-blue-400/50 ${activeButton}`
export default function Timer(){
  const[isTimer, setIsTimer] = useState<boolean>(false);
  const[timerTime, setTimerTime] = useState<number>(25*60);

  const minutes: string  = Math.floor(timerTime / 60).toString().padStart(2, '0');
  const seconds: string = (timerTime % 60).toString().padStart(2, '0');

  useEffect(()=>{
    let timer: number | undefined;
    
    if (isTimer && timerTime > 0) {
    timer = setInterval(() => {
      setTimerTime((value) => value - 1);
    }, 1000);
    } else if (timerTime === 0) {
      setIsTimer(false); 
    }

  return () => clearInterval(timer);
    },[isTimer, timerTime])

  const handleStartTimer = (): void => {
    if (isTimer){
      return(setIsTimer(false));
    }
    setIsTimer(true);
    
  }

  const handleStopTimer = (): void => {
    setIsTimer(false);
    setTimerTime(1500)
  }

  const addFiveMin = (): void => {
    setTimerTime(prevVal => prevVal + 300)
  }

  const choseTime = (time:number): void => {
    if (!isTimer) {
      setTimerTime(time)
    } else {
      alert('Please, stop timer befor choose time.')
    }
  }

  
  return (
    <div className="">
      <div className="flex justify-center my-5">
        <div className='flex flex-col justify-center items-center border-2 border-blue-400/40 dark:bg-zinc-900/50 h-60 w-60 rounded-full shadow-blue-400/70 shadow-[inset_0_0_25px_rgba(59,130,246,0.4)]'>
          <p className="text-5xl font-mono  font-bold text-blue-400">{minutes}:{seconds}</p>
          <p className="text-xs uppercase tracking-[0.2em] text-blue-900 dark:text-white mt-2">minutes</p>

        </div>
        
      </div>
      <div className="grid grid-cols-3 gap-4 items-center w-full max-w-sm mx-auto">
        <div className="flex justify-end">
          <button className={`rounded-xl h-9 w-9 text-blue-800 dark:text-white bg-blue-500/40 dark:bg-zinc-700 shadow-xs shadow-blue-400/50 ${activeButton} `} onClick={handleStopTimer}><img src={refresh} className="h-5 w-5 m-2"/></button>
        </div>
        <div className="flex justify-center">
          <button className={isTimer ? `${startButton} bg-blue-600 border-indigo-800
          ` : `${startButton} bg-blue-400 border-cyan-400
          `} onClick={handleStartTimer}>{isTimer ? 'pause' : 'start'}</button>
        </div>
        <div className="flex justify-start">
          <button className={`rounded-xl px-2 h-9 text-blue-800 dark:text-white bg-blue-500/40 dark:bg-zinc-700 shadow-xs shadow-blue-400/50 ${activeButton} `} onClick={addFiveMin}>+ 5 min</button>
        

        </div>
          
          
          

      </div>
      
      <div className="flex justify-center my-7">
        <button className={`${designButtonTime} ${activeButton}`} onClick={()=>choseTime(1500)}>25 min</button>
        <button className={`${designButtonTime} ${activeButton}`} onClick={()=>choseTime(2700)}>45 min</button>
        <button className={`${designButtonTime} ${activeButton}`} onClick={()=>choseTime(3600)}>60 min</button>
      </div>
    </div>
  )
}