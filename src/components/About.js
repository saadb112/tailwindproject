import React from "react";
import Aboutimg from "../Img/about.png"
const About = () => {
  return (
    <section className="about">
      <div className="row">
        <div className="r1">
          <h2>About Us</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            <br />
            <br />
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to
          </p>
        </div>
        <div className="r2">
            <img src={Aboutimg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default About;
