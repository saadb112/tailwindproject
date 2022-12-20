import React, { useEffect, useState } from "react";
import Logo from "../Img/logo.png";
import Signup from "../Img/signup.png";
import Enter from "../Img/enter.png";
import Win from "../Img/win.png";
import Daily from "../Img/QuickCase/daily.png";
import Winner from "../Img/QuickCase/winner.png";
import Monthly from "../Img/QuickCase/user.png";
import User from "../Img/QuickCase/monthly.png";
import Annually from "../Img/QuickCase/annually.png";
import LeftBtn from "../Img/LeftBtn.png";
import RightBtn from "../Img/rightBtn.png";
import DownArrow from "../Img/downArrow.png";
import Coinbase from "../Img/coinbase.png";
import Slack from "../Img/slack.png";
import Zoom from "../Img/zoom.png";
import Freshworks from "../Img/freshworks.png";
import Spotify from "../Img/spotify.png";
import FbVote from "../Img/FbVote.png";
import TwVote from "../Img/TwVote.png";
import IgVote from "../Img/IgVote.png";
import Calender from "../Img/calendar.png";
import Giveaway from "../Img/giveaway.png";
import CalenderWhite from "../Img/calenderWhite.png";
import User3 from "../Img/user3.png";
import User2 from "../Img/user2.png";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function Home () {
  
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
  
  const [prevCount, setprevCount] = useState(-1)
  const [nextCount, setnextCount] = useState(4)
  const [cardLeft, setcardLeft] = useState(0);

const mobilewidth = ()=>{
  if(window.innerWidth <= 768 && window.innerWidth > 545){
    setnextCount(2)
    console.log(window.innerWidth)
  }else if(window.innerWidth <= 545){
    setnextCount(1)
    console.log(window.innerWidth)

  }
}
  useEffect(() => {
    mobilewidth()
  }, [window.innerWidth])
  
  const CardSlideLeft = () => {
    if (cardLeft == 0) {
      return;
    } else {
      setcardLeft(cardLeft + 41.5);
      setnextCount(nextCount - 1)
      setprevCount(prevCount - 1)
    }
  };
  const CardSlideRight = () => {
    if (window.innerWidth > 768 && cardLeft == -166 || window.innerWidth <= 545 && cardLeft == -290.5 || window.innerWidth <=768 && cardLeft == -249 && window.innerWidth >545) {
      return;
    } else {
      setcardLeft(cardLeft - 41.5);
      setnextCount(nextCount + 1)
      setprevCount(prevCount + 1)
    }

    // CardsSlider[NextSLiderCount].style.visibility = "hidden"
    // CardsSlider[PrevSLiderCount].style.visibility = "hidden"
  };

  return (
    <>
      <section class="Home">
       <Navbar/>
        <header>
          <nav>
            <div class="logo navdiv">
              <img src={Logo} alt="" />
              <p>The Quick Rich</p>
            </div>
            <div class="Links">
              <a href="" class="simpleParagraph">
                Sponsor
              </a>
              <a href="" class="simpleParagraph">
                About
              </a>
              <div class="giveaway">
                <p>Given Away So Far</p>
                <h1>$22,785</h1>
              </div>
              <a href="" class="simpleParagraph">
                FAQ
              </a>
              <a href="" class="simpleParagraph">
                Contact
              </a>
            </div>
            <button class="btn">Login / Signup</button>
          </nav>
        </header>

        <div class="container">
          <div class="Tagline">
            <h3>EXCLUSIVE GIVEAWAY</h3>
            <div class="line"></div>
          </div>
          <h2>MEGA JACKPOT</h2>
          <p>Power up for a chance to win in this electrafying instant game!</p>
          <button class="btn">Get Rich</button>
        </div>
      </section>
      <section class="section2">
        <div class="main">
          <div class="text">
            <h2>How We Work</h2>
            <p class="simpleParagraph">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
          </div>
          <div class="cards">
            <div class="card">
              <img src={Signup} alt="" />
              <h2>Sign Up</h2>
              <p class="simpleParagraph">
                Lorem Ipsum is simply dummy text of the printing and
              </p>
            </div>
            <div class="card">
              <img src={Enter} alt="" />
              <h2>Enter</h2>
              <p class="simpleParagraph">
                Lorem Ipsum is simply dummy text of the printing and
              </p>
            </div>
            <div class="card">
              <img src={Win} alt="" />
              <h2>Win</h2>
              <p class="simpleParagraph">
                Lorem Ipsum is simply dummy text of the printing and
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="section3 black">
        <div class="heading">
          <h2 class="simpleHeading">Quick Cash</h2>
          <p class="simpleParagraph">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever
          </p>
        </div>
        <div class="cards">
          <div class="card">
            <img src={Daily} alt="" />
            <h2>Daily</h2>
            <p class="simpleParagraph">Next Payout</p>
            <div class="time">
              <div class="r1">
                <div class="circle">00</div>
                <p class="simpleParagraph">day</p>
              </div>
              <p class="semicolon">:</p>

              <div class="r1">
                <div class="circle">00</div>
                <p class="simpleParagraph">Hr</p>
              </div>
              <p class="semicolon">:</p>

              <div class="r1">
                <div class="circle">04</div>
                <p class="simpleParagraph">Min</p>
              </div>
            </div>
            <button class="btn">Buy Now</button>
          </div>
          <div class="card">
            <img src={Winner} alt="" />
            <h2>Winner</h2>
            <p class="simpleParagraph">$900.00</p>
            <div class="user">
              <img src={User} alt="" />
              <div class="text">
                <h2>Name</h2>
                <p>@username</p>
              </div>
            </div>
            <p class="simpleParagraph">Next Draw 11 Nov 2022</p>
          </div>
          <div class="card">
            <img src={Monthly} alt="" />
            <h2>Monthly</h2>
            <p class="simpleParagraph">Next Payout</p>
            <div class="time">
              <div class="r1">
                <div class="circle">23</div>
                <p class="simpleParagraph">day</p>
              </div>
              <p class="semicolon">:</p>

              <div class="r1">
                <div class="circle">09</div>
                <p class="simpleParagraph">Hr</p>
              </div>
              <p class="semicolon">:</p>

              <div class="r1">
                <div class="circle">43</div>
                <p class="simpleParagraph">Min</p>
              </div>
            </div>
            <button class="btn">Buy Now</button>
          </div>
          <div class="card">
            <img src={Annually} alt="" />
            <h2>Annually</h2>
            <p class="simpleParagraph">Next Payout</p>
            <div class="time">
              <div class="r1">
                <div class="circle">325</div>
                <p class="simpleParagraph">day</p>
              </div>
              <p class="semicolon">:</p>
              <div class="r1">
                <div class="circle">09</div>
                <p class="simpleParagraph">Hr</p>
              </div>
              <p class="semicolon">:</p>

              <div class="r1">
                <div class="circle">43</div>
                <p class="simpleParagraph">Min</p>
              </div>
            </div>
            <button class="btn">Buy Now</button>
          </div>
        </div>
      </section>

      <section class="section4">
        <div class="buttons">
          <img src={LeftBtn} alt="" id="leftbtn" onClick={SlideLeft} />
          <img src={RightBtn} alt="" id="rightbtn" onClick={SlideRight} />
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
      <section class="section3 section5">
        <div class="heading">
          <h2 class="simpleHeading">Sponsored Giveaways</h2>
          <div class="right">
            <div class="optionsMain">
              <h1>Category</h1>
              <div class="dropdown">
                <div class="select">
                  <p class="simpleParagraph">Select</p>
                  <img src={DownArrow} alt="" />
                </div>
              </div>
            </div>
            <div class="optionsMain">
              <h1>Amount</h1>
              <div class="dropdown">
                <div class="select">
                  <p class="simpleParagraph">$0.00</p>
                  <img src={DownArrow} alt="" />
                </div>
              </div>
            </div>
            <div class="optionsMain">
              <h1>End Time Date</h1>
              <div class="dropdown">
                <div class="select">
                  <p class="simpleParagraph">DD/MM/YYYY</p>
                  <img src={DownArrow} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="slider">
          <div class="buttons">
            <img
              src={LeftBtn}
              alt=""
              id="CardLeftbtn"
              onClick={CardSlideLeft}
            />
            <img
              src={RightBtn}
              alt=""
              id="CardRightbtn"
              onClick={CardSlideRight}
            />
          </div>
          <div class="cards" id="card" >
         
            <div class={`card CardSlider ${ (prevCount == 0) ? "hidden" : "card"}`} style={{ left: `${cardLeft}rem` } }>
              <div class="top">$2000</div>
              <div class="bottom">
                <h2>Vacation</h2>
                <p class="simpleParagraph">
                  Lorem Ipsum is simply dummy text of the printing
                </p>
                <button class="btn">Buy Now</button>
              </div>
            </div>
            <div class={`card CardSlider ${ (prevCount == 1 || nextCount == 1) ? "hidden" : "card"}`} style={{ left: `${cardLeft}rem` }}>
              <div class="top">$2000</div>
              <div class="bottom">
                <h2>Vacation</h2>
                <p class="simpleParagraph">
                  Lorem Ipsum is simply dummy text of the printing
                </p>
                <button class="btn">Buy Now</button>
              </div>
            </div>
            <div class={`card CardSlider ${ (prevCount == 2 || nextCount == 2) ? "hidden" : "card"}`}style={{ left: `${cardLeft}rem` }}>
              <div class="top">$2000</div>
              <div class="bottom">
                <h2>Vacation</h2>
                <p class="simpleParagraph">
                  Lorem Ipsum is simply dummy text of the printing
                </p>
                <button class="btn">Buy Now</button>
              </div>
            </div>
            <div class={`card CardSlider ${ (prevCount == 3 || nextCount == 3) ? "hidden" : "card"}`} style={{ left: `${cardLeft}rem` }}>
              <div class="top">$2000</div>
              <div class="bottom">
                <h2>Vacation</h2>
                <p class="simpleParagraph">
                  Lorem Ipsum is simply dummy text of the printing
                </p>
                <button class="btn">Buy Now</button>
              </div>
            </div>
            <div class={`card CardSlider ${ (prevCount == 4 || nextCount == 4) ? "hidden" : "card"}`} style={{ left: `${cardLeft}rem` }}>
              <div class="top">$2000</div>
              <div class="bottom">
                <h2>Vacation</h2>
                <p class="simpleParagraph">
                  Lorem Ipsum is simply dummy text of the printing
                </p>
                <button class="btn">Buy Now</button>
              </div>
            </div>
            <div class={`card CardSlider ${ (prevCount == 5 || nextCount == 5) ? "hidden" : "card"}`} style={{ left: `${cardLeft}rem` }}>
              <div class="top">$2000</div>
              <div class="bottom">
                <h2>Vacation</h2>
                <p class="simpleParagraph">
                  Lorem Ipsum is simply dummy text of the printing
                </p>
                <button class="btn">Buy Now</button>
              </div>
            </div>
            <div class={`card CardSlider ${ (nextCount == 6 || nextCount == 6) ? "hidden" : "card"}`} style={{ left: `${cardLeft}rem` }}>
              <div class="top">$2000</div>
              <div class="bottom">
                <h2>Vacation</h2>
                <p class="simpleParagraph">
                  Lorem Ipsum is simply dummy text of the printing
                </p>
                <button class="btn">Buy Now</button>
              </div>
            </div>
            <div class={`card CardSlider ${ (nextCount == 7 || nextCount == 7) ? "hidden" : "card"}`} style={{ left: `${cardLeft}rem` }}>
              <div class="top">$2000</div>
              <div class="bottom">
                <h2>Vacation</h2>
                <p class="simpleParagraph">
                  Lorem Ipsum is simply dummy text of the printing
                </p>
                <button class="btn">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
        <button class="btn viewall">View All</button>
      </section>
      <section class="section3 section6">
        <div class="heading">
          <h2 class="simpleHeading">Our Sponsors</h2>
          <p class="simpleParagraph">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever
          </p>
        </div>
        <div class="cards">
          <div class="card">
            <img src={Coinbase} alt="" />
          </div>
          <div class="card">
            <img src={Slack} alt="" />
          </div>
          <div class="card">
            <img src={Zoom} alt="" />
          </div>
          <div class="card">
            <img src={Freshworks} alt="" />
          </div>
          <div class="card">
            <img src={Spotify} alt="" />
          </div>
          <div class="card">
            <img src={Coinbase} alt="" />
          </div>
          <div class="card">
            <img src={Freshworks} alt="" />
          </div>
        </div>
      </section>

      <section class="section3 section7">
        <div class="heading">
          <h2 class="simpleHeading">Latest Giveaway Result</h2>
          <p class="simpleParagraph">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever
          </p>
        </div>
        <div class="container">
          <div class="r1">
            <div class="left">
              <div class="top">
                <div class="left">
                  <h2>Username</h2>
                  <p class="simpleParagraph">
                    <img src={Giveaway} alt="" /> Giveaway Name
                  </p>
                </div>
                <div class="right">
                  <p class="simpleParagraph">
                    <img src={Calender} alt="" />
                    13 Oct 2022
                  </p>
                  <h2>Won $1500</h2>
                </div>
              </div>
              <div class="bottom">
                <div class="left">
                  <h2>Votes</h2>
                  <div class="votes">
                    <a href="" class="icon simpleParagraph">
                      <img src={FbVote} alt="" />
                      09
                    </a>
                    <a href="" class="icon simpleParagraph">
                      <img src={IgVote} alt="" />
                      09
                    </a>
                    <a href="" class="icon simpleParagraph">
                      <img src={TwVote} alt="" />
                      09
                    </a>
                  </div>
                </div>
                <div class="right">
                  <h2>Total Votes :</h2>
                  <p class="simpleParagraph">235</p>
                </div>
              </div>
            </div>
            <div class="mainRight">
              <div class="top">
                <h2>Next Draw</h2>
                <p class="simpleParagraph">
                  <img src="./Img/calenderWhite.png" alt="" />
                  13 Oct 2022
                </p>
                <p class="simpleParagraph">
                  <img src="./Img/calenderWhite.png" alt="" />
                  15 Oct 2022
                </p>
                <a href="">View All</a>
              </div>
              <div class="bottom">
                <p class="simpleParagraph">Potential Winnings</p>
                <h2>$1500</h2>
              </div>
            </div>
          </div>
          <div class="r1">
            <div class="left">
              <div class="top">
                <div class="left">
                  <h2>Username</h2>
                  <p class="simpleParagraph">
                    <img src="./Img/giveaway.png" alt="" /> Giveaway Name
                  </p>
                </div>
                <div class="right">
                  <p class="simpleParagraph">
                    <img src="./Img/calendar.png" alt="" />
                    13 Oct 2022
                  </p>
                  <h2>Won $1500</h2>
                </div>
              </div>
              <div class="bottom">
                <div class="left">
                  <h2>Votes</h2>
                  <div class="votes">
                    <a href="" class="icon simpleParagraph">
                      <img src={FbVote} alt="" />
                      09
                    </a>
                    <a href="" class="icon simpleParagraph">
                      <img src={TwVote} alt="" />
                      09
                    </a>
                    <a href="" class="icon simpleParagraph">
                      <img src={IgVote} alt="" />
                      09
                    </a>
                  </div>
                </div>
                <div class="right">
                  <h2>Total Votes :</h2>
                  <p class="simpleParagraph">235</p>
                </div>
              </div>
            </div>
            <div class="mainRight">
              <div class="top">
                <h2>Next Draw</h2>
                <p class="simpleParagraph">
                  <img src={CalenderWhite} alt="" />
                  13 Oct 2022
                </p>
                <p class="simpleParagraph">
                  <img src={CalenderWhite} alt="" />
                  15 Oct 2022
                </p>
                <a href="">View All</a>
              </div>
              <div class="bottom">
                <p class="simpleParagraph">Potential Winnings</p>
                <h2>$1500</h2>
              </div>
            </div>
          </div>
          <div class="r1">
            <div class="left">
              <div class="top">
                <div class="left">
                  <h2>Username</h2>
                  <p class="simpleParagraph">
                    <img src={Giveaway} alt="" /> Giveaway Name
                  </p>
                </div>
                <div class="right">
                  <p class="simpleParagraph">
                    <img src={Calender} alt="" />
                    13 Oct 2022
                  </p>
                  <h2>Won $1500</h2>
                </div>
              </div>
              <div class="bottom">
                <div class="left">
                  <h2>Votes</h2>
                  <div class="votes">
                    <a href="" class="icon simpleParagraph">
                      <img src={FbVote} alt="" />
                      09
                    </a>
                    <a href="" class="icon simpleParagraph">
                      <img src={TwVote} alt="" />
                      09
                    </a>
                    <a href="" class="icon simpleParagraph">
                      <img src={IgVote} alt="" />
                      09
                    </a>
                  </div>
                </div>
                <div class="right">
                  <h2>Total Votes :</h2>
                  <p class="simpleParagraph">235</p>
                </div>
              </div>
            </div>
            <div class="mainRight">
              <div class="top">
                <h2>Next Draw</h2>
                <p class="simpleParagraph">
                  <img src={CalenderWhite} alt="" />
                  13 Oct 2022
                </p>
                <p class="simpleParagraph">
                  <img src={CalenderWhite} alt="" />
                  15 Oct 2022
                </p>
                <a href="">View All</a>
              </div>
              <div class="bottom">
                <p class="simpleParagraph">Potential Winnings</p>
                <h2>$1500</h2>
              </div>
            </div>
          </div>
          <button class="btn">
            <Link to="/pastWinners">View All</Link>
          </button>
        </div>
      </section>

      <section class="section3 section8">
        <div class="heading">
          <h2 class="simpleHeading">Leader Board</h2>
          <p class="simpleParagraph">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever
          </p>
        </div>

        <div class="leaderBoard">
          <a href="./LeaderBoard.html" class="card">
            <div class="top">
              <div class="profile">
                <img src={User} alt="" />
                <div class="text">
                  <h2>Name</h2>
                  <p class="simpleParagraph">@Username</p>
                </div>
              </div>
              <h2>#1</h2>
            </div>
            <div class="middle">
              <div class="r1">
                <h3>458</h3>
                <p class="simpleParagraph">Total Points</p>
              </div>
              <div class="r1">
                <h3>26</h3>
                <p class="simpleParagraph">Total Votes</p>
              </div>
              <div class="r1">
                <h3>12</h3>
                <p class="simpleParagraph">Total Winnings</p>
              </div>
            </div>
            <div class="bottom">Level Name</div>
          </a>
          <a href="./LeaderBoard.html" class="card">
            <div class="top">
              <div class="profile">
                <img src={User3} alt="" />
                <div class="text">
                  <h2>Name</h2>
                  <p class="simpleParagraph">@Username</p>
                </div>
              </div>
              <h2>#2</h2>
            </div>
            <div class="middle">
              <div class="r1">
                <h3>458</h3>
                <p class="simpleParagraph">Total Points</p>
              </div>
              <div class="r1">
                <h3>26</h3>
                <p class="simpleParagraph">Total Votes</p>
              </div>
              <div class="r1">
                <h3>12</h3>
                <p class="simpleParagraph">Total Winnings</p>
              </div>
            </div>
            <div class="bottom">Level Name</div>
          </a>
          <a href="./LeaderBoard.html" class="card">
            <div class="top">
              <div class="profile">
                <img src={User2} alt="" />
                <div class="text">
                  <h2>Name</h2>
                  <p class="simpleParagraph">@Username</p>
                </div>
              </div>
              <h2>#3</h2>
            </div>
            <div class="middle">
              <div class="r1">
                <h3>458</h3>
                <p class="simpleParagraph">Total Points</p>
              </div>
              <div class="r1">
                <h3>26</h3>
                <p class="simpleParagraph">Total Votes</p>
              </div>
              <div class="r1">
                <h3>12</h3>
                <p class="simpleParagraph">Total Winnings</p>
              </div>
            </div>
            <div class="bottom">Level Name</div>
          </a>
        </div>
        <button class="btn">
          <a href="./LeaderBoard.html"> View All</a>
        </button>
      </section>
      <Footer/>

 
    </>
  );
};


