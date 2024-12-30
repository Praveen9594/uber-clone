// import './App.css'

import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import UserLogin from "./pages/UserLogin"
import UserSignup from "./pages/UserSignup"
import Captainlogin from "./pages/Captainlogin"
import Captainsignup from "./pages/Captainsignup"

function App() {
  return (
    <>
      <div className=''>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/signup" element={<UserSignup />} />
          <Route path="/captain-login" element={<Captainlogin />} />
          <Route path="/captain-signup" element={<Captainsignup />} />
        </Routes>
      </div>
    </>
  )
}

export default App
