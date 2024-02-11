import React, { Suspense } from 'react'
import {BrowserRouter, useAsyncValue} from 'react-router-dom'
import {Routes,Route} from 'react-router-dom'
// import {Landing} from './Pages/Landing'
// import {About} from './Pages/About'
// import {Account} from './Pages/Accounts'  // without lazy loading if you want then 
// import {Contact} from './Pages/Contact'
const Landing =React.lazy(()=> import('./Pages/Landing'));
const About=React.lazy(()=> import('./Pages/About'));
const Contact=React.lazy(()=> import('./Pages/Contact'));
const Account=React.lazy(()=> import('./Pages/Accounts'));
import { useNavigate } from 'react-router-dom'
function App() {

  return (
    <div>
      
       <BrowserRouter>
       <PageConnecter></PageConnecter>
          <Routes>
            <Route path='/' element={<Suspense fallback={<div>Loading...</div>}>
              <Landing/>
            </Suspense>}>  </Route>
            <Route path='/about' element={<Suspense fallback={<div>Loading...</div>}>
              <About/>
            </Suspense>}></Route>
            <Route path='/account' element={<Suspense fallback={<div>Loading...</div>}>
              <Account/>
            </Suspense>}></Route>
            <Route path='/contact' element={<Suspense fallback={<div>Loading...</div>}>
              <Contact/>
            </Suspense>}></Route>
          </Routes>
        </BrowserRouter>
    </div>
   
  )
}


function PageConnecter(){
  const navigate=useNavigate();
  return <div>
      <button onClick={()=>{
        navigate('/');
      }}>Landing Page</button>
      <button onClick={()=>{
        navigate('/about');
      }}>Abotu Page</button>
      <button onClick={()=>{
       navigate('/contact');
      }}>Contact Page</button>
      <button onClick={()=>{
        navigate('/account')
      }}>Accoutn Page</button>
  </div>
}
export default App
