import React from "react";
import Healthcare from "../Img/Industries/healthcare.png";
import Financial from "../Img/Industries/financial.png";
import Federal from "../Img/Industries/federal.png";
import Energy from "../Img/Industries/energy.png";
import Academia from "../Img/Industries/academia.png";
import Technology from "../Img/Industries/technology.png";
import Manufacturing from "../Img/Industries/manufacturing.png";
import Venture from "../Img/Industries/venture.png";
import Left from "../Img/left.png"
import Right from "../Img/right.png"
const Industries = () => {
  const Hover = ()=>{
    document.getElementById("img").style.background = "#0EA1EF26"
    console.log(document.getElementById("img").style.background)
  }
  const UnHover = ()=>{
    document.getElementById("img").style.background = "transparent"
    console.log(document.getElementById("img").style.background)
  }
  return (
    <section className="industries">

      <h3>Industries</h3>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been{" "}
      </p>
      <div className="cards">
        <div className="card" onMouseEnter={Hover} onMouseLeave={UnHover}>
          <div className="img" id="img" >
            <img src={Healthcare} alt="" />
          </div>
            <p>Healthcare</p>
        </div>
        <div className="card">
          <div className="img">
            <img src={Financial} alt="" />
          </div>
            <p>Financial Services </p>
        </div>
        <div className="card">
          <div className="img">
            <img src={Federal} alt="" />
          </div>
            <p>Federal & State Government </p>
        </div>
        <div className="card">
          <div className="img">
            <img src={Energy} alt="" />
          </div>
            <p>Energy & Resources </p>
        </div>
        <div className="card">
          <div className="img">
            <img src={Academia} alt="" />
          </div>
            <p>Academia </p>
        </div>
        <div className="card">
          <div className="img">
            <img src={Technology} alt="" />
          </div>
            <p>
              Technology & <br />
              Telecommunications{" "}
            </p>
        </div>
        <div className="card">
          <div className="img">
            <img src={Manufacturing} alt="" />
          </div>
            <p>
              Manufacturing, Transport <br />& Logistics{" "}
            </p>
        </div>
        <div className="card">
          <div className="img">
            <img src={Venture} alt="" />
          </div>
            <p>
              Venture Capital & Private <br />
              Equity{" "}
            </p>
        </div>

      {/* <div className="curves">
<img src={Left} alt="" />
<img src={Right} alt="" />
      </div> */}
        </div>
    </section>
  );
};

export default Industries;
