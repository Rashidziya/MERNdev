import {useRecoilValue,useSetRecoilState,useRecoilState,RecoilRoot} from 'recoil'
import { todoAtomFamily } from './atom'
import { useEffect } from 'react';

function App() {
  return (
    <RecoilRoot>
      <Updater/>
      <Todo id={1}></Todo>
      <Todo id={2}></Todo>
      <Todo id={2}></Todo>
      <Todo id={2}></Todo>
      <Todo id={2}></Todo>
      <Todo id={2}></Todo>
    </RecoilRoot>
  )
}

function Updater(){
  const updateTodo=useSetRecoilState(todoAtomFamily(2));
  // let say after 5 second the 2nd todo is updated

  // from this component we are updating the atom which has 2 it's id 
  // you can pay attention that whoever component has used that particular 
  // atom as it's state you can see that after five second it got re-rendered with 
  // updated atom.
  useEffect(()=>{
    setTimeout(() => {
      updateTodo({
        id:4,
        title:"new Todo",
        description:"new Todo"
      })
    }, 5000);
    
  },[])
  return <div>
      
  </div>
}
function Todo({id}){
  const currentTodo=useRecoilValue(todoAtomFamily(id));
  return <div>
    {currentTodo.title}<br></br>
    {currentTodo.description}
  </div>
}
export default App
