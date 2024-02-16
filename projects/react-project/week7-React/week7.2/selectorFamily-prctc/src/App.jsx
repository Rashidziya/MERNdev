import {RecoilRoot,useRecoilValue,useRecoilState,useRecoilStateLoadable
,useRecoilValueLoadable} from 'recoil'
import { todoAtomFamily } from './atoms';
function App() {
  return (
    <RecoilRoot>
      <Todo id={1}/>
      <Todo id={3}/>
      <Todo id={3}/>
    </RecoilRoot>
  )
}

function Todo({id}){
  const [todo_curr,setTodos]=useRecoilStateLoadable(todoAtomFamily(id));

  if(todo_curr.state==="hasValue"){
    return (
      <div>
        {todo_curr.contents.title}<br></br>
        {todo_curr.contents.description}
      </div>
    );
  }else if(todo_curr.state==="loading"){
    return <div>
      Loading .....
    </div>
  }
}

export default App
