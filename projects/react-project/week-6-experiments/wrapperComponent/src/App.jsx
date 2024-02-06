import { useState } from 'react'
import React from 'react'

// Actual way to use the Wrapper Component 
function App() {
  return (
    <div>
      <WrapperComponent>
        <WrapperComponent>
          <TextComponent/>
          Hi There 1
        </WrapperComponent>
      </WrapperComponent>
      <WrapperComponent>
        Hi There 2<br></br>
        Added a new line
        <TextComponent2/>
      </WrapperComponent>
    </div>
  )
}

function TextComponent(){
  return <div>
    Hi There from TextComponent 1
  </div>
}
function TextComponent2(){
  return <div>
    Hi There from TextComponent 2
  </div>
}
function WrapperComponent({children}){
  // try to create a div which has border 
  // and inside of the div renders the props

  return <div style={{border:'2px solid blue',padding:'15px'}}>
    {children}
  </div>
}
export default App
