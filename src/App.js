import './index.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Navigation from "./Pages/Navigation";
import Categories from './Pages/Categories';
import About from './Pages/About';
import Order from './Pages/Order';
import LoginForm from './Components/LoginForm';
import RegisterForm from './Components/RegisterForm'
import Home from './Pages/Home';

import { useState } from 'react'
import PrivateRoute from './route/ProtectedRoute';
import Profile from './UserPages/Profile';

function App() {
  console.log("inside app")
  const [isLoggedIn, setisLoggedIn] = useState(true);
    const logIn = () => {
    setisLoggedIn(true);
    };
    const logOut = () => {
    setisLoggedIn(false);
    };
  const token =  localStorage.getItem("token")

  // let routes = <Router>
  //   <Routes>

  //          <Route path="/login" element={<LoginForm/>} />
  //             <Route path="/register" element={<RegisterForm/>} />
  //   </Routes>
  // </Router>
  // if(token) {
  //   routes = <Router>
  //     <Routes>

  //                 <Route path="/categories" element={<Categories/>} />
  //                 <Route path="/about" element={<About/>} />
  //                 <Route path="/order" element={<Order/>} />
  //     <Route exact path="/" element={<Home />} />
  //     </Routes>
  //   </Router>
  // }
  return (
    <div style = {{ marginTop:0, left:0, backgroundColor: "white"}}>
      <CssBaseline />
        <Box sx={{ height: '100vh' }}>
          
          <Router>
            
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/login" element={<LoginForm/>} />
              <Route path="/register" element={<RegisterForm/>} />
            
              <Route exact element={<PrivateRoute  />}>
                  <Route path="/categories" element={<Categories/>} />
                  <Route path="/about" element={<About/>} />
                  <Route path="/order" element={<Order/>} />
                  <Route path="/profile" element={<Profile/>} />
              </Route>


            </Routes>
          </Router>
        </Box>
    </div>
  );
}

export default App;
