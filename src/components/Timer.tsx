import refresh from '../assets/reload.png';
import setting from '../assets/gear.png'

export default function Timer(){
  const designButtonTime = 'font-mono text-sm rounded-full px-4 py-1 w-fit text-white bg-zinc-700 mx-4 shadow-xs shadow-blue-400/50 '
  const activeButton = ' active:cursor-pointer active:shadow-none  hover:cursor-pointer hover:shadow-md'
  return (
    <div className="">
      <div className="flex justify-center my-5">
        <div className='border p-19 rounded-full'>
          <p>time</p>
          <p>minutes</p>

        </div>
        
      </div>
      <div className="flex justify-center ">
        <button className={`rounded-xl bg-zinc-700 shadow-xs shadow-blue-400/50 ${activeButton} `}><img src={refresh} className="h-5 w-5 m-2"/></button>
        <button className={`font-mono border rounded-full px-6 w-fit text-white bg-blue-400 border-cyan-400 backdrop-blur-md mx-4 shadow-md shadow-blue-400/50 ${activeButton}
      `}>start</button>
        <button className={`rounded-xl bg-zinc-700 shadow-xs shadow-blue-400/50 ${activeButton} `}><img src={setting} className="h-5 w-5 m-2"/></button>
      </div>
      <div className="flex justify-center my-7">
        <button className={`${designButtonTime} ${activeButton}`}>25 min</button>
        <button className={`${designButtonTime} ${activeButton}`}>45 min</button>
        <button className={`${designButtonTime} ${activeButton}`}>60 min</button>
      </div>
    </div>
  )
}