import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react';

function useIsOnline(){
  const [isOnline,setIsOnline]=useState(window.navigator.onLine);
  useEffect(()=>{
    window.addEventListener('online', () => {
      setIsOnline(true)
    });
    window.addEventListener('offline', () => {
      setIsOnline(false);
    });
  },[])
  return isOnline;
}
function App() {
  const isOnline=useIsOnline();
  // check after every five second if you are online or offline
  if(isOnline){
    return <div>you are back online !</div>
  }
  return <div>you are offline !</div>
  
}

export default App
