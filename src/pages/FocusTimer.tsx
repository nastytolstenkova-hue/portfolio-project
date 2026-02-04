import Timer from "../components/Timer"

export default function FocusTimer(){
  return (
    <div>
      <h2 className="font-mono border rounded-2xl p-1 px-6 w-fit mx-auto mb-8  text-cyan-300 bg-blue-500/10 border-blue-500/30 backdrop-blur-md  
      ">Focus Session</h2>
      <Timer/>
    </div>
  )
}