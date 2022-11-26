import React from "react";
import User from "../Img/Contact/user.png";
import Email from "../Img/Contact/email.png";
import Location from "../Img/Contact/location.png";
const Contact = () => {
  return (
    <section className="contact">
      <div className="row">
        <div className="r1">
          <h3>Contact Us</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been{" "}
          </p>

          <form action="">
            <div className="inputrow">
              <div className="input">
                <p>
                  <img src={User} alt="" /> First Name
                </p>
                <input type="text" placeholder="Enter Your First Name" />
              </div>
              <div className="input">
                <p>
                  <img src={User} alt="" /> Last Name
                </p>

                <input type="text" placeholder="Enter Your Last Name" />
              </div>
            </div>
            <div className="inputrow">
              <div className="input Wlong">
                <p>
                  <img src={Email} alt=""  /> Email
                </p>
                <input type="text" placeholder="Enter Your Email"/>
              </div>
            </div>
            <div className="inputrow">
              <div className="input Wlong">
                <p>
                  <img src={Email} alt="" /> Message
                </p>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Write Message Here"
                ></textarea>
              </div>
            </div>
            <button>Contact Us</button>
          </form>
        </div>
        <div className="r1 r2">
          <h3>Office Locations</h3>
          <div className="location">
            <div className="icon">
              <img src={Location} alt="" />
            </div>
            <p>
            Nashville Office 10 Burton Hills Blvd Nashville, TN 37215
            </p>
          </div>
          <div className="location">
            <div className="icon">
              <img src={Location} alt="" />
            </div>
            <p>
            Washington, DC Office 
1875 K St NW
Washington, DC 20006
            </p>
          </div>
          <div className="location">
            <div className="icon">
              <img src={Location} alt="" />
            </div>
            <p>
            Quebec City, Canada Office 
2828 Bd Laurier
Québec, QC G1V 0B9, Canada

            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
