

## Wrapper Component :-
- A Component which can take Another Component As An input .
- and can Change the behaviour or its child component.
-KIDS way which in the market does'nt used ----------------------------------

import { useState } from 'react'
import React from 'react'

function App() {

  return (
    <div>
      <WrapperComponent innerComponent={<TextComponent/>}></WrapperComponent>
      <WrapperComponent innerComponent={<TextComponent2/>}></WrapperComponent>
    </div>
  )
}

function TextComponent(){
  return <div>
    Hi There 1
  </div>
}
function TextComponent2(){
  return <div>
    Hi There 2
  </div>
}
function WrapperComponent({innerComponent}){
  // try to create a div which has border 
  // and inside of the div renders the props

  return <div style={{border:'2px solid black',padding:'15px'}}>
    {innerComponent}
  </div>
}
export default App


Actual Way of Using Wrapper Component-------------------------------
This method lets 