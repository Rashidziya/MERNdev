import { useState } from 'react'
import { CountContext } from './context'
import { useContext } from 'react'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <CountContext.Provider value={{count,setCount}}>
        <Counter></Counter>
      </CountContext.Provider>
      
    </div>
  )
}

function Counter(){
  return <div>
    <CountRenderer ></CountRenderer>
    <ButtonCounter ></ButtonCounter>
  </div>
}

function CountRenderer(){
  const count =useContext(CountContext);
  return <div>
    {count}
  </div>
} 
function ButtonCounter(){
  const {count,setCount}=useContext(CountContext);
  return <div>
    <button onClick={()=>{
      setCount(count+1)
    }}>Icrease</button>

    <button onClick={()=>{
      setCount(count-1);
    }}>Decrease</button>
  </div>
}
export default App
