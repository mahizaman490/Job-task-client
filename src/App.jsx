import { Outlet } from 'react-router-dom'
import './App.css'

import Footer from './components/Footer'
import Navbar from './components/Navbar'


function App() {
 

  return (
    <>
      <div>
      <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
           <div className="pt-10"> <Footer></Footer></div>
        </div>
      
      </div>
      
    </>
  )
}

export default App
