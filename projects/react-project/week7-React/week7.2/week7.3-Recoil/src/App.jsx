import { useState } from 'react'
import {RecoilRoot,useRecoilValue,useRecoilState} from 'recoil'
import {mynetworkAtom,messagingAtom,notificationAtom,jobsAtom} from './store/atom'
import { totalSelector } from './store/atom'
import { useMemo } from 'react';
function App() {

  return (
    <RecoilRoot>
      <Header></Header>
    </RecoilRoot>
  )
}
function Header(){
  const netwrokAtomCount=useRecoilValue(mynetworkAtom);
  const jobsAtomCount=useRecoilValue(jobsAtom);
  const messagingAtomCount=useRecoilValue(jobsAtom);
  const [notificationAtomCount,setNotification]=useRecoilState(notificationAtom);

  // const totalAtomCount=useMemo(()=>{
  //   return netwrokAtomCount+jobsAtomCount+messagingAtomCount+notificationAtomCount;
  // },[netwrokAtomCount,jobsAtomCount,messagingAtomCount,notificationAtomCount]);
  const totalAtomCount=useRecoilValue(totalSelector);
  return <div>
    <button>Home</button>
    <button>My Network ({netwrokAtomCount >=99 ?"99+":netwrokAtomCount})</button>
    <button>Jobs ({jobsAtomCount>=99 ? "99+":jobsAtomCount})</button>
    <button>Messaging ({messagingAtomCount >=90?"90+":messagingAtomCount})</button>
    <button>Notifications ({notificationAtomCount >=99? "99+":notificationAtomCount})</button>
    <button onClick={()=>{
      setNotification(count=> count+1);
    }}>Me ({totalAtomCount >=210? "210+":totalAtomCount})</button>
  </div>
}
export default App
