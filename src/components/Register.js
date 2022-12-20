import React, { useState } from 'react'
import Logo from "../Img/logo.png";
import Google from "../Img/google.png";
import Navbar from './Navbar';
import Footer from './Footer';

export default function Register () {
const [Name, setName] = useState("")
const [Email, setEmail] = useState("")
const [Password, setPassword] = useState("")
const [CPasword, setCPasword] = useState("")
const submit = async (e) => {
  e.preventDefault()
  const data = fetch(`http://localhost:8000/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      Name,
      Email,
      Password

    })
  }).then((res) => res.json()).then((data) => {
    console.log(data)
    if (data.status == "ok") {
alert("User Created")
    }else if(data.status == "user"){
      alert("User Already Exist")
    }
    else if(data.status == "error"){
      alert("Error! Please Try Again")
    }
  })
  
}

return (
<>
<section class="Home CreateGiveaway login Register">
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

      <div class="form">
        <h3 class="simpleHeading">Register Now</h3>
        <p class="simpleParagraph logintext">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's
        </p>
        <form action="" >
          <div class="inputRow">
            <div class="input">
              <label for="">Name</label>
              <input type="text" name="FName" onChange={(e)=>setName(e.target.value)} placeholder="Enter Your Name" />
            </div>
          </div>
          <div class="inputRow">
            <div class="input">
              <label for="">Email</label>
              <input type="text" name="Email" onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Your Email Address" />
       
            </div>
          </div>
          <div class="inputRow">
            <div class="input">
              <label for="">Password</label>
              <input type="text" name="Password" onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password" />
            </div>
          </div>
          <div class="inputRow">
            <div class="input">
                <label for="">Confirm Password</label>
                <input type="text"  name="CPassword" placeholder="Enter Again Password" />
            </div>
          </div>
          <button onClick={submit}  class="btn">Register</button>
          <p class="simpleParagraph">Or Register With</p>
          <button class="google">
            <img src={Google} alt="" />
          </button>
        </form>
        <p class="simpleParagraph signup">Already Have An Account? <a href=""> Login</a></p>
      </div>
    </section>
    <section class="section2Giveaway section2Register">
       
    </section>
    <Footer/>

</>
  )
}
