import {RecoilRoot,useRecoilValue,useRecoilState} from 'recoil'
import { headerAtom, notificationsmeSelector } from './store/atom'
import { useMemo } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
function App() {

  return (
    <RecoilRoot>
      <MainApp></MainApp>
    </RecoilRoot>
  )
}

function MainApp(){
  const [notifyAtomcount,setNotificationCount]=useRecoilState(headerAtom);
  const totalNotificationCount=useRecoilValue(notificationsmeSelector);
  
  return <div>
    <button>Home</button>
    <button>My Network  ({notifyAtomcount.network})</button>
    <button>Jobs  ({notifyAtomcount.jobs>=10 ?"10+":notifyAtomcount.jobs})</button>
    <button>Messaging  ({notifyAtomcount.messaging})</button>
    <button>Notifications  ({notifyAtomcount.notifications})</button>
    <button>Me  ({totalNotificationCount})</button>
  </div>
}
export default App
