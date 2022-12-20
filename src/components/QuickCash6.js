import React from 'react'
import Sta from "../Img/star.png";
import QC1 from "../Img/QC1.png";
import QC2 from "../Img/QC2.png";
import Logo from "../Img/logo.png";
import Calendar from "../Img/calendar.png";
import Price from "../Img/price.png";
import Navbar from './Navbar';
import Footer from './Footer';
export default function QuickCash6 () {
  return (
   <>
   <section class="Home PastWinnerHome QuickCash">
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
        <h2>QUICK CASH</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>
        <button class="btn">See More</button>
      </div>
    </section>

  <section class="section2Quickcash  section2Quickcash6">
    <h2 class="simpleHeading">Single Giveaway</h2>
    <p class="simpleParagraph">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever 
    </p>
    <div class="card">
<div class="left">
    <h3>Giveaway Name</h3>
    <div class="details">
        <p><img src={Price} alt=""/>$850</p>
        <p><img src={Calendar} alt=""/>-7 Months</p>
    </div>
    <p class="simpleParagraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
</div>
<button class="btn">
   <a href=""> Enter
  </a>
  </button>
</div>

<section class="section2jackpot section3QuickCash">

    <div class="rows rows2">
      <div class="row">
        <div class="r1">
          <img src={QC1} alt="" />
        </div>
        <div class="r2">
          <h2>Eligibility Guidelines</h2>
         <p class="simpleParagraph"><img src={Sta} alt=""/>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
            <p class="simpleParagraph"><img src={Sta} alt=""/>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy </p>
            <p class="simpleParagraph"><img src={Sta} alt=""/>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            <p class="simpleParagraph"><img src={Sta} alt=""/>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy </p>
            <p class="simpleParagraph"><img src={Sta} alt=""/>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
        </div>
      </div>
    </div>
    <div class="rows ">
      <div class="row">
        <div class="r1">
          <img src={QC2} alt="" />
        </div>
        <div class="r2">
          <h2>Details Of The Giveaway</h2>
         <p class="simpleParagraph"><img src={Sta} alt=""/>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
            <p class="simpleParagraph"><img src={Sta} alt=""/>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy </p>
            <p class="simpleParagraph"><img src={Sta} alt=""/>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            <p class="simpleParagraph"><img src={Sta} alt=""/>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy </p>
            <p class="simpleParagraph"><img src={Sta} alt=""/>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
        </div>
      </div>
    </div>
   
  </section>

  </section>
  <Footer/>

   </>
  )
}
