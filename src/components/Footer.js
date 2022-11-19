import React from "react";
import Logo from "../Img/whitelogo.png";
import Phone from "../Img/phone.png";
import Email from "../Img/Contact/email.png";
import Fb from "../Img/footer/fb.png";
import Insta from "../Img/footer/insta.png";
import Twitter from "../Img/footer/twitter.png";
import Linkedin from "../Img/footer/linkedin.png";
import Youtube from "../Img/footer/youtube.png";
import Pinterest from "../Img/footer/pinterest.png";
import Larrow from "../Img/Larrow.png";
import Footerimg from "../Img/footer.png";
const Footer = () => {
  return (
    <footer>
      <div className="row">
        <div className="r1">
          <img src={Logo} alt="" />
          <div className="innerRow">
            <img src={Phone} alt="" /> <p> (126) 123 1234</p>
          </div>
          <div className="innerRow">
            <img src={Email} alt="" /><p> info@example.com</p>
          </div>
          <div className="innerRow icons">
            <img src={Fb} alt="" />
            <img src={Insta} alt="" />
            <img src={Twitter} alt="" />
            <img src={Linkedin} alt="" />
            <img src={Youtube} alt="" />
            <img src={Pinterest} alt="" />
          </div>
          <div className="innerRow input">
            <input type="text" placeholder="Enter Your Email" />
            <div className="icon">
                <img src={Larrow} alt="" />
            </div>
          </div>
        </div>
        <div className="r1">
            <p>Expertise</p>
            <ul>
                <li><a href=""> Strategetic Plan</a></li>
                <li><a href=""> Performance Improvement</a></li>
                <li><a href=""> Digital Transaformation</a></li>
                <li><a href=""> Data & Analytics</a></li>
                <li><a href=""> Innovation</a></li>
                <li><a href=""> technology Service & Cloud</a></li>
            </ul>
        </div>
        <div className="r1">
            <p>Capital Structure</p>
            <ul>
                <li><a href=""> Public Companies</a></li>
                <li><a href=""> Private Equity</a></li>
                <li><a href=""> Venture Capital</a></li>
                <li><a href=""> Federal & State Government</a></li>
                <li><a href=""> Academia and Non Profits</a></li>
           
            </ul>
        </div>
        <div className="r1">
            <p>Useful Links</p>
            <ul>
                <li><a href=""> About Us</a></li>
                <li><a href=""> Careers</a></li>
                <li><a href=""> Terms & Conditions</a></li>
                <li><a href=""> Careers</a></li>
                <li><a href=""> Careers</a></li>
            </ul>
        </div>
        <div className="r1">
            <img src={Footerimg} alt="" />
        </div>
      </div>
      <div className="bottom">
      © 2022 Company Name. All rights reserved. 
      </div>
    </footer>
  );
};

export default Footer;
