import { useMemo } from 'react';
import { useEffect } from 'react';
import { useState } from 'react'
function App() {
  const [exchange1,setExchange1]=useState({});
  const [exchange2,setExchange2]=useState({});
  const [bankData,setBankData]=useState({});
  
  useEffect(()=>{
    setExchange1({returns:100});
  },[])

  useEffect(()=>{
    setExchange2({returns:100});
  },[])

  const Cryptoreturns=useMemo(()=>{
    return exchange1.returns+exchange2.returns;
  },[exchange1,exchange2])
  
  useEffect(()=>{
    setTimeout(() => {
      setBankData({income:100});
    },5000);
  },[])

 
  const incomeTax=(Cryptoreturns+bankData.income)*0.3;
  return (
    <>
      Income Tax on All profits is {incomeTax}
    </>
  )
}

export default App
