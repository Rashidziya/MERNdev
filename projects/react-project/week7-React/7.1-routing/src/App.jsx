import React, { Suspense } from 'react';
import {BrowserRouter,Routes, Route, useNavigate} from 'react-router-dom'
const Dashboard = React.lazy(()=> import('./pages/Dashboard'));
const Landing = React.lazy(()=> import('./pages/Landing'));   // Lazy Loading
const About= React.lazy(()=> import('./pages/About'));
// import Dashboard from './pages/Dashboard';
// import Landing from './pages/Landing';
// import About from './pages/About';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Appbar/>
        <Routes>
          <Route path='/dashbord' element={<Suspense fallback={<div>Loading....</div>}>
            <Dashboard/>
          </Suspense>}></Route>
          <Route path='/' element={<Suspense fallback={<div>Loading...</div>}>
            <Landing/>
          </Suspense>}></Route>
          <Route path='/about-Me' element={<Suspense fallback={<div>Loading....</div>}>
           <About/>
          </Suspense>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
 
  )
}

function Appbar(){
  const navigate=useNavigate();
  return <div>
     <div>
        <button onClick={()=>{
          navigate('/');
        }}>Landing Page</button>
        <button onClick={()=>{
          navigate('/dashbord');
        }}>Dashbord Page</button>
        <button onClick={()=>{
          navigate('/about-Me');
        }}>About Me</button>
      </div>
  </div>
} 
export default App
