import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Detail from './pages/Detail';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';



function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isFilterActive, setIsFilterActive] = useState(false)

  const p = {
    isLoggedIn,
    setIsLoggedIn,
    isFilterActive,
    setIsFilterActive
  }

  return (
    <Router>
      <Navbar {...p} />
      <Routes>
        <Route exact path='/' element={<Home {...p} />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/login' element={<Login {...p} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );

}

export default App;
