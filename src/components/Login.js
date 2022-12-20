import React, { useState } from "react";
import Logo from "../Img/logo.png";
import Google from "../Img/google.png";
import Navbar from "./Navbar";
import Footer from "./Footer";
export default function Login () {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const submit = async (e) => {
    e.preventDefault();
    const data = fetch("http://localhost:8000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Email,
        Password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.status == "ok") {
          console.log(data.data);
          localStorage.setItem("token", data.data);
          window.location.href = "./#/dashboard";
        } else if (data.status == "password") {
          alert("Error! Enter valid Input");
          console.log(data.status);
        } else if (data.status == "User Exist") {
          alert("Error! User not Exist");
          console.log(data.status);
        }
      });
  };
  return (
    <>
      <section class="Home CreateGiveaway login">
    <Navbar/>

      
        <header>
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
        </header>

        <div class="form">
          <h3 class="simpleHeading">Welcome Back</h3>
          <p class="simpleParagraph logintext">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's
          </p>
          <form>
            <div class="inputRow">
              <div class="input">
                <label for="">Email</label>
                <input
                  type="text"
                  name="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your Email Address"
                />
              </div>
            </div>
            <div class="inputRow">
              <div class="input">
                <label for="">Password</label>
                <input
                  type="text"
                  name="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Your Password"
                />
                <a href="">Forgot Password?</a>
              </div>
            </div>
            <button onClick={submit} class="btn" type="submit">
              Login
            </button>
            <p class="simpleParagraph">Or Login With</p>
            <button class="google">
              <img src={Google} alt="" />
            </button>
          </form>
          <p class="simpleParagraph signup">
            Don't have an account yet? <a href=""> Sign Up</a>
          </p>
        </div>
      </section>
      <section class="section2Giveaway section2Login">
       
       </section>
    <Footer/>
      
    </>
  );
};

