import { useMemo, useState } from 'react'

// let sum=0;
function App() {
  const [count, setCount] = useState(0)
  const [inputValue,setInputValue]=useState(1);
  let sum=useMemo(()=>{
    let finalSum=0;
    for(let i=1;i<=inputValue;i++){
      finalSum+=i
    }
    return finalSum;
  },[inputValue])
  return (
    <div>
    <input onChange={function(e){
      const value=e.target.value;
      setInputValue(value);
    }} type='number'></input><br></br>
    Sum is {sum}<br></br>
    <button onClick={()=> setCount(count+1)}>Counter ({count})</button>
    </div>
  )
}
// Do it using memoization n(Task before Proceeding)
export default App
