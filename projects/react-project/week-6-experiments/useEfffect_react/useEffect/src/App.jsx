import { useEffect, useState } from "react";

function App() {
  useEffect(()=>{
    alert("hii");
  },[])
  return <div>
    Rashid Ziya....
  </div>;
}

export default App;

// it is hooks in react just like the usestate which we had used earlier
// hooks is type of function in react which lets "hooks into " the state
// in react and another is hooks into the lifecyle feature of a component.

// usestate => is a hooks which lets us create/inititalize the component state variable
// and gives the function to update that state variable.

// useEffect => In functional Component it lets Mounts on the web/Render it only once.
// The useEffect Hook allows you to perform side effects in your components.

// Some examples of side effects are: fetching data, directly updating the DOM, and timers.

// useEffect accepts two arguments. The second argument is optional.

// useEffect(<function>, <dependency>)
