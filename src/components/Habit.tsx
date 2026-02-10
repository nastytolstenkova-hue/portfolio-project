export default function Habit(){

  return (
    <div>
      <div>
        <h2>habit name</h2>
        <p>description</p>
      </div>
      <p>percent</p>
      <div>
        {a.map((day:boolean, index:number)=> 
        <button>{index + 1}</button>)}
      </div>

    </div>
  )
}