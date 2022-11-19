import React, { useState } from "react";
import Curve from "../Img/curve.png";
import Pp1 from "../Img/pp1.png"
import Pp2 from "../Img/pp2.png"
import Pp3 from "../Img/pp3.png"
import Fb from "../Img/fb.png" 
import Linkedin from "../Img/linkedin.png" 
import Twitter from "../Img/twitter.png" 
import Insta from "../Img/insta.png" 

const Peoples = () => {
  const [data, setdata] = useState("")
  const Hover = ()=>{
    setdata("Lorem Ipsum is simply dummy text")
  }
  const UnHover = ()=>{
    setdata("")
  }
  return (
    <>
      <section className="peoples">
        <div className="gradient">
          <div className="content">
            <h2>Peoples</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been
            </p>
            <div className="row">
                <div className="r1">
                    <div className="img" onMouseEnter={Hover} onMouseLeave={UnHover}>{data}</div>
                    <h3>Scott Blanchette </h3>
                    <div className="socialicons">
                        <img src={Fb} alt="" />
                        <img src={Insta} alt="" />
                        <img src={Twitter} alt="" />
                        <img src={Linkedin} alt="" />
                    </div>
                </div>
                <div className="r1">
                    <img src={Pp2} alt="" />
                    <h3>Norbert Thomas </h3>
                    <div className="socialicons">
                        <img src={Fb} alt="" />
                        <img src={Insta} alt="" />
                        <img src={Twitter} alt="" />
                        <img src={Linkedin} alt="" />
                    </div>
                </div>
                <div className="r1">
                    <img src={Pp3} alt="" />
                    <h3>Ralph Worthington </h3>
                    <div className="socialicons">
                        <img src={Fb} alt="" />
                        <img src={Insta} alt="" />
                        <img src={Twitter} alt="" />
                        <img src={Linkedin} alt="" />
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Peoples;
