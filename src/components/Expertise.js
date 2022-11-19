import React from "react";
import ExpImg from "../Img/expertise.png";
import Left from "../Img/arrowleft.png";
import Right from "../Img/arrowright.png";
const Expertise = () => {
  
  const Hover = ()=>{
    document.getElementById("paragraph").style.visibility = "visible"
  }
  const Unhover = ()=>{
    document.getElementById("paragraph").style.visibility = "hidden"
  }
  return (
    <section className="expertise">
      <div className="row">
        <div className="r1">
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
          <div className="imgs">
            <div className="r1">
              <h3>Innovation</h3>
            </div>
            <div className="r2" onMouseEnter={Hover} onMouseLeave={Unhover} >
              <h3>Data & Analytics</h3>
              <p id="paragraph">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div className="r3">
              <h3>Risk Management</h3>
            </div>
          </div>
          <div className="slidingbtn">
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
