export default function Statistics(){
  return (
    <div className="">
      <h1 className="font-mono border rounded-2xl p-1 px-6 w-fit mx-auto mb-8  text-cyan-300 bg-blue-500/10 border-blue-500/30 backdrop-blur-md  
      ">Space Analytics</h1>
      <div className="grid grid-cols-3 font-mono gap-3">
        <div className="border border-cyan-400 rounded-lg p-5 shadow-[inset_0_0_25px_rgba(59,130,246,0.4)] bg-cyan-900/10 grid justify-center">
          <p className="flex justify-center text-sm text-cyan-500 ">Total number of habits</p>
          <p className="flex justify-center text-5xl text-cyan-500">7</p>
        </div>
        <div className="border border-pink-400 rounded-lg p-5 shadow-[inset_0_0_25px_rgba(59,130,246,0.4)] bg-pink-900/10 grid justify-center">
          <p className="flex justify-center text-sm text-pink-500">Challenges won</p>
          <p className="flex justify-center text-5xl text-pink-500">2</p>
        </div>
        <div className="border border-green-400 rounded-lg p-5 shadow-[inset_0_0_25px_rgba(59,130,246,0.4)] bg-green-900/10 grid justify-center  ">
          <p className="flex justify-center text-sm text-green-500">Efficiency</p>
          <p className="flex justify-center text-5xl text-green-500">7</p>
        </div>
      </div>
      <div className="mt-6 border border-zinc-400 rounded-lg p-5 grid grid-cols-2">
        <div>
          <p>Habits in the progress</p>
        </div>
        <div>
          <p className="flex justify-end">User's strike</p>
        </div>
      </div>
    </div>
  )
}
