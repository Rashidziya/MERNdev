import { useState } from 'react'
import './App.css'
import { RevenueCard } from './components/RevenueCard'
import { RevenueCard1 } from './components/RevenueCard1'

function App() {

  return (
    <>

      {/* <div className='grid grid-cols-3'>
        <RevenueCard title={"Amount Pending"} amount={"92,312.20"} orderCount={13}></RevenueCard>
      </div> */}

      <div className='grid grid-cols-3'>
        <RevenueCard1 nextPayout={"Next Payout"} amount={"2,312.23"} countOrders={23} date={"Today,4:PM"}/>
      </div>

    </>
   
  )
}

export default App
