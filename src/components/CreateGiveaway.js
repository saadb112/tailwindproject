import React, { useState } from 'react'
import Logo from "../Img/logo.png"
import Upload from "../Img/upload.png"
import Star from "../Img/star.png"
import Navbar from './Navbar'
import Footer from './Footer'
import axios from "axios"
// import Formdata from "form-data"
export default function CreateGiveaway (){
const [Name, setName] = useState("")
const [CName, setCompName] = useState("")
const [WG, setWG] = useState("")
const [Type, setType] = useState("")
const [Value, setValue] = useState("")
const [StartDate, setStartDate] = useState("")
const [EndDate, setEndDate] = useState("")
const [Terms, setTerms] = useState("")

const [file, setfile] = useState("")
const submit = async (e) => {
  e.preventDefault();
  let form = new FormData()


  form.append("Name", Name)
  form.append("CName", CName)
  form.append("WG", WG)
  form.append("Type", Type)
  form.append("Value", Value)
  form.append("StartDate", StartDate)
  form.append("EndDate", EndDate)
  form.append("Terms", Terms)
  form.append("file", file)
 console.log(file)
//   const data = fetch("http://localhost:8000/creategiveaway", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       form
//     }),
//   })
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//     });
axios.post("http://localhost:8000/creategiveaway", form).then((res)=>{
  console.log(res)
})
};

  return (
    <>
        <section class="Home CreateGiveaway">
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
        <h3 class="simpleHeading">Create Giveaway</h3>
        <p class="simpleParagraph">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's
        </p>
        <form action="">
          <div class="inputRow">
            <div class="input">
              <label for="">Giveaway DropDown </label>
              <select name="" id="" onChange={(e)=>setType(e.target.value)}>
                <option value="none">Select Option</option>
                <option value="Giveaway">Giveaway</option>
                <option value="Contest">Contest</option>
                <option value="Quest">Quest</option>
              </select>
            </div>
          </div>
          <div class="inputRow">
            <div class="input">
              <label for="">Giveaway Name</label>
              <input type="text"  onChange={(e)=>setName(e.target.value)} placeholder="Enter Giveaway Name" />
            </div>
          </div>
          <div class="inputRow">
            <div class="input">
              <label for="">Company Name</label>
              <input type="text" onChange={(e)=>setCompName(e.target.value)} placeholder="Enter Company Name" />
            </div>
          </div>
          <div class="inputRow">
            <div class="input">
              <label for="">What You Are Giving</label>
              <input type="text" onChange={(e)=>setWG(e.target.value)} placeholder="Enter Your Email Address" />
            </div>
          </div>
          <div class="inputRow">
            <div class="input">
              <label for="">Total Value</label>
              <input type="number" onChange={(e)=>setValue(e.target.value)} placeholder="Enter Total Value" />
            </div>
          </div>
          <div class="inputRow Date">
            <div class="input">
              <label for="">Start Date</label>
              <input type="date" onChange={(e)=>setStartDate(e.target.value)} placeholder="11-12-2023" />
            </div>
            <div class="input">
              <label for="">Valid Till</label>
              <input type="date" onChange={(e)=>setEndDate(e.target.value)} placeholder="11-12-2023" />
            </div>
          </div>
          <div class="inputRow">
            <div class="input">
              <label for="">Terms And Conditions</label>
              <textarea
              onChange={(e)=>setTerms(e.target.value)}
                type="text"
                placeholder="Write Your Term’s and Conditions"
              ></textarea>
            </div>
          </div>
          <div class="inputRow">
            <div class="input">
              <label for="">Upload Your Logo Or Photo</label>
              <div class="upload">
                <img src={Upload} alt="" />
                <input type="file" name='upload' onChange={(e)=>setfile(e.target.files[0])} placeholder="Upload File or Drag & Drop" />
              </div>
            </div>
          </div>
          <button class="btn" onClick={submit}>Submit</button>
        </form>
      </div>
    </section>
    <section class="section2Giveaway">
        <div class="container">
            <h2>How To Create Giveaway</h2>
            <p class="simpleParagraph"> <img src={Star} alt="" />Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <p class="simpleParagraph"><img src={Star} alt="" />Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy </p>
            <p class="simpleParagraph"><img src={Star} alt="" />Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </p>
            <p class="simpleParagraph"><img src={Star} alt="" />Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy  </p>
            <p class="simpleParagraph"><img src={Star} alt="" />Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  </p>
        </div>
    </section>
    <Footer/>

    </>
  )
}

