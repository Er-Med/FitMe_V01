import React from 'react';

import { Routes, Route  } from 'react-router-dom';
//css
import './assets/css/App.css';
import  './assets/css/style.css';

//layouts
import Header from './layouts/Header'
import Footer from './layouts/Footer'

//pages 
import Home from './pages/Home/Home';
import Calories from './pages/Calories/Calories';
import Menu from './pages/Menu/Menu';
import Delivery from './pages/Delivery/Delivery';
import About from './pages/About/About'
import FAQ from './pages/FAQ/FAQ';

function App() {
  return (
    <>
      <Header/>
      <Routes>
          <Route  path="/"  element={<Home />} />
          <Route path="/Menu"  element={<Menu />} />
          <Route path="/Calories"  element={<Calories />} />
          <Route path="/Delivery"  element={<Delivery/>} />
          <Route path="/About"  element={<About />} />
          <Route path="/FAQ"  element={<FAQ />} />
      </Routes>
      <Footer/>
    </>
    )
}

export default App
