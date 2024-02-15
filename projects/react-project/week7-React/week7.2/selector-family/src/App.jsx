import {RecoilRoot,useRecoilValue,useRecoilState} from 'recoil'
import { todoatomFamily } from './atom'

function App() {
  return (
    <RecoilRoot>
      <Todo id={1}></Todo>
      <Todo id={2}></Todo>
      <Todo id={2}></Todo>
      <Todo id={2}></Todo>
      <Todo id={2}></Todo>
      <Todo id={2}></Todo>
      <Todo id={2}></Todo>
    </RecoilRoot>
  )
}

function Todo({id}){
  const currTodo=useRecoilValue(todoatomFamily(id));

  return <div>
    {currTodo.title} <br></br>
    {currTodo.description}
  </div>
}

export default App
