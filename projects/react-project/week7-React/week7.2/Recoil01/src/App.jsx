import { RecoilRoot } from "recoil"
import { countAtom} from "./store/atoms/count"
import { useRecoilValue,useRecoilState } from "recoil"
import { Count } from "./components/Counter"
function App() {
  return (
    <div>
      <RecoilRoot>
        <Count></Count>
      </RecoilRoot>
    </div>
  )
}

// function Count(){
//   return <div>
//       <Countrendrer/>
//       <Button/>
//   </div>
// }

// function Countrendrer(){
//   const count=useRecoilValue(countAtom);
//   return <div>
//       <b>
//           {count};
//       </b>
//   </div>
// }

// function Button(){
//   const [count,setCount]=useRecoilState(countAtom);
//   return <div>
//       <button onClick={()=>{
//           setCount(count+1);
//       }}>Increase</button>

//       <button onClick={()=>{
//           setCount(count-1);
//       }}>Decrease</button>
//   </div>
// }

export default App
