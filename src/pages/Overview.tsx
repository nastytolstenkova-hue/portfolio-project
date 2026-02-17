export default function Overview(){
  return (
    <div className="font-mono">
      <p className=" border rounded-2xl p-1 px-6 w-fit  mb-8  text-cyan-300 bg-blue-500/10 border-blue-500/30 backdrop-blur-md  
      ">Overview</p>
      <h1 className="text-4xl text-cyan-400 mb-4">Welcome back, Captain!</h1>
      <p className="text-sm mb-7">System status: All systems go. 💫</p>
      <div className='grid grid-cols-2 gap-5'>
        <div className="border border-cyan-500">
          <p className="flex justify-center">Todays Focus</p>
        </div>
        <div className="border border-violet-500">
          <p className="flex justify-center">Quick Focus</p>
        </div>
      </div>
    </div>
  )
}