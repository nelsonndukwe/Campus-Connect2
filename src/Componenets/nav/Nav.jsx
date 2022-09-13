import React from 'react'
import './nav.css'
import Logo from '../../assets/campuslogo.png'
import {HiMenuAlt2} from 'react-icons/hi'
import { useState } from 'react'



const Nav = () => {
 const [isNavShowing, setIsNavShowing] = useState(false);
  
  return (
    <nav>

    <div className='container nav_container'>
    <div className='nav_logo'>
    <a href='#'><img src={Logo}/></a>
    </div>

    <ul className={"nav_link ${ isNavShowing ?'show_nav': 'hide_nav'}"}>
        <li><a href='#' className={({isActive}) => isActive ? 'active_nav' : ''}>Home</a></li>
        <li><a href='#about' className={({isActive}) => isActive ? 'active_nav' : ''}>About</a></li>
        <li><a href='#contact' className={({isActive}) => isActive ? 'active_nav' : ''}>Contact</a></li>
        <li><a href='#support' className={({isActive}) => isActive ? 'active_nav' : ''}>Support</a></li>
        

    </ul>

    <button  className='nav_toggle-btn'><HiMenuAlt2/></button>
    

    </div>






    </nav>
  )
}

export default Nav