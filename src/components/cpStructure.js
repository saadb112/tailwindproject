import React from "react";

const CpStructure = () => {
 
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
            <div className="img">Public Companies
            <p className="paragraph">Lorem Ipsum is simply dummy text of the printing and</p></div>
            <div className="img" >Academia & Non-Profits
            
            <p className="paragraph">Lorem Ipsum is simply dummy text of the printing and</p>
            </div>
          </div>
          <div className="imgr2" >
            <div className="img">Venture Capital
            <p className="paragraph">Lorem Ipsum is simply dummy text of the printing and</p>
            </div>
            <div className="img" >Private Equity
            <p className="paragraph">
            Lorem Ipsum is simply dummy text of the printing and
            </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CpStructure;
