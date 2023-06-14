
import { BrowserRouter, Routes, Route } from "react-router-dom"

/*
import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import Nav from './Nav';
import Footer from './Footer';*/
import LoginPage from "./assets/component/LoginPage"
import HomePage from "./assets/component/Homepage"
import Cardyoutupe from "./assets/component/Cardyoutupe"


import Onecards from "./assets/component/Onecards"


function App() {

  return (
<>

<Routes>
<Route path="/Loginpage" element={<LoginPage />} />
<Route path="/Logout" element={<LoginPage />} />
<Route path="/HomePage" element={<HomePage/>} />
<Route path="/Onecards" element={<Onecards/>} />


</Routes>


</>
  )
}

export default App
