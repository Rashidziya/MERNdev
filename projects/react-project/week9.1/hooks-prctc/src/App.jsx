import React, { useEffect, useState } from 'react'

function App(){
  const [render,setrender]=useState(true);
  useEffect(()=>{
    setInterval(() => {
      setrender(r=>!r);
    }, 2000);
  },[])
  return (
    <>
      {render? <MyComponent/>:<div> Hii</div>}
      {/* <MyComponent/> */}
    </>
  )
}

// Class Based Components-----------------------------
// class MyComponent extends React.Component{
//   constructor(props){
//     super(props)
//     this.state={count:0,sum:12};
//   }

//   render(){
//     return(
//       <div>
//         <h2>count is {this.state.count}</h2>
//         <h2>sum is {this.state.sum}</h2>
//         <button onClick={()=>{
//           this.setState({count:this.state.count+1});
//         }}>Click to Increase</button>
//       </div>
//     );
    
//   }
// }

// LifeCycle of functional Component---------------------
// function MyComponent(){
//   useEffect(()=>{
//     console.error("component mounted");

//     // by returning a function from the useEffect it means 
//     // the function will run when the component is un-mount or
//     // it will run before the logic run of the useEffect if the dependency changes anytime 
//     return ()=>{
//       console.log("component un-mounted");
//     }
//   },[]);
//   return <div>
//     from inside of the component
//   </div>
// }

// lifecycle of component in class based component
class MyComponent extends React.Component{
  componentDidMount(){
    console.log("component mounted");
  }

  componentWillUnmount(){
    console.log("component un-mounted");
  }

  render(){
    return <div>
      hii from class based component
    </div>
  }
}
export default App
