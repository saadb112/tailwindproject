import React, { useState } from "react";
import Fb from "../Img/fb.png" 
import Linkedin from "../Img/linkedin.png" 
import Twitter from "../Img/twitter.png" 
import Insta from "../Img/insta.png" 

const Peoples = () => {
  const [data, setdata] = useState("")
  const [data2, setdata2] = useState("")
  const [data3, setdata3] = useState("")
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
            <h2>People</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been
            </p>
            <div className="row">
                <div className="r1">
                    <div className="img" onMouseEnter={Hover} onMouseLeave={UnHover}>{data}</div>
                    <p>Scott Blanchette </p>
                    <div className="socialicons">
                        <img src={Fb} alt="" />
                        <img src={Insta} alt="" />
                        <img src={Twitter} alt="" />
                        <img src={Linkedin} alt="" />
                    </div>
                </div>
                <div className="r1">
                <div className="img img2" onMouseEnter={()=>setdata2("Lorem Ipsum is simply dummy text")} onMouseLeave={()=>setdata2("")}>{data2}</div>
                    <p>Norbert Thomas </p>
                    <div className="socialicons">
                        <img src={Fb} alt="" />
                        <img src={Insta} alt="" />
                        <img src={Twitter} alt="" />
                        <img src={Linkedin} alt="" />
                    </div>
                </div>
                <div className="r1">
                <div className="img img3" onMouseEnter={()=>setdata3("Lorem Ipsum is simply dummy text")} onMouseLeave={()=>setdata3("")}>{data3}</div>
                    <p>Ralph Worthington </p>
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
