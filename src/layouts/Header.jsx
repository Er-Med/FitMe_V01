import React, {useState} from 'react'
import {logo, shoppingBag} from '/src/utils/Images'


import { NavLink, Link } from 'react-router-dom'
function Header(){

  
  //show and hide barMenu
  const [barmenu,setBarMenu] = useState(false)
  const showBarMenu = () =>{
    setBarMenu(!barmenu)
  }

  return(
    
    <header>      
      <div className="container m-gap y-center space-between">
        
        <Link to ="/" className="logo y-center gap-1">
          <img src={logo} alt="logo" className="img-fix"/>
          <h1>FitMe</h1>
        </Link>

        <nav className="nav">
          <ul className={barmenu ? 'm-gap flex show-nav' : 'm-gap flex' }>
            
            {
              (window.location.pathname === '/') ? '' :  
                <li> <NavLink to="/" onClick={showBarMenu}> Home </NavLink> </li>
            }
            <li>
              <NavLink to="/Calories" onClick={showBarMenu}> calorie calculator </NavLink>
            </li>
            <li>
              <NavLink to ="/Menu" onClick={showBarMenu}> menu </NavLink>
            </li>
            <li>
              <NavLink to="/Delivery" onClick={showBarMenu}> delivery </NavLink>
            </li>
            <li>
              <NavLink to="/About" onClick={showBarMenu}> about us </NavLink>
            </li>
            <li>
              <NavLink to="/FAQ" onClick={showBarMenu}> faq </NavLink>
            </li>
          </ul>
        </nav>

        <div className="inscription y-center gap-1">
          <img src={shoppingBag} alt=""/>
          <Link to="#" className="main-btn">Sign-in</Link>
        </div>

        <i className="fa-solid fa-bars bar-menu" onClick={showBarMenu}></i>
      
      </div>
    </header>

  )
}

export default Header