import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDebugValue } from 'react';
import { useEffect } from 'react';

function useDebounce(inputValue,timeout){
  const [debounce,setDebounce]=useState(inputValue);
  useEffect(()=>{
    let totalTime=setTimeout(() => {
      setDebounce(inputValue);
    }, timeout);
    // bt the catch here is that whenever dependency change it will start the clock again
    // wihtout making old clock stop.
    // so we will have to stop the old clock whenever dependency changes
    return ()=>{
      clearInterval(totalTime);
    }
    
  },[inputValue]);

  return debounce;
} 
function App() {
  const [inputValue,setInputValue]=useState('');
  const debouncedValue=useDebounce(inputValue,500);
  return (
    <>
      <input type='text' placeholder='Search'
      onChange={(e)=>{
        setInputValue(e.target.value);
      }}></input>
      <br/>
      Searched value is {debouncedValue}
    </>
  )
}

export default App
