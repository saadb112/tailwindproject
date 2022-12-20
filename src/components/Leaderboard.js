import React, { useState } from 'react'
import Logo from "../Img/logo.png";
import LeftBtn from "../Img/LeftBtn.png";
import RightBtn from "../Img/rightBtn.png";
import Navbar from './Navbar';
import Footer from './Footer';

export default function Leaderboard  () {
    const [left, setleft] = useState(0);
    const SlideLeft = () => {
      if (left == 0) {
        return;
      } else {
        setleft(left + 192);
      }
    };
    const SlideRight = () => {
      if (left == -384) {
        return;
      } else {
        setleft(left - 192);
      }
    };
  return (
    <>
    <section class="Home LeaderBoard">
    <Navbar/>

     
      <header>
        <nav>
          <div class="logo navdiv">
            <img src={Logo} alt="" />
            <p>The Quick Rich</p>
          </div>
          <div class="Links">
            <a href="" class="simpleParagraph">Sponsor</a>
            <a href="" class="simpleParagraph">About</a>
            <div class="giveaway">
              <p>Given Away So Far</p>
              <h1>$22,785</h1>
            </div>
            <a href="" class="simpleParagraph">FAQ</a>
            <a href="" class="simpleParagraph">Contact</a>
          </div>
          <button class="btn">
            Login / Signup
          </button>
        </nav>
      </header>

      <div class="container">
       
        <h2>LEADER BOARD</h2>
        <p>Lorem Ipsum is simply dummy text of the printing </p>
        <button class="btn">Learn More</button>
      </div>
    </section>
<section class="section2Leaderboard">
  <h2>Leader Board</h2>
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever </p>
  <div class="container">

  {/* <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Points</th>
        <th>Rank</th>
        <th>Gift</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Name Here</td>
        <td>1516526</td>
        <td>01</td>
        <td>Car</td>
      </tr>
      <tr>
        <td>Name Here</td>
        <td>1516526</td>
        <td>01</td>
        <td>Car</td>
      </tr>
      <tr>
        <td>Name Here</td>
        <td>1516526</td>
        <td>01</td>
        <td>Car</td>
      </tr>
      <tr>
        <td>Name Here</td>
        <td>1516526</td>
        <td>01</td>
        <td>Car</td>
      </tr>
      <tr>
        <td>Name Here</td>
        <td>1516526</td>
        <td>01</td>
        <td>Car</td>
      </tr>
      <tr>
        <td>Name Here</td>
        <td>1516526</td>
        <td>01</td>
        <td>Car</td>
      </tr>
      <tr>
        <td>Name Here</td>
        <td>1516526</td>
        <td>01</td>
        <td>Car</td>
      </tr>
      <tr>
        <td>Name Here</td>
        <td>1516526</td>
        <td>01</td>
        <td>Car</td>
      </tr>
      <tr>
        <td>Name Here</td>
        <td>1516526</td>
        <td>01</td>
        <td>Car</td>
      </tr>
      <tr>
        <td>Name Here</td>
        <td>1516526</td>
        <td>01</td>
        <td>Car</td>
      </tr>
      <tr>
        <td>Name Here</td>
        <td>1516526</td>
        <td>01</td>
        <td>Car</td>
      </tr>
      <tr>
        <td>Name Here</td>
        <td>1516526</td>
        <td>01</td>
        <td>Car</td>
      </tr>
      <tr>
        <td>Name Here</td>
        <td>1516526</td>
        <td>01</td>
        <td>Car</td>
      </tr>
      <tr>
        <td>Name Here</td>
        <td>1516526</td>
        <td>01</td>
        <td>Car</td>
      </tr>
      <tr>
        <td>Name Here</td>
        <td>1516526</td>
        <td>01</td>
        <td>Car</td>
      </tr>
    </tbody>
  </table> */}

<div className="table">
  <div className="thead">
    <div className="tr">
      <div className="td">Name</div>
      <div className="td">Points</div>
      <div className="td">Rank</div>
      <div className="td">Gifts</div>
    </div>
  </div>
  <div className="tbody">
    <div className="tr">
      <div className="td">Name Here</div>
      <div className="td">1516526</div>
      <div className="td">01</div>
      <div className="td">Car</div>
    </div>
    <div className="tr">
      <div className="td">Name Here</div>
      <div className="td">1516526</div>
      <div className="td">01</div>
      <div className="td">Car</div>
    </div>
    <div className="tr">
      <div className="td">Name Here</div>
      <div className="td">1516526</div>
      <div className="td">01</div>
      <div className="td">Car</div>
    </div>
    <div className="tr">
      <div className="td">Name Here</div>
      <div className="td">1516526</div>
      <div className="td">01</div>
      <div className="td">Car</div>
    </div>
    <div className="tr">
      <div className="td">Name Here</div>
      <div className="td">1516526</div>
      <div className="td">01</div>
      <div className="td">Car</div>
    </div>
    <div className="tr">
      <div className="td">Name Here</div>
      <div className="td">1516526</div>
      <div className="td">01</div>
      <div className="td">Car</div>
    </div>
    <div className="tr">
      <div className="td">Name Here</div>
      <div className="td">1516526</div>
      <div className="td">01</div>
      <div className="td">Car</div>
    </div>
    <div className="tr">
      <div className="td">Name Here</div>
      <div className="td">1516526</div>
      <div className="td">01</div>
      <div className="td">Car</div>
    </div>
    <div className="tr">
      <div className="td">Name Here</div>
      <div className="td">1516526</div>
      <div className="td">01</div>
      <div className="td">Car</div>
    </div>
    <div className="tr">
      <div className="td">Name Here</div>
      <div className="td">1516526</div>
      <div className="td">01</div>
      <div className="td">Car</div>
    </div>
    <div className="tr">
      <div className="td">Name Here</div>
      <div className="td">1516526</div>
      <div className="td">01</div>
      <div className="td">Car</div>
    </div>
    <div className="tr">
      <div className="td">Name Here</div>
      <div className="td">1516526</div>
      <div className="td">01</div>
      <div className="td">Car</div>
    </div>
    <div className="tr">
      <div className="td">Name Here</div>
      <div className="td">1516526</div>
      <div className="td">01</div>
      <div className="td">Car</div>
    </div>
    <div className="tr">
      <div className="td">Name Here</div>
      <div className="td">1516526</div>
      <div className="td">01</div>
      <div className="td">Car</div>
    </div>
    <div className="tr">
      <div className="td">Name Here</div>
      <div className="td">1516526</div>
      <div className="td">01</div>
      <div className="td">Car</div>
    </div>
    <div className="tr">
      <div className="td">Name Here</div>
      <div className="td">1516526</div>
      <div className="td">01</div>
      <div className="td">Car</div>
    </div>
  </div>
</div>
</div>

</section>
<section class="section4">
  <div class="buttons">
    <img
      src={LeftBtn}
      alt=""
      id="leftbtn"
      onClick={SlideLeft}
    />
    <img
      src={RightBtn}
      alt=""
      id="rightbtn"
      onClick={SlideRight}
    />
  </div>
  <div class="slides">
    <div class="slide1" style={{ left: `${left}rem` }}>
      <h5 class="simpleHeading">A Surprise</h5>
      <h2>Awaits You</h2>
      <p class="simpleParagraph">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text
        ever
      </p>
      <button class="btn">Win This</button>
    </div>
    <div class="slide1" style={{ left: `${left}rem` }}>
      <h5 class="simpleHeading">A Surprise</h5>
      <h2>Awaits You</h2>
      <p class="simpleParagraph">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text
        ever
      </p>
      <button class="btn">Win This</button>
    </div>
    <div class="slide1" style={{ left: `${left}rem` }}>
      <h5 class="simpleHeading">A Surprise</h5>
      <h2>Awaits You</h2>
      <p class="simpleParagraph">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text
        ever
      </p>
      <button class="btn">Win This</button>
    </div>
  </div>
</section>
<Footer/>

    </>
  )
}
