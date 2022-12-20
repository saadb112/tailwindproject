import React from 'react'
import Logo from "../Img/logo.png";
import Contact2 from "../Img/contact2.png";
import Admin from "../Img/Admin.svg";
import General from "../Img/general.svg";
import Support from "../Img/Support.svg";
import Navbar from './Navbar';
import Footer from './Footer';

export default function Contact () {
  return (
  <>
  <section class="Home Contact">
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
        <div class="Tagline">
          <h3>EXCLUSIVE GIVEAWAY</h3>
          <div class="line"></div>
        </div>
        <h2>CONTACT US</h2>
        <p>Power up for a chance to win in this electrafying instant game!</p>
        <button class="btn">See More</button>
      </div>
    </section>
   <section class="section2contact">
    <div class="row">
        <div class="r1 ">

<div class="form">
    <h3 class="simpleHeading">Let's Chat</h3>
    <p class="simpleParagraph logintext">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever 

    </p>
    <form action="">
      <div class="inputRow">
        <div class="input">
          <label for="">Name</label>
          <input type="text" placeholder="Enter Your Name" />
        </div>
      </div>
      <div class="inputRow">
        <div class="input">
          <label for="">Email</label>
          <input type="text" placeholder="Enter Your Email " />
   
        </div>
      </div>
      <div class="inputRow">
        <div class="input">
          <label for="">Message</label>
          <textarea name="" id="" cols="30" rows="10" placeholder="Write Your Message"></textarea>
          
        </div>
      </div>
      <button class="btn">Send Message</button>
    </form>
  </div>
        </div>
        <div class="r2">
            <img src={Contact2} alt="" />
        </div>
    </div>
   </section>
<section class="section3contact">
    <h2 class="simpleHeading">
        Please Contact
    </h2>
    <p class="simpleParagraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever </p>
<div class="cards">
    <div class="card">
        <div class="left">
          <div class="img">
            <img src={Admin} alt="" />
          </div>
            <div class="text">
                <h2>Admin</h2>
                <p>^admin</p>
            </div>
        </div>
        <button class="btn"><a href=""> Contact Now</a></button>
    </div>
    <div class="card">
        <div class="left">
          <div class="img">
            <img src={General} alt="" />
          </div>
            <div class="text">
                <h2>General</h2>
                <p>^general</p>

            </div>
        </div>
        <button class="btn"><a href=""> Contact Now</a></button>
    </div>
    <div class="card">
        <div class="left">
          <div class="img">
            <img src={Support} alt="" />
          </div>
            <div class="text">
                <h2>Support</h2>
                <p>^support</p>
            </div>
        </div>
        <button class="btn"><a href=""> Contact Now</a></button>
    </div>
</div>
</section>
<Footer/>

</>
  )
}

