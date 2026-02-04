import refresh from '../assets/reload.png';
import setting from '../assets/gear.png'

export default function Timer(){
  return (
    <div className="">
      <div className="flex justify-center ">
        <p>time</p>
        <p>minutes</p>
      </div>
      <div className="flex justify-center ">
        <button className='rounded-xl bg-zinc-700 shadow-xs shadow-blue-400/50 '><img src={refresh} className="h-5 w-5 m-2"/></button>
        <button className="font-mono border rounded-full px-6 w-fit text-white bg-blue-400 border-cyan-400 backdrop-blur-md mx-4 shadow-md shadow-blue-400/50
      ">start</button>
        <button className='rounded-xl bg-zinc-700 shadow-xs shadow-blue-400/50 '><img src={setting} className="h-5 w-5 m-2"/></button>
      </div>
      <div className="flex justify-center ">
        <button>25 min</button>
        <button>45 min</button>
        <button>60 min</button>
      </div>
    </div>
  )
}