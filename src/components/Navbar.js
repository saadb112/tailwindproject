import React, { useState } from 'react'
import Logo from "../Img/logo.png";

export default function Navbar  () {
const [Toggle, setToggle] = useState(false)
 
    const navbar = ()=>{
        setToggle(!Toggle)
      }
  return (
    <>
     <div class="mobileHeader">
          <div class="logo navdiv">
            <img src={Logo} alt="" />
            <p>The Quick Rich</p>
          </div>
          <div class="navbarButton" onClick={navbar}>
            <div class="lines"></div>
            <div class="lines"></div>
            <div class="lines"></div>
          </div>
        </div>
        <div class="header2" id="header" style={Toggle ? {"top" : "0rem"} : {"top" : "-70rem"}}>
          <div onClick={navbar}>
            <p class="close">X</p>
          </div>
          <nav>
            <div class="logo navdiv">
              <img src={Logo} alt="" />
              <p>The Quick Rich</p>
            </div>
            <div class="Links">
              <a href="" class="simpleParagraph">
                Sponsor
              </a>
              <a href="" class="simpleParagraph">
                About
              </a>
              <div class="giveaway">
                <p>Given Away So Far</p>
                <h1>$22,785</h1>
              </div>
              <a href="" class="simpleParagraph">
                FAQ
              </a>
              <a href="" class="simpleParagraph">
                Contact
              </a>
            </div>
            <button class="btn">Login / Signup</button>
          </nav>
        </div>
    </>
  )
}

