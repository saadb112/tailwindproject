import React from "react";
import ExpImg from "../Img/expertise.png";
import Left from "../Img/arrowleft.png";
import Right from "../Img/arrowright.png";
const Expertise = () => {
  
  const Hover = ()=>{

    document.getElementById("slidingbtn").style.marginTop= "130px"
    document.getElementById("r1").style.top= "0"
    document.getElementById("r3").style.top= "0"
  }
  const Unhover = ()=>{
    document.getElementById("slidingbtn").style.marginTop= "54px"
    document.getElementById("r1").style.top= "-68px"
    document.getElementById("r3").style.top= "-68px"
  }
  return (
    <section className="expertise">
      <div className="row">
        <div className="r1" >
          <img src={ExpImg} alt="" />
        </div>
        <div className="r2">
          <h2>Expertise</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been{" "}
          </p>
        </div>
      </div>
      <div className="mainDiv">
        <div className="gradient">
          <div className="imgs" >
            <div className="r1" id="r1" onMouseEnter={()=>document.getElementById("r1").style.top= "7px"} onMouseLeave={()=>document.getElementById("r1").style.top= "-68px"}>
              <h3>Innovation</h3>
              <p id="paragraph1">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div className="r2" onMouseEnter={Hover} onMouseLeave={Unhover} >
              <h3>Data & Analytics</h3>
              <p id="paragraph2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div className="r3" id="r3" onMouseEnter={()=>document.getElementById("r3").style.top= "7px"} onMouseLeave={()=>document.getElementById("r3").style.top= "-68px"}>
              <h3>Risk Management</h3>
              <p id="paragraph3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
          <div className="slidingbtn" id="slidingbtn">
            <img src={Left} alt="" />
            <div className="centerbtn">
              <div className="circle">
                <div></div>
              </div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
            <img src={Right} alt="" />
          </div>
        </div>
      </div>
      {/* <div className="background">
        <div className="bg2">
          
        </div>
      </div> */}
    </section>
  );
};

export default Expertise;
