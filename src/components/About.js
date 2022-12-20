import React, { useState } from 'react'
import Logo from "../Img/logo.png";
import Jackpot1 from "../Img/jackpot1.png";
import Jackpot2 from "../Img/jackpot2.png";
import Jackpot3 from "../Img/jackpot3.png";
import Jackpot4 from "../Img/jackpot4.png";
import User from "../Img/QuickCase/user.png";
import User2 from "../Img/user2.png";
import User3 from "../Img/user3.png";
import Quote from "../Img/quote.png";
import Navbar from './Navbar';
import Footer from './Footer';

export default function About (){
const [R1, setR1] = useState("flex")
const [R2, setR2] = useState("none")
const [R3, setR3] = useState("none")
const [R4, setR4] = useState("none")
const [R5, setR5] = useState("none")

  return (
    <>
    <section class="Home jackpot">
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
        <h2>MEGA JACKPOT</h2>
        <p>Power up for a chance to win in this electrafying instant game!</p>
        <button class="btn">See More</button>
      </div>
    </section>
    <section class="section2jackpot">
      <h2 class="simpleHeading">About Us</h2>
      <p class="simpleParagraph">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
      </p>
      <div class="rows">
        <div class="row">
          <div class="r1">
            <img src={Jackpot1} alt="" />
          </div>
          <div class="r2">
            <h2>We Will ProvideWhat You Need!</h2>
            <p class="simpleParagraph">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
              <br />
              <br />
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled
            </p>
            <button class="btn">Read More</button>
          </div>
        </div>
      </div>

      <div class="rows rows2">
        <div class="row">
          <div class="r1">
            <img src={Jackpot2} alt="" />
          </div>
          <div class="r2">
            <h2>What is Lorem Ipsum?</h2>
            <p class="simpleParagraph">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
              <br />
              <br />
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled
            </p>
            <button class="btn">Read More</button>
          </div>
        </div>
      </div>
      <div class="rows">
        <div class="row">
          <div class="r1">
            <img src={Jackpot3} alt="" />
          </div>
          <div class="r2">
            <h2>Where does it come from?</h2>
            <p class="simpleParagraph">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
              <br />
              <br />
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled
            </p>
            <button class="btn">Read More</button>
          </div>
        </div>
      </div>
      <div class="rows rows2">
        <div class="row">
          <div class="r1">
            <img src={Jackpot4} alt="" />
          </div>
          <div class="r2">
            <h2>Where Can I Get Some?
            </h2>
            <p class="simpleParagraph">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
              <br />
              <br />
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled
            </p>
            <button class="btn">Read More</button>
          </div>
        </div>
      </div>
    </section>

    <section class="section3jackpot">
      <h2 class="simpleHeading">Testimonials</h2>
      <p class="simpleParagraph">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
      </p>
      <div class="cards">
        <div class="card" style={ {"display" : R1} }>
          <div class="top">
            <img src={Quote} alt="" />
            <p class="simpleParagraph">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </p>
          </div>
          <div class="bottom">
            <img src={User} alt="" />
            <p>John Doe</p>
          </div>
        </div>
        <div class="card card2" style={ {"display" : R1} }>
          <div class="top">
            <img src={Quote} alt="" />
            <p class="simpleParagraph">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </p>
          </div>
          <div class="bottom">
            <img src={User2} alt="" />
            <p>James Robert</p>
          </div>
        </div>
        <div class="card" style={ {"display" : R1} }>
          <div class="top">
            <img src={Quote} alt="" />
            <p class="simpleParagraph">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </p>
          </div>
          <div class="bottom">
            <img src={User3} alt="" />
            <p>Mary Patricia</p>
          </div>
        </div>
        <div class="card" style={ {"display" : R2} }>
          <div class="top">
            <img src={Quote} alt="" />
            <p class="simpleParagraph">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </p>
          </div>
          <div class="bottom">
            <img src={User} alt="" />
            <p>John Doe</p>
          </div>
        </div>
        <div class="card card2" style={ {"display" : R2} }>
          <div class="top">
            <img src={Quote} alt="" />
            <p class="simpleParagraph">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </p>
          </div>
          <div class="bottom">
            <img src={User2} alt="" />
            <p>James Robert</p>
          </div>
        </div>
        <div class="card" style={ {"display" : R2} }>
          <div class="top">
            <img src={Quote} alt="" />
            <p class="simpleParagraph">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </p>
          </div>
          <div class="bottom">
            <img src={User3} alt="" />
            <p>Mary Patricia</p>
          </div>
        </div>
        <div class="card" style={ {"display" : R3} }>
          <div class="top">
            <img src={Quote} alt="" />
            <p class="simpleParagraph">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </p>
          </div>
          <div class="bottom">
            <img src={User} alt="" />
            <p>John Doe</p>
          </div>
        </div>
        <div class="card card2" style={ {"display" : R3} }> 
          <div class="top">
            <img src={Quote} alt="" />
            <p class="simpleParagraph">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </p>
          </div>
          <div class="bottom">
            <img src={User2} alt="" />
            <p>James Robert</p>
          </div>
        </div>
        <div class="card" style={ {"display" : R3} }>
          <div class="top">
            <img src={Quote} alt="" />
            <p class="simpleParagraph">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </p>
          </div>
          <div class="bottom">
            <img src={User3} alt="" />
            <p>Mary Patricia</p>
          </div>
        </div>
        <div class="card" style={ {"display" : R4} }>
          <div class="top">
            <img src={Quote} alt="" />
            <p class="simpleParagraph">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </p>
          </div>
          <div class="bottom">
            <img src={User} alt="" />
            <p>John Doe</p>
          </div>
        </div>
        <div class="card card2" style={ {"display" : R4} }>
          <div class="top">
            <img src={Quote} alt="" />
            <p class="simpleParagraph">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </p>
          </div>
          <div class="bottom">
            <img src={User2} alt="" />
            <p>James Robert</p>
          </div>
        </div>
        <div class="card" style={ {"display" : R4} }>
          <div class="top">
            <img src={Quote} alt="" />
            <p class="simpleParagraph">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </p>
          </div>
          <div class="bottom">
            <img src={User3} alt="" />
            <p>Mary Patricia</p>
          </div>
        </div>
        <div class="card" style={ {"display" : R5} }>
          <div class="top">
            <img src={Quote} alt="" />
            <p class="simpleParagraph">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </p>
          </div>
          <div class="bottom">
            <img src={User} alt="" />
            <p>John Doe</p>
          </div>
        </div>
        <div class="card card2" style={ {"display" : R5} }>
          <div class="top">
            <img src={Quote} alt="" />
            <p class="simpleParagraph">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </p>
          </div>
          <div class="bottom">
            <img src={User2} alt="" />
            <p>James Robert</p>
          </div>
        </div>
        <div class="card" style={ {"display" : R5} }>
          <div class="top">
            <img src={Quote} alt="" />
            <p class="simpleParagraph">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </p>
          </div>
          <div class="bottom">
            <img src={User3} alt="" />
            <p>Mary Patricia</p>
          </div>
        </div>
        
      </div>
      <div class="pagination" id="pagination">
        <div class="Pagebtn" onClick={()=>{
          setR1("flex")
          setR2("none")
          setR3("none")
          setR4("none")
          setR5("none")
        }}></div>
        <div class="Pagebtn" onClick={()=>{
          setR1("none")
          setR2("flex")
          setR3("none")
          setR4("none")
          setR5("none")
        }}></div>
        <div class="Pagebtn" onClick={()=>{
          setR1("none")
          setR2("none")
          setR3("flex")
          setR4("none")
          setR5("none")
        }}></div>
        <div class="Pagebtn" onClick={()=>{
          setR1("none")
          setR2("none")
          setR3("none")
          setR4("flex")
          setR5("none")
        }}></div>
        <div class="Pagebtn" onClick={()=>{
          setR1("none")
          setR2("none")
          setR3("none")
          setR4("none")
          setR5("flex")
        }}></div>
      </div>
    </section>
    <Footer/>
    </>
  )
}

// export default About