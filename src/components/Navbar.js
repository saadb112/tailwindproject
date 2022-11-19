import React from 'react'
import Logo from "../Img/logo.png"
import Uk from "../Img/uk.png"
const Navbar = () => {
  return (
    <header>
        {/* <img src={Logo} alt="" /> */}
        <nav>
          <img src={Logo} alt="" />
            <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Expertise <i class="fa-solid fa-caret-down"></i></a></li>
            <li><a href="">Industries <i class="fa-solid fa-caret-down"></i></a></li>
            <li><a href="">Capital Structure <i class="fa-solid fa-caret-down"></i></a></li>
            <li><a href="">People</a></li>
            <li><a href="">Careers</a></li>
            <li><a href="">About Us</a></li>
            <li><a href="">Contact Us</a></li>
            <li><a href=""><img src={Uk} alt="" />  <i class="fa-solid fa-caret-down"></i></a></li>
            
            </ul>
        </nav>
    </header>
  )
}

export default Navbar