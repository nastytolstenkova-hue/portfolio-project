export default function Timer(){
  return (
    <div className="">
      <div className="flex justify-center ">
        <p>time</p>
        <p>minutes</p>
      </div>
      <div className="flex justify-center ">
        <button>refresh</button>
        <button>start</button>
        <button>setting</button>
      </div>
      <div className="flex justify-center ">
        <button>25 min</button>
        <button>45 min</button>
        <button>60 min</button>
      </div>
    </div>
  )
}