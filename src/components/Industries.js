import React from "react";
import Healthcare from "../Img/Industries/healthcare.png";
import Financial from "../Img/Industries/financial.png";
import Federal from "../Img/Industries/federal.png";
import Energy from "../Img/Industries/energy.png";
import Academia from "../Img/Industries/academia.png";
import Technology from "../Img/Industries/technology.png";
import Manufacturing from "../Img/Industries/manufacturing.png";
import Venture from "../Img/Industries/venture.png";
const Industries = () => {
  const Hover = (id)=>{
    document.getElementById(`${id}`).style.background = "transparent"
  }
  const UnHover = (id)=>{
    document.getElementById(`${id}`).style.background = "#0EA1EF26"
   
  }
  return (
    <section className="industries">

      <h3>Industries</h3>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been{" "}
      </p>
      <div className="cards">
        <div className="card" onMouseEnter={()=>Hover("hc")} onMouseLeave={()=>UnHover("hc")}>
          <div className="img" id="hc" >
            <img src={Healthcare} alt="" />
          </div>
            <p>Healthcare</p>
        </div>
        <div className="card" onMouseEnter={()=>Hover("fs")} onMouseLeave={()=>UnHover("fs")}>
          <div className="img" id="fs">
            <img src={Financial} alt="" />
          </div>
            <p>Financial Services </p>
        </div>
        <div className="card" onMouseEnter={()=>Hover("fsg")} onMouseLeave={()=>UnHover("fsg")}>
          <div className="img" id="fsg">
            <img src={Federal} alt="" />
          </div>
            <p>Federal & State Government </p>
        </div>
        <div className="card" onMouseEnter={()=>Hover("er")} onMouseLeave={()=>UnHover("er")}>
          <div className="img" id="er">
            <img src={Energy} alt="" />
          </div>
            <p>Energy & Resources </p>
        </div>
        <div className="card" onMouseEnter={()=>Hover("ac")} onMouseLeave={()=>UnHover("ac")}>
          <div className="img" id="ac">
            <img src={Academia} alt="" />
          </div>
            <p>Academia </p>
        </div>
        <div className="card" onMouseEnter={()=>Hover("tt")} onMouseLeave={()=>UnHover("tt")}>
          <div className="img lh" id="tt">
            <img src={Technology} alt="" />
          </div>
            <p>
              Technology & <br />
              Telecommunications{" "}
            </p>
        </div>
        <div className="card" onMouseEnter={()=>Hover("mt")} onMouseLeave={()=>UnHover("mt")}>
          <div className="img lh" id="mt">
            <img src={Manufacturing} alt="" />
          </div>
            <p>
              Manufacturing, Transport <br />& Logistics{" "}
            </p>
        </div>
        <div className="card" onMouseEnter={()=>Hover("vc")} onMouseLeave={()=>UnHover("vc")}>
          <div className="img lh" id="vc">
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
