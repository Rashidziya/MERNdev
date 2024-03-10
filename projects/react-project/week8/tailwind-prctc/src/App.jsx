import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <div className='bg-red-500 sm:bg-yellow-500 md:bg-green-500 lg:bg-blue-500'>Rashid</div>
      <div style={{display:'flex', height:"150px", width:"400px", border:"2px solid black",
        justifyContent:"space-around"}}>
        <div style={{background:"red"}}>red</div>
        <div style={{background:"green"}}>green</div>
        <div style={{background:"yellow"}}>yellow</div>
      </div>

      <div className='flex justify-center'>
        <div className='bg-red-500'>red</div>
        <div className='bg-green-500'>green</div>
        <div className='bg-yellow-500'>yellow</div>
      </div>
      <Grid></Grid>
    </>
  )
}

function Grid(){
  return <>
    <div className='grid grid-cols-10 gap-4'>
        <div className='bg-red-500 col-span-4'>red</div>
        <div className='bg-green-500 col-span-4'>green</div>
        <div className='bg-yellow-500 col-span-2'>yellow</div>
        <div className='bg-yellow-500 col-span-full'>yellow</div>
        <div className='bg-yellow-500 col-start-5 col-span-2'>yellow</div>
        
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-3 gap-2'>
        <div className='bg-red-500'>red</div>
        <div className='bg-green-500'>green</div>
        <div className='bg-yellow-500'>yellow</div>
      </div>
  </>
}
export default App
