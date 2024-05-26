import { useRecoilValue,useRecoilState, useSetRecoilState } from "recoil";
import { countAtom } from "../store/atoms/count";
import { Even } from "./Even";
export function Button(){
    // const [count,setCount]=useRecoilState(countAtom);

    // Rule is that whenever state changes the component will re-render in react 
    // so here as well as the state getting updated then it will invoke the fact 
    // ki component will re -render . But as for the efficiency of the app 
    // Clicking on the button only the Count is updated.So only the CountRendrer 
    // component should re-render . Button component should Not .

    // So to Avoid the unnecessery re-render of Button component we have to 
    // use the hook which gives the access of the updater Function for the state variable.
    const setCount= useSetRecoilState(countAtom);
    console.log("button re-render")
    return <div>
        <button onClick={()=>{
            setCount(count=>count+1);
        }}>Increase</button>

        <button onClick={()=>{
            setCount(count=> count-1);
        }}>Decrease</button>
        <Even></Even>
    </div>
}