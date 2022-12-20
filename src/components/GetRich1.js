import React, { useState } from 'react'
import Logo from "../Img/logo.png";
import Fb from "../Img/fb.png";
import Tw from "../Img/tw.png";
import Ig from "../Img/ig.png";
import Gift from "../Img/gift.png";
import Plus from "../Img/plus.png";
import Navbar from './Navbar';
import Footer from './Footer';

export default function GetRich1() {

const [maxCount, setmaxCount] = useState(250)
   
    const characterCounter = (e)=>{
    if(maxCount == 0 && e.key != "Backspace" || maxCount == 250 && e.key == "Backspace"){
      e.preventDefault()
      return
    }
    if(e.key == "Backspace" ){
        setmaxCount(maxCount + 1)
    }else{

      setmaxCount(maxCount - 1)
    }
    }

  return (
 <>
   <section class="Home PastWinnerHome getrich">
   <Navbar/>

     
      <header>
        <nav>
          <div class="logo navdiv">
            <img src={Logo} alt="" />
            <p>The Quick Rich</p>
          </div>
          <div class="Links">
            <a href="" class="simpleParagraph">Sponsor</a>
            <a href="" class="simpleParagraph">About</a>
            <div class="giveaway">
              <p>Given Away So Far</p>
              <h1>$22,785</h1>
            </div>
            <a href="" class="simpleParagraph">FAQ</a>
            <a href="" class="simpleParagraph">Contact</a>
          </div>
          <button class="btn">
            Login / Signup
          </button>
        </nav>
      </header>

      <div class="container">
        <h2>GET RICH</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>
        <button class="btn">Learn More</button>
      </div>
    </section>

    <section class="section2getrich">
      <h2 class="simpleHeading">Get Rich</h2>
      <p class="simpleParagraph">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
      </p>
      <div class="main">
        <div class="form">
          <form action="">
            <div class="inputRow">
              <div class="input">
                <label for="">Entries</label>
                <input type="number" class="inputBox" placeholder="01" />
                {/* <!-- <div class="inputBox">
                  <p>01</p>
                  <div class="buttons">
                    <img src="./Img/up.png" alt="" />
                    <img src="./Img/down.png" alt="" />
                  </div>
                </div> --> */}
              </div>
              <div class="input">
                <label for="">Boost Box</label>
                <select name="" id="" class="inputBox">
                  <option value="">Standard</option>
                  <option value="">Option 2</option>
                  <option value="">Option 3</option>
                </select>
              </div>
              <div class="input">
                <label for="">Get Votes</label>
                <div class="inputBox">
                  <img src={Fb} alt="" />
                  <img src={Tw} alt="" />
                  <img src={Ig} alt="" />
                  <img src={Plus} alt="" />
                </div>
              </div>
            </div>
            <div class="inputRow">
              <div class="input">
                <label for="">Message</label>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  class="inputBox"
                  placeholder="Write a Message"
                  onKeyDown={(e)=>characterCounter(e)}
                ></textarea>
                <label for=""> 250/<span id="counter">{maxCount}</span></label>
              </div>
            </div>
            <div class="details details1">
              <h4>Total Amount: </h4>
              <h2>$0</h2>
              <img src={Gift} alt="" />
            </div>
            <button class="btn">Get Rich</button>
          </form>
        </div>
      </div>
    </section>
    <Footer/>

 </>
  )
}

