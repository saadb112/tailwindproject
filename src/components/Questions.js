import React, { useState } from 'react'
import Logo from "../Img/logo.png";
import Footer from './Footer';
import Navbar from './Navbar';

export default function Questions () {
const [R1, setR1] = useState(false)
const [R2, setR2] = useState(false)
const [R3, setR3] = useState(false)
const [R4, setR4] = useState(false)
const [R5, setR5] = useState(false)
  return (
    <>
     <section class="Home questions">
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
          <h3>FREQUENTLY ASKED</h3>
          <div class="line"></div>
        </div>
        <h2>QUESTIONS</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>
        <button class="btn">View Questions</button>
      </div>
    </section>

    <section class="section2questions">
      <h2 class="simpleHeading">Featured Articles</h2>
      <p class="simpleParagraph">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
      </p>
      <div class="questionsBox">
        <div class="ques1" id="ques1" style={R1 ? {"height" : "25.7rem"} : {"height" : "7.6rem"} } onClick={()=>setR1(!R1)} >
          <div class="top">
            <h2 id="h1" style={R1 ? {"fontWeight" : "600"} : {"fontWeight" : "400"}}>What is Lorem Ipsum?</h2>
            <h3 id="sign1">{R1 ? "-" : "+"}</h3>
          </div>
          <p id="p1" style={R1 ? {"display" : "flex"} : {"display" : "none"}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div class="ques1" id="ques1" style={R2 ? {"height" : "25.7rem"} : {"height" : "7.6rem"} } onClick={()=>setR2(!R2)} >
          <div class="top">
            <h2 id="h1" style={R2 ? {"fontWeight" : "600"} : {"fontWeight" : "400"}}>What is Lorem Ipsum?</h2>
            <h3 id="sign1">{R2 ? "-" : "+"}</h3>
          </div>
          <p id="p1" style={R2 ? {"display" : "flex"} : {"display" : "none"}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div class="ques1" id="ques1" style={R3 ? {"height" : "25.7rem"} : {"height" : "7.6rem"} } onClick={()=>setR3(!R3)} >
          <div class="top">
            <h2 id="h1" style={R3 ? {"fontWeight" : "600"} : {"fontWeight" : "400"}}>What is Lorem Ipsum?</h2>
            <h3 id="sign1">{R3 ? "-" : "+"}</h3>
          </div>
          <p id="p1" style={R3 ? {"display" : "flex"} : {"display" : "none"}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div class="ques1" id="ques1" style={R4 ? {"height" : "25.7rem"} : {"height" : "7.6rem"} } onClick={()=>setR4(!R4)} >
          <div class="top">
            <h2 id="h1" style={R4 ? {"fontWeight" : "600"} : {"fontWeight" : "400"}}>What is Lorem Ipsum?</h2>
            <h3 id="sign1">{R4 ? "-" : "+"}</h3>
          </div>
          <p id="p1" style={R4 ? {"display" : "flex"} : {"display" : "none"}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div class="ques1" id="ques1" style={R5 ? {"height" : "25.7rem"} : {"height" : "7.6rem"} } onClick={()=>setR5(!R5)} >
          <div class="top">
            <h2 id="h1" style={R5 ? {"fontWeight" : "600"} : {"fontWeight" : "400"}}>What is Lorem Ipsum?</h2>
            <h3 id="sign1">{R5 ? "-" : "+"}</h3>
          </div>
          <p id="p1" style={R5 ? {"display" : "flex"} : {"display" : "none"}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
       
      </div>
    </section>
    <Footer/>
    
    </>
  )
}

