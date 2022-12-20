import React from 'react'
import Fb from "../Img/icons/fb.png";
import Tw from "../Img/icons/tw.png";
import Ig from "../Img/icons/ig.png";
import Youtube from "../Img/icons/youtube.png";
import Logowhite from "../Img/logoWhite.png";

export default function Footer  ()  {
  return (
    <footer>
    <div class="container">
      <div class="r1">
        <div class="logo">
          <img src={Logowhite} alt="" />
          <p>The Quick Rich</p>
        </div>
        <p class="simpleParagraph">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been
        </p>
        <div class="socialIcons">
          <img src={Fb} alt="" />
          <img src={Tw} alt="" />
          <img src={Ig} alt="" />
          <img src={Youtube} alt="" />
        </div>
      </div>
      <div class="r1">
        <h2>Links</h2>
        <ul>
          <li class="simpleParagraph">Home</li>
          <li class="simpleParagraph">About</li>
          <li class="simpleParagraph">Quick Cash</li>
          <li class="simpleParagraph">FAQ</li>
          <li class="simpleParagraph">Contact</li>
        </ul>
      </div>
      <div class="r1">
        <h2>Utility Pages</h2>
        <ul>
          <li class="simpleParagraph">Sponsor a Giveaway</li>
          <li class="simpleParagraph">Create a Contest</li>
          <li class="simpleParagraph">Enter a Cash Forum</li>
          <li class="simpleParagraph">Free Financial Guidance</li>
          <li class="simpleParagraph">Beg For Money</li>
        </ul>
      </div>
      <div class="r1">
        <h2>Newsletter</h2>
        <input type="text" placeholder="Enter Your Email Address" />
        <button class="submit">Submit</button>
      </div>
    </div>
    <div class="bottom">© 2022 The Quick Rich. All rights reserved</div>
  </footer>
  )
}

