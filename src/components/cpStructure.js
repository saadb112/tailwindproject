import React, { useState } from "react";
import Cpstructure1 from "../Img/cpstructure1.png";
import Cpstructure2 from "../Img/cpstructure2.png";
import Cpstructure3 from "../Img/cpstructure3.png";
import Cpstructure4 from "../Img/cpstructure4.png";

const CpStructure = () => {
const [data, setdata] = useState("")
  const Hover = () => {
    setdata("Lorem Ipsum is simply dummy text of the printing and")
  };
  const UnHover = () => {
    setdata("")
  };
  return (
    <section className="cpstructure">
      <div className="row">
        <div className="r1">
          <h2>Capital Structure</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
          </p>
        </div>
        <div className="r2">
          <div className="imgr1">
            {/* <img src={Cpstructure1} alt=""  onMouseOver={Hover}/> */}
            <div className="img" onMouseEnter={Hover} onMouseLeave={UnHover} id="card">Public Companies
            <p id="paragraph">{data}</p></div>
            <div className="img">Academia & Non-Profits</div>
          </div>
          <div className="imgr2">
            <div className="img">Venture Capital</div>
            <div className="img">Private Equity</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CpStructure;
