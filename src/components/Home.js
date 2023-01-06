import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import Bg from "../img/main.jpg";
import Slider1 from "../img/bg1.jpg";
import Slider2 from "../img/bg2.jpg";
import Review1 from "../img/review1.jpg";
import Review2 from "../img/review2.jpg";
import Ho1 from "../img/ho1.jpg";
import Ho2 from "../img/ho2.jpg";
import Ho3 from "../img/ho3.jpg";
import One from "../img/01.jpg";
import two from "../img/02.jpg";
import three from "../img/03.jpg";
import four from "../img/04.jpg";
import five from "../img/05.jpg";
import six from "../img/06.jpg";
import seven from "../img/07.jpg";
import eight from "../img/08.jpg";
import Blob1 from "../img/blob-1.svg";
import Blob2 from "../img/blob-2.svg";
import Blob3 from "../img/blob-3.svg";
import Search from "../img/Search.png";
import arrow from "../img/arrow.svg";
import Logo from "../img/logo.svg";
import img3 from "../img/img3.jpg";
import logoM from "../img/logoM.png";
import userM from "../img/userM.png";
import navM from "../img/navM.png";
import mainM from "../img/mainM.png";
import fbM from "../img/fbM.png";
import igM from "../img/igM.png";
import liM from "../img/liM.png";
import emM from "../img/emM.png";
import MCM1 from "../img/MCM1.png";
import review1M from "../img/review1M.png";
import review2M from "../img/review2M.png";
import Ho1M from "../img/Ho1M.png";
import Ho2M from "../img/Ho2M.png";
import Ho3M from "../img/Ho3M.png";
import arrowM from "../img/arrowM.png";
import modular1M from "../img/modular1M.png";
import GSM1 from "../img/GSM1.png";
import GSM2 from "../img/GSM2.png";
import { useEffect } from "react";

const Home = () => {
  const width= ()=>{
    if (window.innerWidth <= 390) {
      setmobile(true);

      console.log(mobile);
    } else {
      setmobile(false);
      console.log(mobile);
    }
}
  const [mobile, setmobile] = useState(false);
  useEffect(() => {
   

    window.addEventListener("resize", width)
  }, []);

  const [element, setCard] = useState(null);
  const [left, setleft] = useState(0.0);
  const [prev, setprev] = useState(0.0);
  const [RLeft, setRLeft] = useState(0);
  const [modularScroll, setmodularScroll] = useState(0);
  const [gsscroll, setgsscroll] = useState(0);
  const GS = useRef(null);
  const Prev = () => {
    if (left == 0) {
    } else {
      setleft(left + 100);
    }
  };
  const Next = () => {
    if ((!mobile && left == -300) || (mobile && left == -400)) {
    } else {
      setleft(left - 100);
    }
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
  };
  const reviews = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef(null);
  const modular = useRef(null);
  let startX = 0;
  let scrollLeft = 0;

  const handleMouseDown = (e) => {
    setIsDragging(true);
    startX = e.pageX - sliderRef.current.offsetLeft;
    scrollLeft = sliderRef.current.scrollLeft;
    console.log(scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 3; //scroll-fast
    sliderRef.current.scrollLeft = scrollLeft - walk;
    console.log(sliderRef.current.scrollLeft);
  };
  const LviewScroll = () => {
    setsliderScroll(sliderScroll + 256);
    sliderRef.current.scrollLeft += 256;
  };
  const RviewScroll = () => {
    setsliderScroll(sliderScroll - 256);
    sliderRef.current.scrollLeft -= 256;
  };
  const [sliderScroll, setsliderScroll] = useState(0);
  return (
    <>
      {/* -------------OVERLAY----------------- */}
      <section className="w-[100%] bg-[rgba(38,38,38,0.25)] absolute hidden z-[100]">
        <div className="bg-[#FAF6F4] w-[45.1rem] pt-[4.9rem] relative">
          <div className="w-[3rem] h-[3rem] border border-black rounded-full absolute top-[2rem] right-[2rem]"></div>

          <div className="w-[36.2rem] h-[34.9rem] rounded-full  ml-[3.4rem] bg-slate-500"></div>
          <div className="text-[#262626] ml-[3.4rem] w-[36.2rem]">
            <h1 className=" text-[4rem] leading-[4.8rem] mt-[5.7rem]">
              Dr. Lauren Redies
            </h1>
            <p className=" text-[1.4rem] leading-[1.8rem] ">
              Medical Director, Streeterville
            </p>

            <p className=" text-[1.8rem] leading-[2.4rem]  mt-[4rem] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              pellentesque, lacus quis maximus porta, lorem lectus egestas arcu,
              vitae porttitor sem quam quis nisl. Sed non ligula hendrerit,
              bibendum quam at, congue magna. Aenean ac maximus libero. Mauris
              fermentum neque ut diam dignissim, id lacinia magna posuere.
            </p>

            <div className="mt-[9.1rem]">
              <h2 className="text-[#FEC20D] text-[2.2rem] leading-[2.9rem] ">
                What (or who) inspired you to get into Pet care? How so?
              </h2>
              <p className=" text-[1.8rem] leading-[2.4rem]  mt-[2rem] font-[500]">
                Ever since I was a child, I was always loved animails, so I
                decided to become a Veterinarian.
              </p>
            </div>
            <div className="mt-[4rem]">
              <h2 className="text-[#FEC20D] text-[2.2rem] leading-[2.9rem] ">
                What’s the most rewarding part of your job at GoodVets?
              </h2>
              <p className=" text-[1.8rem] leading-[2.4rem]  mt-[2rem] font-[500]">
                Aliquam vitae dictum turpis. Proin tincidunt imperdiet augue a
                tristique. Maecenas nec purus quis nunc bibendum venenatis sed
                porta orci. Vivamus hendrerit non ligula id maximus.
              </p>
            </div>
            <div className="mt-[9.1rem]">
              <h2 className="text-[#FEC20D] text-[2.2rem] leading-[2.9rem] ">
                How do you recharge after a long week? What’s your go-to
                activity for hitting the restart button?
              </h2>
              <p className=" text-[1.8rem] leading-[2.4rem]  mt-[2rem] font-[500]">
                Aliquam vitae dictum turpis. Proin tincidunt imperdiet augue a
                tristique. Maecenas nec purus quis nunc.
              </p>
            </div>
            <div className="mt-[9.1rem]">
              <h2 className="text-[#FEC20D] text-[2.2rem] leading-[2.9rem] ">
                In another life, if you weren’t working in Pet care, what would
                you be doing?
              </h2>
              <p className=" text-[1.8rem] leading-[2.4rem]  mt-[2rem] font-[500]">
                Aliquam vitae dictum turpis. Proin tincidunt imperdiet augue a
                tristique. Maecenas nec purus quis nunc.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className={`main bg-slate-500  bg-cover bg-center bg-blend-darken center ${
          mobile ? "h-[42.5rem]" : "h-[62.2rem]"
        }`}
        style={{
          background: ` rgb(38, 38, 38, 0.2) url(${mobile ? mainM : Bg}) `,
        }}
      >
        {mobile ? (
          <header className="min-h-[4.9rem] py-[1.2rem] flex justify-between items-center bg-white">
            <img src={logoM} alt="" className=" ml-[1.5rem]" />
            <nav className="flex justify-center items-center">
              <img src={userM} alt="" />
              <img src={navM} alt="" className="ml-[1.4rem] mr-[1.5rem]" />
            </nav>
          </header>
        ) : (
          <header className="border-b border-white">
            <nav className="flex justify-between items-center ">
              <img
                src={Logo}
                alt=""
                className="ml-[3.4rem] my-8 w-[16.5rem] h-[3.4rem]"
              />
              {/* <h1 className="font-bold text-4xl ml-[3.4rem] my-8 text-white geographr ">
              GoodVets
            </h1> */}
              <ul className="  flex justify-end mr-[6rem] text-white items-center">
                <li className="mt-[2.6rem] mb-[2.8rem] geographr text-[1.4rem] leading-8 uppercase mr-[7.1rem]">
                  Locations
                </li>
                <li className="mt-[2.6rem] mb-[2.8rem] geographr text-[1.4rem] leading-8 uppercase mr-[6.5rem]">
                  Services
                </li>
                <li className="mt-[2.6rem] mb-[2.8rem] geographr text-[1.4rem] leading-8 uppercase mr-[6.3rem]">
                  Wellness Plans
                </li>
                <li className=" mt-[2.6rem] mb-[2.8rem] geographr text-[1.4rem] leading-8 uppercase mr-[6rem]">
                  Join Us
                </li>
                <li className="mt-[2.6rem] mb-[2.8rem] geographr text-[1.4rem] leading-8 uppercase  w-56 flex justify-center items-center border rounded-3xl py-1.5 border-white">
                  Book Now
                </li>
              </ul>
            </nav>
          </header>
        )}

        <div className="main flex justify-center items-center flex-col">
          <p
            className={`geographm text-[1.4rem] mt-[13.8rem] mb-8 w-[16rem] bg-yellow-500  h-[1.8rem] uppercase text-center ${
              mobile ? "hidden" : "static"
            }`}
            style={{ textShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)" }}
          >
            Associative Vets
          </p>
          {mobile ? (
            <h1 className="text-[3.4rem] leading-[3.8rem] tracking-[-.14rem] text-center text-white mt-[15rem] ">
              Grow Alongside Your <br /> Hospital’s Owner
            </h1>
          ) : (
            <h1
              className={` text-[7rem] tracking-[-.14rem] leading-[8rem] text-center text-white`}
            >
              A Vet-Owned Hospital,
              <br /> Invested in You
            </h1>
          )}
        </div>
        <button className="text-[1.4rem] leading-[2rem] text-[#262626] w-[21.3rem] h-[5rem] bg-[#FEC20D] rounded-[5rem] fixed z-10 right-[3.5rem] top-[65.8rem] hover:bg-[#262626] hover:text-white">
          VIEW OPPORTUNITIES
        </button>
      </section>

      <section
        className={`section2  rounded-t-2xl ${
          mobile ? "h-[12.8rem] bg-white" : "h-[38.2rem] bg-[#faf6f4]"
        }`}
      >
        {mobile ? (
          <p className="geographr w-[34.2rem] text-[##262626] text-[1.4rem] mx-auto text-center pt-[3.2rem] leading-[1.6rem]">
            As an Associate Vet at GoodVets your Medical Director is also the
            owner of the hospital, which means higher quality of care and
            mentorship from teh top down.
          </p>
        ) : (
          <p className="geographm w-[112.2rem] text-[#262626] text-[4rem] mx-auto text-center pt-[7.4rem] leading-[4.8rem]">
            As an associate veterinarian at GoodVets, you'll be mentored by a
            partner veterinarian who is personally invested in your success.
          </p>
        )}
      </section>

      <section
        className={`"section3  ${mobile ? "pb-[4.8rem]" : "pb-[10rem]"}`}
      >
        <h1
          className={` mx-auto  text-center text-[#262626] ${
            mobile
              ? "text-[2.4rem] leading-[2.6rem] my-[2.4rem]"
              : "text-[7rem] leading-[8rem] my-40"
          }`}
        >
          A Culture of{" "}
          <span className={`${mobile ? "text-[#262626]" : "text-yellow-500"}`}>
            {" "}
            Mentorship
          </span>
        </h1>
        <div className="relative flex justify-center items-center flex-col">
          <div
            className={` absolute w-[100%] z-10 pr-[3.5rem] pl-[2.5rem]  justify-between items-center top-[18rem] ${
              mobile ? "hidden" : "flex"
            }`}
          >
            <button
              className="p-[1rem] border border-black rounded-full h-[5rem] w-[5rem] hover:bg-[#FEC20D] hover:border-transparent"
              onClick={Prev}
            >
              <img src={arrow} alt="" className="rotate-90" />
            </button>
            <button
              className="p-[1rem] border border-black rounded-full h-[5rem] w-[5rem] hover:bg-[#FEC20D] hover:border-transparent"
              onClick={Next}
            >
              <img src={arrow} alt="" className="-rotate-90" />
            </button>
          </div>
          <div
            className={`rows flex  max-w-[100%] overflow-hidden ${
              mobile ? "pl-[0]" : "pl-[5rem]"
            }`}
          >
            <div
              className={`row1  flex  justify-start  relative transition-all duration-[0.5s] ease-in-out ${
                mobile
                  ? "mx-[2.4rem] flex-col min-w-[34.2rem]"
                  : "mx-[0] flex-row min-w-[100%]"
              }`}
              style={{ position: "relative", left: `${left}%` }}
            >
              <div
                className={`r1     ${
                  mobile
                    ? "h-[23.2rem] w-[34.2rem] mx-[0] rounded-[0]"
                    : "h-[42rem] w-[58.2rem] mx-[3.9rem] rounded-[6px]"
                }`}
                style={{
                  background: `url(${mobile ? MCM1 : Ho3}) center center`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              
              <div
                className={`r2  flex flex-col justify-center items-start text-[#282826] ${
                  mobile ? "mx-auto" : "mx-[3.9rem]"
                }`}
              >
                <h1
                  className={`  ${
                    mobile
                      ? "text-center text-[1.8rem] leading-[2.4rem] m-auto mb-[1.6rem] mt-[1.6rem] "
                      : "mb-8 text-left  geographm text-[4rem] leading-[4.8rem]"
                  }`}
                >
                  Veterinarian-Led <br /> Medicine
                </h1>

                {mobile ? (
                  <p className="geographr text-center w-[31rem] text-[1.4rem] leading-[1.6rem]">
                    GoodVets’ benchmarks for animal care isn’t corporate
                    standardized — each Vet-Partner creates perunt, cum iusdamus
                    as ulpa simus millit quo berchicid quis sumet atis eossi
                    dunt eumquia spelesequi officiis nonsequ isciet.
                  </p>
                ) : (
                  <p className="geographr w-[47.2rem] text-[1.8rem] leading-[2.4rem]">
                    Our partner veterinarians design their own medical programs,
                    so you'll be learning from and working with your hospital's
                    top dog.
                  </p>
                )}
              </div>
            </div>
            <div
              className={`row1  flex  justify-start  relative transition-all duration-[0.5s] ease-in-out ${
                mobile
                  ? "mx-[2.4rem] flex-col min-w-[34.2rem]"
                  : "mx-[0] flex-row min-w-[100%]"
              }`}
              style={{ position: "relative", left: `${left}%` }}
            >
              <div
                className={`r1     ${
                  mobile
                    ? "h-[23.2rem] w-[34.2rem] mx-[0] rounded-[0]"
                    : "h-[42rem] w-[58.2rem] mx-[3.9rem] rounded-[6px]"
                }`}
                style={{
                  background: `url(${mobile ? MCM1 : Slider1}) center center`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div
                className={`r2  flex flex-col justify-center items-start text-[#282826] ${
                  mobile ? "mx-auto" : "mx-[3.9rem]"
                }`}
              >
                <h1
                  className={`  ${
                    mobile
                      ? "text-center text-[1.8rem] leading-[2.4rem] m-auto mb-[1.6rem] mt-[1.6rem] "
                      : "mb-8 text-left  geographm text-[4rem] leading-[4.8rem]"
                  }`}
                >
                  Mentorship From Our <br /> Chief Medical Officer
                </h1>

                {mobile ? (
                  <p className="geographr text-center w-[31rem] text-[1.4rem] leading-[1.6rem]">
                    GoodVets’ benchmarks for animal care isn’t corporate
                    standardized — each Vet-Partner creates perunt, cum iusdamus
                    as ulpa simus millit quo berchicid quis sumet atis eossi
                    dunt eumquia spelesequi officiis nonsequ isciet.
                  </p>
                ) : (
                  <p className="geographr w-[47.2rem] text-[1.8rem] leading-[2.4rem]">
                    Our Chief Medical Officer, Dr. Antonio DeMarco, aids in the
                    growth and development of every associate, helping craft the
                    career path that's right for you.
                  </p>
                )}
              </div>
            </div>
            <div
              className={`row1  flex  justify-start  relative transition-all duration-[0.5s] ease-in-out ${
                mobile
                  ? "mx-[2.4rem] flex-col min-w-[34.2rem]"
                  : "mx-[0] flex-row  min-w-[100%]"
              }`}
              style={{ position: "relative", left: `${left}%` }}
            >
              <div
                className={`r1     ${
                  mobile
                    ? "h-[23.2rem] w-[34.2rem] mx-[0] rounded-[0]"
                    : "h-[42rem] w-[58.2rem] mx-[3.9rem] rounded-[6px]"
                }`}
                style={{
                  background: `url(${mobile ? MCM1 : Slider1}) center center`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div
                className={`r2  flex flex-col justify-center items-start text-[#282826] ${
                  mobile ? "mx-auto" : "mx-[3.9rem]"
                }`}
              >
                <h1
                  className={`  ${
                    mobile
                      ? "text-center text-[1.8rem] leading-[2.4rem] m-auto mb-[1.6rem] mt-[1.6rem] "
                      : "mb-8 text-left  geographm text-[4rem] leading-[4.8rem]"
                  }`}
                >
                  Education from our <br /> Veterinary Advisor
                </h1>

                {mobile ? (
                  <p className="geographr text-center w-[31rem] text-[1.4rem] leading-[1.6rem]">
                    GoodVets’ benchmarks for animal care isn’t corporate
                    standardized — each Vet-Partner creates perunt, cum iusdamus
                    as ulpa simus millit quo berchicid quis sumet atis eossi
                    dunt eumquia spelesequi officiis nonsequ isciet.
                  </p>
                ) : (
                  <p className="geographr w-[47.2rem] text-[1.8rem] leading-[2.4rem]">
                    Dr. Cindy Charlier architects tailored training programs and
                    provides guidance on continuing education for associates.
                  </p>
                )}
              </div>
            </div>
            <div
              className={`row1  flex  justify-start  relative transition-all duration-[0.5s] ease-in-out ${
                mobile
                  ? "mx-[2.4rem] flex-col min-w-[34.2rem]"
                  : "mx-[0] flex-row min-w-[100%]"
              }`}
              style={{ position: "relative", left: `${left}%` }}
            >
              <div
                className={`r1     ${
                  mobile
                    ? "h-[23.2rem] w-[34.2rem] mx-[0] rounded-[0]"
                    : "h-[42rem] w-[58.2rem] mx-[3.9rem] rounded-[6px]"
                }`}
                style={{
                  background: `url(${mobile ? MCM1 : Slider2}) center center`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div
                className={`r2  flex flex-col justify-center items-start text-[#282826] ${
                  mobile ? "mx-auto" : "mx-[3.9rem]"
                }`}
              >
                <h1
                  className={`  ${
                    mobile
                      ? "text-center text-[1.8rem] leading-[2.4rem] m-auto mb-[1.6rem] mt-[1.6rem] "
                      : "mb-8 text-left  geographm text-[4rem] leading-[4.8rem]"
                  }`}
                >
                  Professional & <br /> Performance Coaching
                </h1>

                {mobile ? (
                  <p className="geographr text-center w-[31rem] text-[1.4rem] leading-[1.6rem]">
                    GoodVets’ benchmarks for animal care isn’t corporate
                    standardized — each Vet-Partner creates perunt, cum iusdamus
                    as ulpa simus millit quo berchicid quis sumet atis eossi
                    dunt eumquia spelesequi officiis nonsequ isciet.
                  </p>
                ) : (
                  <p className="geographr w-[47.2rem] text-[1.8rem] leading-[2.4rem]">
                    As an Associate, you’ll be connected to a dedicated business
                    coach from Boon Health, who can advise on everything from
                    work challenges to interpersonal relationships.
                  </p>
                )}
              </div>
            </div>
            <div
              className={`row1  flex  justify-start  relative transition-all duration-[0.5s] ease-in-out ${
                mobile
                  ? "mx-[2.4rem] flex-col min-w-[34.2rem]"
                  : "mx-[0] flex-row  min-w-[100%]"
              }`}
              style={{ position: "relative", left: `${left}%` }}
            >
              <div
                className={`r1     ${
                  mobile
                    ? "h-[23.2rem] w-[34.2rem] mx-[0] rounded-[0]"
                    : "h-[42rem] w-[58.2rem] mx-[3.9rem] rounded-[6px]"
                }`}
                style={{
                  background: `url(${mobile ? MCM1 : Slider2}) center center`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div
                className={`r2  flex flex-col justify-center items-start text-[#282826] ${
                  mobile ? "mx-auto" : "mx-[3.9rem]"
                }`}
              >
                <h1
                  className={`  ${
                    mobile
                      ? "text-center text-[1.8rem] leading-[2.4rem] m-auto mb-[1.6rem] mt-[1.6rem] "
                      : "mb-8 text-left  geographm text-[4rem] leading-[4.8rem]"
                  }`}
                >
                  Professional & <br /> Performance Coaching
                </h1>

                {mobile ? (
                  <p className="geographr text-center w-[31rem] text-[1.4rem] leading-[1.6rem]">
                    GoodVets’ benchmarks for animal care isn’t corporate
                    standardized — each Vet-Partner creates perunt, cum iusdamus
                    as ulpa simus millit quo berchicid quis sumet atis eossi
                    dunt eumquia spelesequi officiis nonsequ isciet.
                  </p>
                ) : (
                  <p className="geographr w-[47.2rem] text-[1.8rem] leading-[2.4rem]">
                    As an Associate, you’ll be connected to a dedicated business
                    coach from Boon Health, who can advise on everything from
                    work challenges to interpersonal relationships.
                  </p>
                )}
              </div>
            </div>
            {/* <div
              className={`row1 flex justify-start min-w-[100%] relative transition-all duration-[0.5s] ease-in-out`}
              style={{ position: "relative", left: `${left}%` }}
            >
              <div className="r1 mx-[3.9rem] h-[42rem] w-[58.2rem] bg-slate-300 rounded-[6px]" style={{background : `url(${Slider1})`, backgroundSize : "cover", backgroundPosition : "center"}}></div>
              <div className="r2 mx-[3.9rem] flex flex-col justify-center items-start text-[#282826]">
                <h1 className="geographm text-[4rem] leading-[4.8rem]  mb-8 ">
                  Mentorship From Our <br /> Chief Medical Officer
                </h1>
                <p className="geographr w-[47.2rem] text-[1.8rem] leading-[2.4rem]">
                  Our Chief Medical Officer, Dr. Antonio DeMarco, aids in the
                  growth and development of every associate, helping craft the
                  career path that's right for you.
                </p>
              </div>
            </div>
            <div
              className={`row1 flex justify-start min-w-[100%] relative transition-all duration-[0.5s] ease-in-out`}
              style={{ position: "relative", left: `${left}%` }}
            >
              <div className="r1 mx-[3.9rem] h-[42rem] w-[58.2rem] bg-slate-300 rounded-[6px]"></div>
              <div className="r2 mx-[3.9rem] flex flex-col justify-center items-start text-[#282826]">
                <h1 className="geographm text-[4rem] leading-[4.8rem]  mb-8 ">
                  Education from our <br /> Veterinary Advisor
                </h1>
                <p className="geographr w-[47.2rem] text-[1.8rem] leading-[2.4rem]">
                  Dr. Cindy Charlier architects tailored training programs and
                  provides guidance on continuing education for associates.
                </p>
              </div>
            </div>
            <div
              className={`row1 flex justify-start min-w-[100%] relative transition-all duration-[0.5s] ease-in-out`}
              style={{ position: "relative", left: `${left}%` }}
            >
              <div className="r1 mx-[3.9rem] h-[42rem] w-[58.2rem] bg-slate-300 rounded-[6px]" style={{background : `url(${Slider2})`, backgroundSize : "cover", backgroundPosition : "center"}}></div>
              <div className="r2 mx-[3.9rem] flex flex-col justify-center items-start text-[#282826]">
                <h1 className="geographm text-[4rem] leading-[4.8rem]  mb-8 ">
                  Professional & <br /> Performance Coaching
                </h1>
                <p className="geographr w-[47.2rem] text-[1.8rem] leading-[2.4rem]">
                  As an Associate, you’ll be connected to a dedicated business
                  coach from Boon Health, who can advise on everything from work
                  challenges to interpersonal relationships.
                </p>
              </div>
            </div> */}
          </div>
          <div
            className={` mt-[4rem]  w-[100%] z-10 px-[2.4rem]   justify-between items-center ${
              mobile ? "flex" : "hidden"
            }`}
          >
            <button className="h-[.91rem] w-[1.84rem]" onClick={Prev}>
              <img src={arrow} alt="" className="rotate-90" />
            </button>
            <div className="flex justify-center items-center">
              <div
                className={`w-[1rem] h-[1rem]  rounded-full mr-[.8rem] border-[1px] border-black ${
                  left == 0 ? "bg-black" : "bg-white"
                }`}
                onClick={() => setleft(0)}
              ></div>
              <div
                className={`w-[1rem] h-[1rem]  rounded-full mr-[.8rem] border-[1px] border-black ${
                  left == -100 ? "bg-black" : "bg-white"
                }`}
                onClick={() => setleft(-100)}
              ></div>
              <div
                className={`w-[1rem] h-[1rem]  rounded-full mr-[.8rem] border-[1px] border-black ${
                  left == -200 ? "bg-black" : "bg-white"
                }`}
                onClick={() => setleft(-200)}
              ></div>
              <div
                className={`w-[1rem] h-[1rem]  rounded-full mr-[.8rem] border-[1px] border-black ${
                  left == -300 ? "bg-black" : "bg-white"
                }`}
                onClick={() => setleft(-300)}
              ></div>
              <div
                className={`w-[1rem] h-[1rem]  rounded-full border-[1px] border-black ${
                  left == -400 ? "bg-black" : "bg-white"
                }`}
                onClick={() => setleft(-400)}
              ></div>
            </div>
            <button className="h-[.913rem] w-[1.84rem]" onClick={Next}>
              <img src={arrow} alt="" className="-rotate-90" />
            </button>
          </div>
        </div>
      </section>

      <section
        className={` ${
          mobile ? "bg-[#F9F6F4] h-auto" : "bg-[#FAF6F4] h-[81.6rem]"
        } `}
      >
        {mobile ? (
          <h1
            className={` mx-auto  text-center text-[#262626] text-[2.4rem] leading-[2.6rem] mb-[1.6rem] pt-[3.2rem] `}
          >
            Meet Your Mentors <br />
            and Colleagues
          </h1>
        ) : (
          ""
        )}
        <div
          className={`flex m-auto w-[100%]  Review ${
            mobile ? "h-auto" : "h-[100%]"
          }`}
          ref={sliderRef}
          style={{
            scrollSnapType: "x mandatory",
            overflowX: "scroll",
            overflowY: "hidden",
          }}
        >
          {/* <Slider  {...reviews}> */}
          <div
            className={`  flex-col start-center items-center relative reviews    ${
              mobile
                ? "max-w-[20rem] ml-[2.4rem] top-[0] h-[46.4rem] mr-[3.2rem]"
                : "max-w-[107.7rem] h-auto mr-[7rem] ml-[14.4rem] top-[30.3rem]"
            }`}
            style={{ left: RLeft }}
          >
            <div
              className={`  flex flex-col justify-end items-center ${
                mobile
                  ? "w-[20rem]  h-[43rem] bg-transparent "
                  : "  h-[37.3rem] w-[107.7rem] bg-[#E2EEE5]"
              }`}
            >
              <div
                className={`  ${
                  mobile
                    ? "rounded-0 min-h-[23.2rem] w-[20rem]"
                    : "rounded-[100%] min-h-[24.3rem] w-[25.2rem] center"
                }  relative  z-10`}
                style={{
                  background: `url(${mobile ? review1M : Review1}) `,
                  backgroundBlendMode: "multiply",
                 
                }}
              >
                {" "}
              </div>

              {mobile ? (
                <p className="geographr text-[1.2rem] leading-[1.4rem] text-[#262626] w-[100%] min-h-[12.6rem] my-[1.6rem]">
                  “Joining from a small mom & pop vet office has provided me
                  with tremendous career opportunities. Before, I never imagined
                  planning to create my own hospital in Little Havana, Miami.”
                </p>
              ) : (
                <p className="geographm mt-[2rem] text-center text-[4rem] leading-[4.99rem] text-[#282826] w-[85.7rem] ">
                  “GoodVets has fulfilled my wants and needs as an owner and
                  Vet. I am living my best life.“
                </p>
              )}

              {mobile ? (
                <p className="geographr text-[.9rem] text-[##262626] leading-[1.1rem] uppercase ">
                  Dr. Lily Rosario <br />
                  Associate Veterinarian & Surgery Specialist <br />
                  Coconut Grove, Miami
                </p>
              ) : (
                <p className={`geographr text-[1.4rem] text-[#262626] text-center uppercase mt-[4rem] mb-[9.6rem]`}>
                  DR. SCHAUER - MEDICAL DIRECTOR <br /> STREETERVILLE
                </p>
              )}
            </div>
          </div>
          <div
            className={`  flex-col start-center  relative reviews    mr-[7rem] ${
              mobile
                ? "min-w-[23.2rem] items-end  top-[0] border-l-[1px]  h-[46.4rem] border-[#B5B3B2]"
                : "max-w-[107.7rem] h-auto  items-center ml-[14.4rem] top-[30.3rem]"
            }`}
            style={{ left: RLeft }}
          >
            <div
              className={`  flex flex-col justify-end items-center ${
                mobile
                  ? "w-[20rem]  h-[46.4rem] bg-transparent "
                  : "  h-[37.3rem] w-[107.7rem] bg-[#D8DAF1]"
              }`}
            >
              <div
                className={`  ${
                  mobile
                    ? "rounded-0 min-h-[23.2rem] w-[20rem]"
                    : "rounded-[100%] min-h-[24.3rem] w-[25.2rem] center" 
                }  relative  z-10`}
                style={{
                  background: `url(${mobile ? review2M : Review1}) `,
                  backgroundBlendMode: "multiply",
                 
                }}
              >
                {" "}
              </div>

              {mobile ? (
                <p className="geographr text-[1.2rem] leading-[1.4rem] text-[#262626] w-[100%] min-h-[15.3rem] my-[1.6rem]">
                  “Ihil experunt pratem fuga. Et fugia nonsed quid maion pre
                  ipsa nonseri tiander roriorem voluptati int.”
                </p>
              ) : (
                <p className="geographm mt-[2rem] text-center text-[4rem] leading-[4.99rem] text-[#282826] w-[85.7rem] ">
                  “GoodVets has fulfilled my wants and needs as an owner and
                  Vet. I am living my best life.“
                </p>
              )}

              {mobile ? (
                <p className="geographr text-[.9rem] text-[##262626] leading-[1.1rem] uppercase ">
                  Dr. Lily Rosario <br />
                  Associate Veterinarian & Surgery Specialist <br />
                  Coconut Grove, Miami
                </p>
              ) : (
                <p className="geographr text-[1.4rem] text-[#262626] text-center uppercase mt-[4rem] mb-[9.6rem]">
                  DR. SCHAUER - MEDICAL DIRECTOR <br /> STREETERVILLE
                </p>
              )}
            </div>
          </div>
          <div
            className={`  flex-col start-center  relative reviews    mr-[7rem] ${
              mobile
                ? "min-w-[23.2rem] items-end  top-[0] border-l-[1px]  h-[46.4rem] border-[#B5B3B2]"
                : "max-w-[107.7rem] h-auto items-center ml-[14.4rem] top-[30.3rem]"
            }`}
            style={{ left: RLeft }}
          >
            <div
              className={`  flex flex-col justify-end items-center ${
                mobile
                  ? "w-[20rem]  h-[46.4rem] bg-transparent "
                  : "  h-[37.3rem] w-[107.7rem] bg-[#E2EEE5]"
              }`}
            >
              <div
                className={`  ${
                  mobile
                    ? "rounded-0 min-h-[23.2rem] w-[20rem]"
                    : "rounded-[100%] min-h-[24.3rem] w-[25.2rem] center"
                }  relative  z-10`}
                style={{
                  background: `url(${mobile ? review1M : Review1}) `,
                  backgroundBlendMode: "multiply",
                 
                }}
              >
                {" "}
              </div>

              {mobile ? (
                <p className="geographr text-[1.2rem] leading-[1.4rem] text-[#262626] w-[100%] min-h-[15.3rem] my-[1.6rem]">
                  “Ihil experunt pratem fuga. Et fugia nonsed quid maion pre
                  ipsa nonseri tiander roriorem voluptati int.”
                </p>
              ) : (
                <p className="geographm mt-[2rem] text-center text-[4rem] leading-[4.99rem] text-[#282826] w-[85.7rem] ">
                  “GoodVets has fulfilled my wants and needs as an owner and
                  Vet. I am living my best life.“
                </p>
              )}

              {mobile ? (
                <p className="geographr text-[.9rem] text-[##262626] leading-[1.1rem] uppercase ">
                  Dr. Lily Rosario <br />
                  Associate Veterinarian & Surgery Specialist <br />
                  Coconut Grove, Miami
                </p>
              ) : (
                <p className="geographr text-[1.4rem] text-[#262626] text-center uppercase mt-[4rem] mb-[9.6rem]">
                  DR. SCHAUER - MEDICAL DIRECTOR <br /> STREETERVILLE
                </p>
              )}
            </div>
          </div>

          {/* <div className="  flex-col start-center items-center relative reviews top-[30.3rem] max-w-[107.7rem] mr-[7rem]" >

            
<div className="w-[107.7rem] bg-[rgba(115,134,230,0.25)] h-[37.3rem] flex flex-col justify-end items-center ">
<div className="min-h-[24.3rem] w-[25.2rem]  rounded-[100%]  relative  z-10" style={{background : ` url(${Blob1}), url(${Review1}) `,backgroundBlendMode : "multiply",  backgroundPosition : "center", backgroundSize : "cover"}}> </div>

  <p className="geographm mt-[2rem] text-center text-[4rem] leading-[4.99rem] text-[#282826] w-[85.7rem] ">
    “GoodVets has fulfilled my wants and needs as an owner and Vet.
    I am living my best life.“
  </p>
  <p className="geographr text-[1.4rem] text-[#262626] text-center uppercase mt-[4rem] mb-[9.6rem]">
    DR. SCHAUER - MEDICAL DIRECTOR <br /> STREETERVILLE
  </p>
</div>
</div>
<div className="  flex-col start-center items-center relative reviews top-[30.3rem] max-w-[107.7rem] " >

            
<div className="w-[107.7rem] bg-[#E2EEE5] h-[37.3rem] flex flex-col justify-end items-center ">
<div className="min-h-[24.3rem] w-[25.2rem]  rounded-[100%]  relative  z-10" style={{background : ` url(${Blob1}), url(${Review1}) `,backgroundBlendMode : "multiply",  backgroundPosition : "center", backgroundSize : "cover"}}> </div>

  <p className="geographm mt-[2rem] text-center text-[4rem] leading-[4.99rem] text-[#282826] w-[85.7rem] ">
    “GoodVets has fulfilled my wants and needs as an owner and Vet.
    I am living my best life.“
  </p>
  <p className="geographr text-[1.4rem] text-[#262626] text-center uppercase mt-[4rem] mb-[9.6rem]">
    DR. SCHAUER - MEDICAL DIRECTOR <br /> STREETERVILLE
  </p>
</div>
</div> */}
          {/* </Slider> */}
        </div>
        <div
          className={` mt-[3.6rem]  w-[100%] z-10 px-[2.4rem] pb-[5.2rem]  justify-between items-center ${
            mobile ? "flex" : "hidden"
          }`}
        >
          <button className="h-[.91rem] w-[1.84rem]" onClick={RviewScroll}>
            <img src={arrow} alt="" className="rotate-90" />
          </button>
          <div className="flex justify-center items-center">
            <div
              className={`w-[1rem] h-[1rem]  rounded-full mr-[.8rem] border-[1px] border-black ${
                sliderScroll == 0 ? "bg-black" : "bg-transparent"
              }`}
              onClick={() => {
                setsliderScroll(0);
                sliderRef.current.scrollLeft = 0;
              }}
            ></div>
            <div
              className={`w-[1rem] h-[1rem]  rounded-full mr-[.8rem] border-[1px] border-black ${
                sliderScroll == 256 ? "bg-black" : "bg-transparent"
              }`}
              onClick={() => {
                setsliderScroll(256);
                sliderRef.current.scrollLeft = 256;
              }}
            ></div>
            <div
              className={`w-[1rem] h-[1rem]  rounded-full  border-[1px] border-black ${
                sliderScroll > 256 ? "bg-black" : "bg-transparent"
              }`}
              onClick={() => {
                setsliderScroll(470);
                sliderRef.current.scrollLeft = 470;
              }}
            ></div>
          </div>
          <button className="h-[.913rem] w-[1.84rem]" onClick={LviewScroll}>
            <img src={arrow} alt="" className="-rotate-90" />
          </button>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center">
        <h1
          className={`mx-auto  text-center  ${
            mobile
              ? "text-[2.4rem] leading-[2.6rem] mb-[2.4rem] pt-[3.6rem]"
              : "text-[7rem] leading-[8rem] my-40"
          }`}
        >
          Many Ways to <br /> Take
          <span className={` ${mobile ? "text-[#262626]" : "text-yellow-500"}`}>
            {" "}
            Ownership
          </span>
        </h1>
        <div
          className={`${
            mobile ? "flex justify-start items-start w-[100%]" : ""
          }`}
        >
          <div
            className={`flex flex-col justify-center items-center ml-[2.4rem] mt-[3.6rem] ${
              mobile ? "flex" : "hidden"
            }`}
          >
            <div className="flex justify-between items-center flex-col relative h-[30.1rem]">
              <div className="w-[3.2rem]  h-[3.2rem] text-[1.6rem]  leading-[1.6rem] text-[#262626] bg-[#F5C445] rounded-full flex justify-center items-center">
                1
              </div>
              <div className="h-[26.9rem] bg-[#F5C445] w-[.2rem]"></div>
            </div>
            <div className="flex justify-between items-center flex-col relative h-[29.1rem]">
              <div className="w-[3.2rem] bg-white z-10  h-[3.2rem] text-[1.6rem] leading-[1.6rem] border-[#F5C445] border-[2px] text-[#F5C445] rounded-full flex justify-center items-center">
                2
              </div>
              <div className="h-[25.9rem] bg-[#F5C445] w-[.2rem] "></div>
            </div>
            <div className="flex justify-between items-center flex-col relative h-[24.4rem]">
              <div className="w-[3.2rem] bg-white z-10 h-[3.2rem] text-[1.6rem] leading-[1.6rem] border-[#F5C445] border-[2px] text-[#F5C445] rounded-full flex justify-center items-center">
                3
              </div>
              <div className="h-[21.2rem] border-[1px] border-dashed border-[#F7DD8D] w-[.2rem]"></div>
              <img src={arrowM} className="relative bottom-[2.3rem]" alt="" />
            </div>
          </div>
          <div
            className={`rows  flex flex-col  justify-center items-start  ${
              mobile ? "w-[29.2rem]" : "w-[100%] pl-[5rem]"
            }`}
          >
            <div
              className={`row1 flex justify-center ${
                mobile ? "flex-col items-center" : "flex-row "
              }`}
            >
              <div
                className={`r1   bg-slate-500  relative ${
                  mobile
                    ? "h-[12.6rem] w-[15.4rem] rounded-0"
                    : "h-[40rem] w-[58.2rem] rounded-[2.4rem] mx-[3.9rem] center" 
                }`}
                style={{
                  background: `url(${mobile ? Ho1M : Ho1})`
                }}
              >
                <div
                  className={`w-[22.4rem] min-h-[21.6rem]  absolute left-[52.2rem] bottom-[24.88rem] flex justify-center items-center ${
                    mobile ? "hidden" : "flex"
                  }`}
                >
                  <p
                    className={`text-[#262626] absolute top-[4.2rem] left-[4.1rem]  text-[10rem] leading-[8rem] tracking-[-.2rem] w-[14.2rem] h-[13.2rem] flex justify-center items-center `}
                  >
                    1
                  </p>
                  <img src={Blob1} alt="" />
                </div>
              </div>
              <div
                className={`r2  flex flex-col justify-end  items-start text-[#282826] ${
                  mobile ? "" : "mx-[3.9rem] pb-[6rem]"
                }`}
              >
                <h1
                  className={`   ${
                    mobile
                      ? "text-[1.8rem] leading-[2.4rem] text-center m-auto my-[2.4rem]"
                      : "mb-8 text-[4rem] geographm leading-[4.8rem]"
                  } `}
                >
                  Expand Your Expertise
                </h1>
                {mobile ? (
                  <p className="geographr w-[29rem] text-[1.4rem] text-center leading-[1.6rem]">
                    Give strategic input for building your hospital, from layout
                    to equipment and design to local knowledge that allows your
                    practice to thrive in it’s community.
                  </p>
                ) : (
                  <p className="geographr w-[47.2rem] text-[1.8rem] leading-[2.4rem]">
                    Working at GoodVets is an education unto itself. You’ll be
                    mentored by visionary partner vets, practice alongside
                    talented peers, and uncover your own unique skills and
                    passions.
                  </p>
                )}
              </div>
            </div>
            <div
              className={`row1 flex justify-center  ${
                mobile
                  ? "flex-col items-center mt-[2.4rem]"
                  : "mt-[20rem]  flex-row-reverse"
              }`}
            >
              <div
                className={`r1   bg-slate-500  relative ${
                  mobile
                    ? "h-[12.6rem] w-[15.4rem] rounded-0"
                    : "h-[40rem] w-[58.2rem] rounded-[2.4rem] mx-[3.9rem] center"
                }`}
                style={{
                  background: `url(${mobile ? Ho2M : Ho2})`,
                 
                }}
              >
                <div
                  className={`w-[22.4rem] min-h-[21.6rem]  absolute right-[52.2rem] bottom-[24.88rem] flex justify-center items-center ${
                    mobile ? "hidden" : "flex"
                  }`}
                >
                  <p
                    className={`text-[#262626] absolute top-[4.2rem] left-[4.1rem]  text-[10rem] leading-[8rem] tracking-[-.2rem] w-[14.2rem] h-[13.2rem] flex justify-center items-center `}
                  >
                    2
                  </p>
                  <img src={Blob1} alt="" />
                </div>
              </div>
              <div
                className={`r2  flex flex-col justify-end  items-start text-[#282826] ${
                  mobile ? "" : "mx-[3.9rem] pb-[6rem]"
                }`}
              >
                <h1
                  className={`   ${
                    mobile
                      ? "text-[1.8rem] leading-[2.4rem] text-center m-auto my-[2.4rem]"
                      : "mb-8 text-[4rem] geographm leading-[4.8rem]"
                  } `}
                >
                  Access to Equity
                </h1>
                {mobile ? (
                  <p className="geographr w-[29rem] text-[1.4rem] text-center leading-[1.6rem]">
                    Give strategic input for building your hospital, from layout
                    to equipment and design to local knowledge that allows your
                    practice to thrive in it’s community.
                  </p>
                ) : (
                  <p className="geographr w-[47.2rem] text-[1.8rem] leading-[2.4rem]">
                    As an associate veterinarian, you have a unique opportunity
                    to invest in the hospital where you work. As a co-owner,
                    you’ll share in the hospital’s success and gain
                    entrepreneurial experience that complements your medical
                    training.
                  </p>
                )}
              </div>
            </div>
            <div
              className={`row1 flex justify-center ${
                mobile
                  ? "flex-col items-center  mt-[2.4rem]"
                  : "mt-[20rem]  flex-row "
              }`}
            >
              <div
                className={`r1   bg-slate-500  relative ${
                  mobile
                    ? "h-[12.6rem] w-[15.4rem] rounded-0"
                    : "h-[40rem] w-[58.2rem] rounded-[2.4rem] mx-[3.9rem] center"
                }`}
                style={{
                  background: `url(${mobile ? Ho3M : img3})`
                
                }}
              >
                <div
                  className={`w-[22.4rem] min-h-[21.6rem]  absolute left-[52.2rem] bottom-[24.88rem] flex justify-center items-center ${
                    mobile ? "hidden" : "flex"
                  }`}
                >
                  <p
                    className={`text-[#262626] absolute top-[4.2rem] left-[4.1rem]  text-[10rem] leading-[8rem] tracking-[-.2rem] w-[14.2rem] h-[13.2rem] flex justify-center items-center `}
                  >
                    3
                  </p>
                  <img src={Blob1} alt="" />
                </div>
              </div>
              <div
                className={`r2  flex flex-col justify-end  items-start text-[#282826] ${
                  mobile ? "" : "mx-[3.9rem] pb-[6rem]"
                }`}
              >
                <h1
                  className={`   ${
                    mobile
                      ? "text-[1.8rem] leading-[2.4rem] text-center m-auto my-[2.4rem]"
                      : "mb-8 text-[4rem] geographm leading-[4.8rem]"
                  } `}
                >
                  Pursue the Path <br /> to Ownership
                </h1>
                {mobile ? (
                  <p className="geographr w-[29rem] text-[1.4rem] text-center leading-[1.6rem]">
                    Ignam volore occume nonsequ idebis pro eat rem res comni
                    beaquam sequi et invenitaecae sam consequi cus el iliqui.
                  </p>
                ) : (
                  <p className="geographr w-[47.2rem] text-[1.8rem] leading-[2.4rem]">
                    Co-owning and running your own hospital is the natural
                    progression for many—though not all—of our associates. If
                    that’s your goal, we’re ready to help you achieve it.
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* <div className="row1 flex justify-center flex-row-">
            <div className="r1 mx-[3.9rem] h-[40rem] w-[58.2rem] bg-slate-300 rounded-[2.4rem] relative" style={{background : `url(${Ho2})`, backgroundPosition : "center", backgroundSize : "cover"}}>
            <div className="w-[22.4rem] h-[21.6rem]  absolute right-[52.2rem] bottom-[24.88rem] flex justify-center items-center">
                <p className="text-[#262626] absolute top-[4.2rem] left-[4.1rem]  text-[10rem] leading-[8rem] tracking-[-.2rem] w-[14.2rem] h-[13.2rem] flex justify-center items-center">2</p>
              <img src={Blob2} alt="" />
              </div>
            </div>
            <div className="r2 mx-[3.9rem] flex flex-col justify-end pb-[6rem] items-start text-[#282826]">
              <h1 className="geographm text-[4rem] leading-[4.8rem]  mb-8 ">
                Access to Equity
              </h1>
              <p className="geographr w-[47.2rem] text-[1.8rem] leading-[2.4rem]">
                As an associate veterinarian, you have a unique opportunity to
                invest in the hospital where you work. As a co-owner, you’ll
                share in the hospital’s success and gain entrepreneurial
                experience that complements your medical training.
              </p>
            </div>
          </div>
          <div className="row1 flex justify-center mt-[20rem]">
            <div className="r1 mx-[3.9rem] h-[40rem] w-[58.2rem] bg-slate-300 rounded-[2.4rem] relative" style={{background : `url(${img3})`, backgroundPosition : "center", backgroundSize : "cover"}}>
            <div className="w-[22.4rem] h-[21.6rem]  absolute left-[52.2rem] bottom-[24.88rem] flex justify-center items-center">
                <p className="text-[#262626] absolute top-[4.2rem] left-[4.1rem]  text-[10rem] leading-[8rem] tracking-[-.2rem] w-[14.2rem] h-[13.2rem] flex justify-center items-center">3</p>
              <img src={Blob3} alt="" />
              </div>
            </div>
            <div className="r2 mx-[3.9rem] flex flex-col justify-end pb-[6rem] items-start text-[#282826]">
              <h1 className="geographm text-[4rem] leading-[4.8rem]  mb-8 ">
                Pursue the Path <br /> to Ownership
              </h1>
              <p className="geographr w-[47.2rem] text-[1.8rem] leading-[2.4rem]">
                Co-owning and running your own hospital is the natural
                progression for many—though not all—of our associates. If that’s
                your goal, we’re ready to help you achieve it.
              </p>
            </div>
          </div> */}
        </div>
        <h1
          className={` mx-auto   text-center ${
            mobile
              ? "text-[1.8rem] leading-[2.4rem] mb-[.8rem]"
              : "text-[7rem] leading-[8rem] mt-[10rem] mb-[8rem]"
          }`}
        >
          Get{" "}
          <span className={`${mobile ? "text-[#262626]" : "text-yellow-500"}`}>
            {" "}
            Started!
          </span>
        </h1>
        <button
          className={`geographr border  border-black   rounded-[5rem] mx-auto  hover:bg-[#FEC20D] hover:border-[#FEC20D] ${
            mobile
              ? "text-[1.3rem] leading-[1.1rem] w-[22.5rem] h-[3.2rem]"
              : "w-[26rem] h-[5rem]"
          }`}
        >
          LEARN ABOUT PARTNERSHIP
        </button>
      </section>

      <section
        className={`bg-[#F2EAE5]  flex flex-col items-end ${
          mobile ? "mt-[3.2rem] pb-[4.4rem]" : "mt-[9.9rem] pb-[10rem]"
        }`}
      >
        <h1
          className={`    text-[#262626] w-screen  ${
            mobile
              ? "pl-[2.4rem] pt-[1.6rem] mb-[.8rem] text-[1.2rem]  leading-[1.4rem] geographr"
              : "mb-[10rem] text-[4rem]  leading-[4.8rem] geographm pt-[10rem] pl-[8.9rem]"
          }`}
        >
          Modular
        </h1>
        {!mobile ? (
          <div className={`Modular max-w-[127.7rem]`}>
            <Slider {...settings}>
              <div className={`min-w-[58.2rem] mr-[2.3rem]`}>
                <div
                  className={`w-[100%]  bg-slate-400 m-0 h-[40rem] center`}
                  style={{
                    background: `url(${mobile ? modular1M : five})`,
               
                  }}
                ></div>
                <p
                  className={`geographr  mt-[2rem] text-[1.4rem] leading-[1.8rem]`}
                >
                  Image Caption
                </p>
              </div>
              <div className={`min-w-[36.2rem] mr-[2.3rem]`}>
                <div
                  className={`w-[100%]  bg-slate-400 m-0 h-[40rem] center`}
                  style={{
                    background: `url(${mobile ? modular1M : six})`,
                   
                  }}
                ></div>
                <p
                  className={`geographr  mt-[2rem] text-[1.4rem] leading-[1.8rem]`}
                >
                  Image Caption
                </p>
              </div>
              <div className={`min-w-[58.2rem] mr-[2.3rem]`}>
                <div
                  className={`w-[100%]  bg-slate-400 m-0 h-[40rem] center`}
                  style={{
                    background: `url(${mobile ? modular1M : seven})`,
                   
                  }}
                ></div>
                <p
                  className={`geographr  mt-[2rem] text-[1.4rem] leading-[1.8rem]`}
                >
                  Image Caption
                </p>
              </div>
              <div className={`min-w-[58.2rem] mr-[2.3rem]`}>
                <div
                  className={`w-[100%]  bg-slate-400 m-0 h-[40rem]`}
                  style={{
                    background: `url(${mobile ? modular1M : eight})`,
                    backgroundSize: "cover",
                  }}
                ></div>
                <p
                  className={`geographr  mt-[2rem] text-[1.4rem] leading-[1.8rem]`}
                >
                  Image Caption
                </p>
              </div>
            </Slider>
            {/* <div className="min-w-[36.2rem] mr-[2.3rem]">
              <div className="w-[100%] h-[40rem] bg-slate-400 m-0" style={{background : `url(${six})`, backgroundSize : "cover"}}></div>
              <p className="geographr text-[1.4rem] mt-[2rem] leading-[1.8rem]">Image Caption</p>
            </div>
            <div className="min-w-[58.2rem] mr-[2.3rem]">
              <div className="w-[100%] h-[40rem] bg-slate-400 m-0" style={{background : `url(${seven})`, backgroundSize : "cover"}}></div>
              <p className=" geographr text-[1.4rem] mt-[2rem] leading-[1.8rem]">Image Caption</p>
            </div>
            <div className="min-w-[58.2rem] mr-[2.3rem]">
              <div className="w-[100%] h-[40rem] bg-slate-400 m-0" style={{background : `url(${eight})`, backgroundSize : "cover"}}></div>
              <p className="geographr text-[1.4rem] mt-[2rem] leading-[1.8rem]">Image Caption</p>
            </div> */}
          </div>
        ) : (
          <div
            className={`flex Review Modular max-w-[100%] pl-[2.4rem]`}
            ref={modular}
            style={{
              scrollSnapType: "x mandatory",
              overflowX: "scroll",
              overflowY: "hidden",
            }}
          >
            {/* <Slider {...settings}> */}
            <div className={`min-w-[34.2rem] mr-[2.3rem]`}>
              <div
                className={`w-[100%]  bg-slate-400 m-0 h-[19.3rem]`}
                style={{
                  background: `url(${mobile ? modular1M : five})`,
                  backgroundSize: "cover",
                }}
              ></div>
              <p
                className={`geographr  mt-[.8rem] text-[.9rem] leading-[1.1rem]`}
              >
                Image Caption
              </p>
            </div>
            <div className={`min-w-[34.2rem] mr-[2.3rem]`}>
              <div
                className={`w-[100%]  bg-slate-400 m-0 h-[19.3rem]`}
                style={{
                  background: `url(${mobile ? modular1M : five})`,
                  backgroundSize: "cover",
                }}
              ></div>
              <p
                className={`geographr  mt-[.8rem] text-[.9rem] leading-[1.1rem]`}
              >
                Image Caption
              </p>
            </div>
            <div className={`min-w-[34.2rem] mr-[2.3rem]`}>
              <div
                className={`w-[100%]  bg-slate-400 m-0 h-[19.3rem]`}
                style={{
                  background: `url(${mobile ? modular1M : five})`,
                  backgroundSize: "cover",
                }}
              ></div>
              <p
                className={`geographr  mt-[.8rem] text-[.9rem] leading-[1.1rem]`}
              >
                Image Caption
              </p>
            </div>
            <div className={`min-w-[34.2rem] mr-[2.3rem]`}>
              <div
                className={`w-[100%]  bg-slate-400 m-0 h-[19.3rem]`}
                style={{
                  background: `url(${mobile ? modular1M : five})`,
                  backgroundSize: "cover",
                }}
              ></div>
              <p
                className={`geographr  mt-[.8rem] text-[.9rem] leading-[1.1rem]`}
              >
                Image Caption
              </p>
            </div>

            {/* </Slider> */}
            {/* <div className="min-w-[36.2rem] mr-[2.3rem]">
              <div className="w-[100%] h-[40rem] bg-slate-400 m-0" style={{background : `url(${six})`, backgroundSize : "cover"}}></div>
              <p className="geographr text-[1.4rem] mt-[2rem] leading-[1.8rem]">Image Caption</p>
            </div>
            <div className="min-w-[58.2rem] mr-[2.3rem]">
              <div className="w-[100%] h-[40rem] bg-slate-400 m-0" style={{background : `url(${seven})`, backgroundSize : "cover"}}></div>
              <p className=" geographr text-[1.4rem] mt-[2rem] leading-[1.8rem]">Image Caption</p>
            </div>
            <div className="min-w-[58.2rem] mr-[2.3rem]">
              <div className="w-[100%] h-[40rem] bg-slate-400 m-0" style={{background : `url(${eight})`, backgroundSize : "cover"}}></div>
              <p className="geographr text-[1.4rem] mt-[2rem] leading-[1.8rem]">Image Caption</p>
            </div> */}
          </div>
        )}
        <div
          className={` mt-[2.8rem]  w-[100%] z-10 px-[2.4rem] justify-between items-center ${
            mobile ? "flex" : "hidden"
          }`}
        >
          <button
            className="h-[.91rem] w-[1.84rem]"
            onClick={() => {
              modular.current.scrollLeft -= 370;
              setmodularScroll(modularScroll - 370);
            }}
          >
            <img src={arrow} alt="" className="rotate-90" />
          </button>
          <div className="flex justify-center items-center">
            <div
              className={`w-[1rem] h-[1rem]  rounded-full mr-[.8rem] border-[1px] border-black ${
                modularScroll == 0 ? "bg-black" : "bg-transparent"
              }`}
              onClick={() => {
                setmodularScroll(0);
                modular.current.scrollLeft = 0;
              }}
            ></div>
            <div
              className={`w-[1rem] h-[1rem]  rounded-full mr-[.8rem] border-[1px] border-black ${
                modularScroll == 370 ? "bg-black" : "bg-transparent"
              }`}
              onClick={() => {
                setmodularScroll(370);
                modular.current.scrollLeft = 370;
              }}
            ></div>
            <div
              className={`w-[1rem] h-[1rem]  rounded-full mr-[.8rem] border-[1px] border-black ${
                modularScroll == 740 ? "bg-black" : "bg-transparent"
              }`}
              onClick={() => {
                setmodularScroll(740);
                modular.current.scrollLeft = 740;
              }}
            ></div>
            <div
              className={`w-[1rem] h-[1rem]  rounded-full  border-[1px] border-black ${
                modularScroll > 740 ? "bg-black" : "bg-transparent"
              }`}
              onClick={() => {
                setmodularScroll(1094);
                modular.current.scrollLeft = 1094;
              }}
            ></div>
          </div>
          <button
            className="h-[.913rem] w-[1.84rem]"
            onClick={() => {
              modular.current.scrollLeft += 370;
              setmodularScroll(modularScroll + 370);
              console.log(modularScroll);
            }}
          >
            <img src={arrow} alt="" className="-rotate-90" />
          </button>
        </div>
      </section>

      <section className={`${mobile ? "bg-white" : "bg-[#FAF6F4]"}`}>
        <h1
          className={`text-center  ${
            mobile
              ? "text-[2.4rem] leading-[2.6rem] pt-[4rem] pb-[2.4rem]"
              : " py-[10rem] text-[7rem] leading-[8rem] "
          }`}
        >
          Associate Vets Benefits
        </h1>
        <div
          className={`mx-auto  flex justify-between items-start ${
            mobile ? " w-[34.2rem] flex-col mb-[4rem]" : " w-[129.7rem]"
          }`}
        >
          <div>
            <div
              className={` ${
                mobile
                  ? "h-auto w-full bg-transparent"
                  : "h-[1.8rem] w-[8.2rem] bg-[#FEC20D]"
              }`}
            >
              <h1
                className={` text-[#282826] ${
                  mobile
                    ? "text-center m-auto text-[1.8rem] leading-[2.4rem] "
                    : "text-[1.4rem] leading-[1.8rem] geographm  relative top-[-.6rem] left-[-.8rem]"
                }`}
              >
                FINANCIAL
              </h1>
            </div>
            <div
              className={`${
                mobile
                  ? "w-[34.2em] m-auto h-auto bg-transparent mt-[2.4rem]"
                  : "w-[41.7rem] h-[20rem] bg-white mt-[3.3rem]"
              } `}
            >
              <h1
                className={` geographr flex justify-start items-center ${
                  mobile
                    ? "text-[1.4rem] leading-[1.6rem] w-[100%] h-[3.2rem] border-b-[.5px] border-[#B5B3B2]"
                    : "text-[1.4rem] leading-[1.8rem] w-[41.7] h-[5rem] pl-[5.6rem]"
                }`}
              >
                Leading compensation and bonuses
              </h1>
              <h1
                className={`geographr flex justify-start items-center ${
                  mobile
                    ? "text-[1.4rem] leading-[1.6rem] w-[100%] h-[3.5rem] border-b-[.5px] border-[#B5B3B2]"
                    : "text-[1.4rem] leading-[1.8rem] w-[41.7] h-[5rem] pl-[5.6rem] bg-[#FDFBFA]"
                }`}
              >
                Annual raises
              </h1>
              <h1
                className={`geographr flex justify-start items-center ${
                  mobile
                    ? "text-[1.4rem] leading-[1.6rem] w-[100%] h-[3.5rem] border-b-[.5px] border-[#B5B3B2]"
                    : "text-[1.4rem] leading-[1.8rem] w-[41.7] h-[5rem] pl-[5.6rem]"
                }`}
              >
                401k matching
              </h1>
              <h1
                className={`geographr flex justify-start items-center ${
                  mobile
                    ? "text-[1.4rem] leading-[1.6rem] w-[100%] h-[3.5rem] border-b-[.5px] border-[#B5B3B2]"
                    : "text-[1.4rem] leading-[1.8rem] w-[41.7] h-[5rem] pl-[5.6rem] bg-[#FDFBFA]"
                }`}
              >
                Profit sharing
              </h1>
              {/* <h1 className="geographr pl-[5.6rem] text-[1.4rem] leading-[1.8rem] w-[41.7] h-[5rem] bg-[#fdfbfa] flex justify-start items-center">
              
              </h1>
              <h1 className="geographr pl-[5.6rem] text-[1.4rem] leading-[1.8rem] w-[41.7] h-[5rem] flex justify-start items-center">
               
              </h1>
              <h1 className="geographr pl-[5.6rem] text-[1.4rem] leading-[1.8rem] w-[41.7] h-[5rem] bg-[#fdfbfa] flex justify-start items-center">
                
              </h1> */}
            </div>
          </div>
          <div>
            <div
              className={` ${
                mobile
                  ? "mt-[2.4rem] h-auto w-full bg-transparent"
                  : "h-[1.8rem] w-[20rem] bg-[#FEC20D]"
              }`}
            >
              <h1
                className={` text-[#282826] ${
                  mobile
                    ? "text-center m-auto text-[1.8rem] leading-[2.4rem] "
                    : "text-[1.4rem] leading-[1.8rem] geographm  relative top-[-.6rem] left-[-.8rem]"
                }`}
              >
                QUALITY OF CARE & CAREER
              </h1>
            </div>
            <div
              className={`${
                mobile
                  ? " w-[34.2em] m-auto h-auto bg-transparent mt-[2.4rem]"
                  : "w-[41.7rem] h-[auto] bg-white mt-[3.3rem]"
              } `}
            >
              <h1
                className={`geographr flex justify-start items-center ${
                  mobile
                    ? "text-[1.4rem] leading-[1.6rem] w-[100%] h-[3.2rem] border-b-[.5px] border-[#B5B3B2]"
                    : "text-[1.4rem] leading-[1.8rem] w-[41.7] h-[5rem] pl-[5.6rem]"
                }`}
              >
                Favorable staffing ratios
              </h1>
              <h1
                className={`geographr flex justify-start items-center ${
                  mobile
                    ? "text-[1.4rem] leading-[1.6rem] w-[100%] h-[3.5rem] border-b-[.5px] border-[#B5B3B2]"
                    : "text-[1.4rem] leading-[1.8rem] w-[41.7] h-[5rem] pl-[5.6rem] bg-[#FDFBFA]"
                }`}
              >
                Practice medicine alongside hospital owners
              </h1>
              <h1
                className={`geographr flex justify-start items-center ${
                  mobile
                    ? "text-[1.4rem] leading-[1.6rem] w-[100%] h-[3.5rem] border-b-[.5px] border-[#B5B3B2]"
                    : "text-[1.4rem] leading-[1.8rem] w-[41.7] h-[5rem] pl-[5.6rem]"
                }`}
              >
                Continuing education & license support
              </h1>
              <h1
                className={`geographr flex justify-start items-center ${
                  mobile
                    ? "text-[1.4rem] leading-[1.6rem] w-[100%] h-[3.5rem] border-b-[.5px] border-[#B5B3B2]"
                    : "text-[1.4rem] leading-[1.8rem] w-[41.7] h-[5rem] pl-[5.6rem] bg-[#FDFBFA]"
                }`}
              >
                Hospital-level growth opportunities
              </h1>
              <h1
                className={`geographr flex justify-start items-center ${
                  mobile
                    ? "text-[1.4rem] leading-[1.6rem] w-[100%] h-[3.5rem] border-b-[.5px] border-[#B5B3B2]"
                    : "text-[1.4rem] leading-[1.8rem] w-[41.7] h-[5rem] pl-[5.6rem]"
                }`}
              >
                Best-in-class facilities and technology
              </h1>
              {/* <h1 className="geographr pl-[5.6rem] text-[1.4rem] leading-[1.8rem] w-[41.7] h-[5rem] bg-[#fdfbfa] flex justify-start items-center">
              
              </h1>
              <h1 className="geographr pl-[5.6rem] text-[1.4rem] leading-[1.8rem] w-[41.7] h-[5rem] flex justify-start items-center">
               
              </h1>
              <h1 className="geographr pl-[5.6rem] text-[1.4rem] leading-[1.8rem] w-[41.7] h-[5rem] bg-[#fdfbfa] flex justify-start items-center">
                
              </h1> */}
            </div>
          </div>
          <div>
            <div
              className={` ${
                mobile
                  ? " mt-[2.4rem] h-auto w-full bg-transparent"
                  : "h-[1.8rem] w-[11.7rem] bg-[#FEC20D]"
              }`}
            >
              <h1
                className={` text-[#282826] ${
                  mobile
                    ? "text-center m-auto text-[1.8rem] leading-[2.4rem] "
                    : "text-[1.4rem] leading-[1.8rem] geographm  relative top-[-.6rem] left-[-.8rem]"
                }`}
              >
                QUALITY OF LIFE
              </h1>
            </div>
            <div
              className={`${
                mobile
                  ? "w-[34.2em] m-auto h-auto bg-transparent mt-[2.4rem]"
                  : "w-[41.7rem] h-[20rem] bg-white mt-[3.3rem]"
              } `}
            >
              <h1
                className={`geographr flex justify-start items-center ${
                  mobile
                    ? "text-[1.4rem] leading-[1.6rem] w-[100%] h-[3.2rem] border-b-[.5px] border-[#B5B3B2]"
                    : "text-[1.4rem] leading-[1.8rem] w-[41.7] h-[5rem] pl-[5.6rem]"
                }`}
              >
                Paid time off
              </h1>
              <h1
                className={`geographr flex justify-start items-center ${
                  mobile
                    ? "text-[1.4rem] leading-[1.6rem] w-[100%] h-[3.5rem] border-b-[.5px] border-[#B5B3B2]"
                    : "text-[1.4rem] leading-[1.8rem] w-[41.7] h-[5rem] pl-[5.6rem] bg-[#FDFBFA]"
                }`}
              >
                Paid holidays
              </h1>
              <h1
                className={`geographr flex justify-start items-center ${
                  mobile
                    ? "text-[1.4rem] leading-[1.6rem] w-[100%] h-[3.5rem] border-b-[.5px] border-[#B5B3B2]"
                    : "text-[1.4rem] leading-[1.8rem] w-[41.7] h-[5rem] pl-[5.6rem]"
                }`}
              >
                FIGs scrubs
              </h1>
              <h1
                className={`geographr flex justify-start items-center ${
                  mobile
                    ? "text-[1.4rem] leading-[1.6rem] w-[100%] h-[3.5rem] border-b-[.5px] border-[#B5B3B2]"
                    : "text-[1.4rem] leading-[1.8rem] w-[41.7] h-[5rem] pl-[5.6rem] bg-[#FDFBFA]"
                }`}
              >
                Profit sharing
              </h1>
              {/* <h1 className="geographr pl-[5.6rem] text-[1.4rem] leading-[1.8rem] w-[41.7] h-[5rem] bg-[#fdfbfa] flex justify-start items-center">
              
              </h1>
              <h1 className="geographr pl-[5.6rem] text-[1.4rem] leading-[1.8rem] w-[41.7] h-[5rem] flex justify-start items-center">
               
              </h1>
              <h1 className="geographr pl-[5.6rem] text-[1.4rem] leading-[1.8rem] w-[41.7] h-[5rem] bg-[#fdfbfa] flex justify-start items-center">
                
              </h1> */}
            </div>
          </div>

          {/* <div className="">
            <div className="h-[1.8rem] w-[20rem] bg-[#FEC20D]">
              <h1 className="geographm text-[1.4rem] leading-[1.8rem] relative top-[-.6rem] left-[-.8rem] text-[#282826]">
                QUALITY OF CARE & CAREER
              </h1>
            </div>
            <div className="w-[41.7rem] h-[25rem] bg-white mt-[3.3rem]">
              <h1 className="geographr pl-[5.6rem] text-[1.4rem] leading-[1.8rem] w-[41.7] h-[5rem]  flex justify-start items-center">
                Favorable staffing ratios
              </h1>
              <h1 className="geographr pl-[5.6rem] text-[1.4rem] leading-[1.8rem] w-[41.7] h-[5rem] bg-[#fdfbfa] flex justify-start items-center">
                Practice medicine alongside hospital owners
              </h1>
              <h1 className="geographr pl-[5.6rem] text-[1.4rem] leading-[1.8rem] w-[41.7] h-[5rem] flex justify-start items-center">
                Continuing education & license support
              </h1>
              <h1 className="geographr pl-[5.6rem] text-[1.4rem] leading-[1.8rem] w-[41.7] h-[5rem] bg-[#fdfbfa] flex justify-start items-center">
                Hospital-level growth opportunities
              </h1>
              <h1 className="geographr pl-[5.6rem] text-[1.4rem] leading-[1.8rem] w-[41.7] h-[5rem]  flex justify-start items-center">
                Best-in-class facilities and technology
              </h1>
            </div>
          </div>
          <div className="">
            <div className="h-[1.8rem] w-[20rem] bg-[#FEC20D]">
              <h1 className="geographm  text-[1.4rem] leading-[1.8rem] relative top-[-.6rem] left-[-.8rem] text-[#282826]">
                QUALITY OF LIFE
              </h1>
            </div>
            <div className="w-[41.7rem] h-[20rem] bg-white mt-[3.3rem]">
              <h1 className="geographr pl-[5.6rem] text-[1.4rem] leading-[1.8rem] w-[41.7] h-[5rem] flex justify-start items-center">
                Leading compensation and bonuses
              </h1>
              <h1 className="geographr pl-[5.6rem] text-[1.4rem] leading-[1.8rem] w-[41.7] h-[5rem] bg-[#fdfbfa] flex justify-start items-center">
                Annual raises
              </h1>
              <h1 className="geographr pl-[5.6rem] text-[1.4rem] leading-[1.8rem] w-[41.7] h-[5rem] flex justify-start items-center">
                401k matching
              </h1>
              <h1 className="geographr pl-[5.6rem] text-[1.4rem] leading-[1.8rem] w-[41.7] h-[5rem] bg-[#fdfbfa] flex justify-start items-center">
                Profit sharing
              </h1>
            </div>
          </div> */}
        </div>
      </section>

      {mobile ? (
        ""
      ) : (
        <section className="bg-[#FAF6F4] pt-40 flex justify-center items-center flex-col">
          <h1 className="text-[7rem] mx-auto mb-[9rem] text-center leading-[8rem]  ">
            Launch your career
            <span className="text-yellow-500"> now</span>
          </h1>

          <div>
            <div className="h-[6rem] w-[118.7rem] flex bg-white justify-center items-center my-[1rem]">
              <h1 className="geographm text-[1.8rem] leading-[2.4rem] text-[#282826]  w-[43.6rem]">
                Veterinary Technician - The Gultch
              </h1>
              <p className="geographr text-[1.4rem] leading-[1.8rem] ml-[33.6rem] w-[25.2rem] mr-[4.8rem]">
                Nashville, TN
              </p>
              <p className="w-[3.2rem] h-[3.2rem] border border-black rounded-full text-[2rem] flex justify-center items-center">
                <i class="fa-solid fa-chevron-right text-[#262626] text-[1.4rem]"></i>
              </p>
            </div>
            <div className="h-[6rem] w-[118.7rem] flex bg-white justify-center items-center my-[1rem]">
              <h1 className="geographm text-[1.8rem] leading-[2.4rem] text-[#282826]  w-[43.6rem]">
                Veterinary Technician - West Loop
              </h1>
              <p className="geographr text-[1.4rem] leading-[1.8rem] ml-[33.6rem] w-[25.2rem] mr-[4.8rem]">
                Chicago, IL
              </p>
              <p className="w-[3.2rem] h-[3.2rem] border border-black rounded-full text-[2rem] flex justify-center items-center">
                <i class="fa-solid fa-chevron-right text-[#262626] text-[1.4rem]"></i>
              </p>
            </div>
            <div className=" h-[6rem] w-[118.7rem] flex bg-white justify-center items-center my-[1rem]">
              <h1 className="geographm text-[1.8rem] leading-[2.4rem] text-[#282826]  w-[43.6rem]">
                Veterinary Technician - Coconut Grove
              </h1>
              <p className="geographr text-[1.4rem] leading-[1.8rem] ml-[33.6rem] w-[25.2rem] mr-[4.8rem]">
                Miami, FL
              </p>
              <p className="w-[3.2rem] h-[3.2rem] border border-black rounded-full text-[2rem] flex justify-center items-center">
                <i class="fa-solid fa-chevron-right text-[#262626] text-[1.4rem]"></i>
              </p>
            </div>
            <div className="h-[6rem] w-[118.7rem] flex bg-white justify-center items-center my-[1rem]">
              <h1 className="geographm text-[1.8rem] leading-[2.4rem] text-[#282826]  w-[43.6rem]">
                Veterinary Technician - Wynwood
              </h1>
              <p className="geographr text-[1.4rem] leading-[1.8rem] ml-[33.6rem] w-[25.2rem] mr-[4.8rem]">
                Miami, FL
              </p>
              <p className="w-[3.2rem] h-[3.2rem] border border-black rounded-full text-[2rem] flex justify-center items-center">
                <i class="fa-solid fa-chevron-right text-[#262626] text-[1.4rem]"></i>
              </p>
            </div>
            <div className="h-[6rem] w-[118.7rem] flex bg-white justify-center items-center my-[1rem]">
              <h1 className="geographm text-[1.8rem] leading-[2.4rem] text-[#282826]  w-[43.6rem]">
                Veterinary Technician - The Gultch
              </h1>
              <p className="geographr text-[1.4rem] leading-[1.8rem] ml-[33.6rem] w-[25.2rem] mr-[4.8rem]">
                Nashville, TN
              </p>
              <p className="w-[3.2rem] h-[3.2rem] border border-black rounded-full text-[2rem] flex justify-center items-center">
                <i class="fa-solid fa-chevron-right text-[#262626] text-[1.4rem]"></i>
              </p>
            </div>
            <div className="= h-[6rem] w-[118.7rem] flex bg-white justify-center items-center my-[1rem]">
              <h1 className="geographm text-[1.8rem] leading-[2.4rem] text-[#282826]  w-[43.6rem]">
                Veterinary Technician - West Loop
              </h1>
              <p className="geographr text-[1.4rem] leading-[1.8rem] ml-[33.6rem] w-[25.2rem] mr-[4.8rem]">
                Chicago, IL
              </p>
              <p className="w-[3.2rem] h-[3.2rem] border border-black rounded-full text-[2rem] flex justify-center items-center">
                <i class="fa-solid fa-chevron-right text-[#262626] text-[1.4rem]"></i>
              </p>
            </div>
            <div className="h-[6rem] w-[118.7rem] flex bg-white justify-center items-center mt-[8rem]">
              <h1 className="geographm text-[1.8rem] leading-[2.4rem] text-[#282826]  w-[43.6rem]">
                Veterinary Technician - Wynwood
              </h1>
              <p className="geographr text-[1.4rem] leading-[1.8rem] ml-[33.6rem] w-[25.2rem] mr-[4.8rem]">
                Miami, FL
              </p>
              <p className="w-[3.2rem] h-[3.2rem] border border-black rounded-full text-[2rem] flex justify-center items-center">
                <i class="fa-solid fa-chevron-right text-[#262626] text-[1.4rem]"></i>
              </p>
            </div>
          </div>

          <button className="geographr border border-black px-[3rem] py-[1.6rem] text-[1.4rem] leading-[2rem] rounded-[5rem] mx-auto mt-[8rem]">
            VIEW ALL
          </button>
        </section>
      )}

      <section
        className={`bg-[#FAF6F4]  flex flex-col justify-center items-end ${
          mobile ? "pt-[3.2rem] pb-[3.2rem]" : "pt-[9.9rem] pb-[14rem]"
        }`}
      >
        <h1
          className={`  mx-auto mb-[2.4rem] h-[5.6rem] flex justify-center items-center    w-screen  ${
            mobile
              ? "leading-[2.6rem] geographr text-center text-[2.4rem]"
              : "pl-[8.9rem] leading-[4.8rem] text-left geographm text-[4rem]"
          }`}
        >
          <span
            className={` ${
              mobile ? "text-[#262626] geographr" : "text-yellow-500 geographm"
            }`}
          >
            {" "}
            Good Stories{" "}
          </span>
          from GoodVets
        </h1>
        {!mobile ? (
          <div className="  GStories max-w-[127.7rem]" id="cards">
            <Slider {...settings}>
              <div className=" h-[58.4rem] bg-white w-[41.7rem] rounded-[.6rem]">
                <div
                  className="w-[41.7rem] h-[40rem] bg-center bg-cover relative "
                  style={{
                    background: `url(${One})`,
                    backgroundSize: "cover",
                    borderRadius: "6px 6px 0 0 ",
                  }}
                >
                  <button className="w-[8.4rem] h-[3rem] bg-transparent border-[.1rem] atlasr border-white rounded-[1.5rem] text-[1.4rem] leading-[2rem] text-white absolute bottom-[2rem] left-[2rem] tracking-[.34px]]">
                    HOW TO
                  </button>
                </div>
                <p className="grennetesm text-[2.2rem] leading-[2.9rem]  mt-[3rem] ml-[2rem] w-[34.3rem]">
                  How to build a successful career in the veterinary industry.
                </p>
                <p className="geographr text-[1.4rem] leading-[1.8rem] mt-[4rem] ml-[2rem] ">
                  BY AUTHOR NAME <br />
                  <span className="text-[#D9C7B8]"> AUTHOR TITLE</span>
                </p>
              </div>
              <div className=" h-[58.4rem] bg-white w-[41.7rem] rounded-[.6rem]">
                <div
                  className="w-[41.7rem] h-[40rem] bg-slate-400 relative"
                  style={{
                    background: `url(${two})`,
                    backgroundSize: "cover",
                    borderRadius: "6px 6px 0 0 ",
                  }}
                >
                  <button className="w-[12.2rem] h-[3rem] bg-transparent border-[.1rem] atlasr border-white rounded-[1.5rem] text-[1.4rem] leading-[2rem] text-white absolute bottom-[2rem] left-[2rem] tracking-[.34px]]">
                    MENTORSHIP
                  </button>
                </div>
                <p className=" grennetesm text-[2.2rem] leading-[2.9rem]  mt-[3rem] ml-[2rem] w-[34.3rem]">
                  Dr. Sheela Moss on how being a mentor enriches her career.
                </p>
                <p className="geographr text-[1.4rem] leading-[1.8rem] mt-[4rem] ml-[2rem] ">
                  BY AUTHOR NAME <br />
                  <span className="text-[#D9C7B8]"> AUTHOR TITLE</span>
                </p>
              </div>
              <div className=" h-[58.4rem] bg-white w-[41.7rem] rounded-[.6rem]">
                <div
                  className="w-[41.7rem] h-[40rem] bg-slate-400 relative"
                  style={{
                    background: `url(${three})`,
                    backgroundSize: "cover",
                    borderRadius: "6px 6px 0 0 ",
                  }}
                >
                  <button className="w-[13.2rem] h-[3rem] bg-transparent border-[.1rem] atlasr border-white rounded-[1.5rem] text-[1.4rem] leading-[2rem] text-white absolute bottom-[2rem] left-[2rem] tracking-[.34px]]">
                    VIRTUAL TOUR
                  </button>
                </div>
                <p className="grennetesm text-[2.2rem] leading-[2.9rem]  mt-[3rem] ml-[2rem] w-[34.3rem]">
                  Dr. Sheela Moss on how being a mentor enriches her career.
                </p>
                <p className="geographr text-[1.4rem] leading-[1.8rem] mt-[4rem] ml-[2rem] ">
                  BY AUTHOR NAME <br />
                  <span className="text-[#D9C7B8]"> AUTHOR TITLE</span>
                </p>
              </div>
              <div className=" h-[58.4rem] bg-white w-[41.7rem] rounded-[.6rem]">
                <div
                  className="w-[41.7rem] h-[40rem] bg-slate-400 relative"
                  style={{
                    background: `url(${four})`,
                    backgroundSize: "cover",
                    borderRadius: "6px 6px 0 0 ",
                  }}
                >
                  <button className="w-[13.2rem] h-[3rem] bg-transparent border-[.1rem] atlasr border-white rounded-[1.5rem] text-[1.4rem] leading-[2rem] text-white absolute bottom-[2rem] left-[2rem] tracking-[.34px]]">
                    VIRTUAL TOUR
                  </button>
                </div>
                <p className="grennetesm text-[2.2rem] leading-[2.9rem]  mt-[3rem] ml-[2rem] w-[34.3rem]">
                  Dr. Sheela Moss on how being a mentor enriches her career.
                </p>
                <p className="geographr text-[1.4rem] leading-[1.8rem] mt-[4rem] ml-[2rem] ">
                  BY AUTHOR NAME <br />
                  <span className="text-[#D9C7B8]"> AUTHOR TITLE</span>
                </p>
              </div>

              {/* <div className="ml-[7.8rem] h-[58.4rem] bg-white w-[41.7rem] overflow-hidden">
            <div className="w-[41.7rem] h-[40rem] bg-slate-400"></div>
            <p className="text-[2.2rem] leading-[2.9rem]  mt-[3rem] ml-[2rem] w-[34.3rem]">
              Take a Tour of GoodVets in Streeterville, Chicago.
            </p>
            <p className="text-[1.4rem] leading-[1.8rem] mt-[2rem] ml-[2rem] ">
              BY AUTHOR NAME <br />
              <span className="text-[#D9C7B8]"> AUTHOR TITLE</span>
            </p>
          </div> */}
            </Slider>
          </div>
        ) : (
          <div
            ref={GS}
            className="Review GStories flex justify-start items-start pl-[2.4rem] max-w-[100%]"
            id="cards"
            style={{
              scrollSnapType: "x mandatory",
              overflowX: "scroll",
              overflowY: "hidden",
            }}
          >
            {/* <Slider {...settings}> */}
            <div className="min-w-[27.3rem] flex h-[15.2rem] mr-[1.6rem]">
              <img src={GSM1} alt="" />
              <div className="ml-[.8rem] flex justify-between flex-col">
                <div>
                  <p className="text-[#262626] text-[.9rem] leading-[1.1rem] geographr">
                    HOW TO
                  </p>
                  <p className="text-[#262626] text-[1.4rem] leading-[1.6rem] my-[.8rem]">
                    This is an Article Title
                  </p>
                  <p className="text-[#262626] text-[1.1rem] leading-[1.4rem] geographr">
                    Build a successful career in the veterinary industry.
                  </p>
                </div>
                <button className="border-[.75px] geographr border-[#262626] w-[9.1rem] h-[1.9rem] rounded-[5rem]">
                  READ STORY
                </button>
              </div>
            </div>
            <div className="min-w-[28.9rem] flex justify-end border-l-[.5px] mr-[1.6rem] border-[#B5B3B2] h-[15.2rem]">
              <img src={GSM1} alt="" />
              <div className="ml-[.8rem] flex justify-between flex-col w-[13.7rem]">
                <div>
                  <p className="text-[#262626] text-[.9rem] leading-[1.1rem] geographr">
                    HOW TO
                  </p>
                  <p className="text-[#262626] text-[1.4rem] leading-[1.6rem] my-[.8rem]">
                    This is an Article Title
                  </p>
                  <p className="text-[#262626] text-[1.1rem] leading-[1.4rem] geographr">
                    Build a successful career in the veterinary industry.
                  </p>
                </div>
                <button className="border-[.75px] geographr border-[#262626] w-[9.1rem] h-[1.9rem] rounded-[5rem]">
                  READ STORY
                </button>
              </div>
            </div>
            <div className="min-w-[28.9rem] flex justify-end border-l-[.5px] mr-[1.6rem] border-[#B5B3B2] h-[15.2rem]">
              <img src={GSM1} alt="" />
              <div className="ml-[.8rem] flex justify-between flex-col w-[13.7rem]">
                <div>
                  <p className="text-[#262626] text-[.9rem] leading-[1.1rem] geographr">
                    HOW TO
                  </p>
                  <p className="text-[#262626] text-[1.4rem] leading-[1.6rem] my-[.8rem]">
                    This is an Article Title
                  </p>
                  <p className="text-[#262626] text-[1.1rem] leading-[1.4rem] geographr">
                    Build a successful career in the veterinary industry.
                  </p>
                </div>
                <button className="border-[.75px] geographr border-[#262626] w-[9.1rem] h-[1.9rem] rounded-[5rem]">
                  READ STORY
                </button>
              </div>
            </div>
            <div className="min-w-[28.9rem] flex justify-end border-l-[.5px] mr-[1.6rem] border-[#B5B3B2] h-[15.2rem]">
              <img src={GSM1} alt="" />
              <div className="ml-[.8rem] flex justify-between flex-col w-[13.7rem]">
                <div>
                  <p className="text-[#262626] text-[.9rem] leading-[1.1rem] geographr">
                    HOW TO
                  </p>
                  <p className="text-[#262626] text-[1.4rem] leading-[1.6rem] my-[.8rem]">
                    This is an Article Title
                  </p>
                  <p className="text-[#262626] text-[1.1rem] leading-[1.4rem] geographr">
                    Build a successful career in the veterinary industry.
                  </p>
                </div>
                <button className="border-[.75px] geographr border-[#262626] w-[9.1rem] h-[1.9rem] rounded-[5rem]">
                  READ STORY
                </button>
              </div>
            </div>

            {/* <div className="ml-[7.8rem] h-[58.4rem] bg-white w-[41.7rem] overflow-hidden">
            <div className="w-[41.7rem] h-[40rem] bg-slate-400"></div>
            <p className="text-[2.2rem] leading-[2.9rem]  mt-[3rem] ml-[2rem] w-[34.3rem]">
              Take a Tour of GoodVets in Streeterville, Chicago.
            </p>
            <p className="text-[1.4rem] leading-[1.8rem] mt-[2rem] ml-[2rem] ">
              BY AUTHOR NAME <br />
              <span className="text-[#D9C7B8]"> AUTHOR TITLE</span>
            </p>
          </div> */}
            {/* </Slider> */}
          </div>
        )}

        {mobile ? (
          <div
            className={` mt-[3.6rem] w-[100%] z-10 px-[2.4rem]  justify-between items-center ${
              mobile ? "flex" : "hidden"
            }`}
          >
            <button
              className="h-[.91rem] w-[1.84rem]"
              onClick={() => {
                GS.current.scrollLeft -= 370;
                setgsscroll(gsscroll - 370);
              }}
            >
              <img src={arrow} alt="" className="rotate-90" />
            </button>
            <div className="flex justify-center items-center">
              <div
                className={`w-[1rem] h-[1rem]  rounded-full mr-[.8rem] border-[1px] border-black ${
                  gsscroll == 0 ? "bg-black" : "bg-transparent"
                }`}
                onClick={() => {
                  setgsscroll(0);
                  GS.current.scrollLeft = 0;
                }}
              ></div>
              <div
                className={`w-[1rem] h-[1rem]  rounded-full mr-[.8rem] border-[1px] border-black ${
                  gsscroll == 370 ? "bg-black" : "bg-transparent"
                }`}
                onClick={() => {
                  setgsscroll(370);
                  GS.current.scrollLeft = 370;
                }}
              ></div>
              <div
                className={`w-[1rem] h-[1rem]  rounded-full mr-[.8rem] border-[1px] border-black ${
                  gsscroll == 740 ? "bg-black" : "bg-transparent"
                }`}
                onClick={() => {
                  setgsscroll(740);
                  GS.current.scrollLeft = 740;
                }}
              ></div>
              <div
                className={`w-[1rem] h-[1rem]  rounded-full  border-[1px] border-black ${
                  gsscroll > 740 ? "bg-black" : "bg-transparent"
                }`}
                onClick={() => {
                  setgsscroll(1094);
                  GS.current.scrollLeft = 1094;
                }}
              ></div>
            </div>
            <button
              className="h-[.913rem] w-[1.84rem]"
              onClick={() => {
                GS.current.scrollLeft += 370;
                setgsscroll(gsscroll + 370);
                // console.log(modularScroll)
              }}
            >
              <img src={arrow} alt="" className="-rotate-90" />
            </button>
          </div>
        ) : (
          ""
        )}
        <button
          className={`geographr border border-black   rounded-[5rem] mx-auto  hover:bg-[#FEC20D] hover:border-[#FEC20D] ${
            mobile
              ? "mt-[3.6rem] w-[17.6rem] h-[3.2rem] text-[1.3rem] leading-[1.1rem]"
              : "px-[3rem] py-[1.6rem] text-[1.4rem] leading-[2rem] mt-[8rem]"
          }`}
        >
          MORE GOOD STORIES
        </button>
      </section>
      {mobile ? (
        <section>
          <h1 className="text-[2.4rem] leading-[2.6rem] text-[#262626] mt-[3.2rem] mb-[2.4rem] m-auto text-center ">
            Develop Your <br />
            Career Now
          </h1>
          <div className="px-[2.4rem] flex justify-center items-center flex-col">
            <div className="w-[100%] flex justify-between items-start border-b border-[#B5B3B2] ">
              <div>
                <p className="geographr text-[1.4rem] text-[#262626] leading-[1.4rem]">
                  Associate Veterinarian
                </p>
                <p className="geographr text-[.9rem] text-[#262626] leading-[1.1rem] my-[.8rem]">
                  West Loop, Chicago, IL
                </p>
              </div>
              <button className="geographr w-[8.6rem] h-[1.9rem] bg-transparent border-[1px] border-[#262626] text-[1rem] leading-[.8rem] text-[#262626] rounded-[5rem]">
                LEARN MORE
              </button>
            </div>
            <div className="w-[100%] mt-[.7rem] flex justify-between items-start border-b border-[#B5B3B2] ">
              <div>
                <p className="geographr text-[1.4rem] text-[#262626] leading-[1.4rem]">
                  Associate Veterinarian
                </p>
                <p className="geographr text-[.9rem] text-[#262626] leading-[1.1rem] my-[.8rem]">
                  The Gultch, Nashville, TN
                </p>
              </div>
              <button className="geographr w-[8.6rem] h-[1.9rem] bg-transparent border-[1px] border-[#262626] text-[1rem] leading-[.8rem] text-[#262626] rounded-[5rem]">
                LEARN MORE
              </button>
            </div>
            <div className="w-[100%] mt-[.7rem] flex justify-between items-start border-b border-[#B5B3B2] ">
              <div>
                <p className="geographr text-[1.4rem] text-[#262626] leading-[1.4rem]">
                  Associate Veterinarian
                </p>
                <p className="geographr text-[.9rem] text-[#262626] leading-[1.1rem] my-[.8rem]">
                  Coconut Grove, Miami, FL
                </p>
              </div>
              <button className="geographr w-[8.6rem] h-[1.9rem] bg-transparent border-[1px] border-[#262626] text-[1rem] leading-[.8rem] text-[#262626] rounded-[5rem]">
                LEARN MORE
              </button>
            </div>
            <div className="w-[100%] mt-[.7rem] flex justify-between items-start border-b border-[#B5B3B2] ">
              <div>
                <p className="geographr text-[1.4rem] text-[#262626] leading-[1.4rem]">
                  Associate Veterinarian
                </p>
                <p className="geographr text-[.9rem] text-[#262626] leading-[1.1rem] my-[.8rem]">
                  Coconut Grove, Miami, FL
                </p>
              </div>
              <button className="geographr w-[8.6rem] h-[1.9rem] bg-transparent border-[1px] border-[#262626] text-[1rem] leading-[.8rem] text-[#262626] rounded-[5rem]">
                LEARN MORE
              </button>
            </div>
            <button className="text-[1.3rem] leading-[1.1rem] text-[#262626] w-[19.1rem] h-[3.2rem] border-[1px] mt-[3.2rem] mb-[4.8rem] border-[#262626] rounded-[5rem]">
              VIEW MORE POSITIONS
            </button>
          </div>
        </section>
      ) : (
        ""
      )}
      {mobile ? (
        <section className="h-[12.8rem] bg-[#F9EED5] flex justify-start items-center flex-col">
          <h1 className="text-[1.8rem] leading-[2.4rem] text-[#262626] mt-[3.2rem] mb-[.8rem]">
            Jumpstart Your Career!
          </h1>
          <button className="w-[9.3rem] h-[3.2rem] bg-[#F5C445] text-[1.3rem] leading-[1.1rem] rounded-[5rem] geographr">
            LET'S GO
          </button>
        </section>
      ) : (
        ""
      )}
      <section
        className={`${
          mobile
            ? "pl-[2.4rem] pb-[2.4rem] pt-[2.4rem]"
            : "pl-[8.9rem] pb-[12rem]"
        } `}
      >
        <img
          src={emM}
          alt=""
          className={`w-[12.2rem] h-[6.4rem] ${mobile ? "flex" : "hidden"}`}
        />
        <h1
          className={` w-[55.8rem] mt-[1rem] mb-[1.6rem] text-[#262626] ${
            mobile
              ? "text-[1.4rem] leading-[1.6rem] geographr"
              : "text-[4rem] leading-[4.8rem]"
          }`}
        >
          Keep up with what’s <br /> happening at GoodVets!
        </h1>
        <div
          className={`${
            mobile ? "w-auto border-0" : "w-[124.2rem]  border-b border-black"
          } `}
        >
          {/* <h1 className="text-[2.2rem] leading-[2.9rem]  text-[#262626]">
            Enter your email
          </h1> */}
          <div
            className={`w-[100%] flex  items-end relative ${
              mobile ? "justify-start" : "justify-between"
            }`}
          >
            <input
              type="text "
              className={`${
                mobile
                  ? " border-b border-black min-w-[27.6rem] text-[1.4rem] leading-[1.6rem] geographr"
                  : "w-[80%] text-[2.2rem] leading-[2.9rem] geographm"
              }    hover:placeholder:text-[#FEC20D] outline-none placeholder:text-[#262626]`}
              placeholder="Enter Your Email"
            />
            <img
              src={Search}
              alt=""
              className={`w-[20.3rem] h-[20.3rem] absolute right-[0] top-[-14rem] ${
                mobile ? "hidden" : "flex"
              }`}
            />
            <button
              className={`${
                mobile ? "static" : "hidden"
              } ml-[1.8rem] w-[5.6rem] h-[1.9rem] text-[#262626] text-[1rem] leading-[.8rem] border-[1px] border-[#262626] rounded-[5rem]`}
            >
              Submit
            </button>
          </div>
        </div>
      </section>
      {mobile ? (
        <footer
          className={`geographr flex flex-col justify-between bg-[#262626] text-[1.4rem]   h-[42.6rem] pt-[4.8rem] text-[#908E8D] leading-[1.6rem] `}
        >
          <div className={`flex flex-wrap`}>
            <div className=" min-w-[100%] flex">
              <p className={`  geographr ml-[2.4rem] mr-[4.3rem] w-auto`}>
                My Account
              </p>
              <button className="w-[5.3rem] h-[1.9rem] bg-transparent border-[#908E8D] border-[1px] geographr text-[1rem] leading-[.8rem] text-[#908E8D] rounded-[5rem]">
                Login
              </button>
            </div>
            <div className={` mt-[4.8rem] ml-[2.4rem] `}>
              <p className={`  geographr mb-[.8rem] w-auto`}>Locations</p>
              <p className={`  geographr mb-[.8rem] w-auto`}>Services</p>
              <p className={`  geographr mb-[.8rem] w-auto`}>Wellness Plans</p>
              <p className={`  geographr mb-[.8rem] w-auto text-white`}>
                Join Us
              </p>
            </div>
            <div className={`mt-[4.8rem] ml-[2.7rem] `}>
              <p className="mb-[.8rem] w-auto geographr">Vet-Partners</p>
              <p className="mb-[.8rem] w-auto geographr text-white">
                Vet-Associates
              </p>
              <p className="mb-[.8rem] w-auto geographr">New Graduates</p>
              <p className="mb-[.8rem] w-auto geographr">
                Staffs & Technicians
              </p>
            </div>
            <div className={`mt-[4.8rem] ml-[2.6rem] `}>
              <p className="mb-[.8rem] w-auto geographr">Careers</p>
              <p className="mb-[.8rem] w-auto geographr">Journal</p>
              <p className="mb-[.8rem] w-auto geographr">FAQ</p>
            </div>
            <div className=" min-w-[100%] mt-[4.8rem] flex">
              <p
                className={`  geographr ml-[2.4rem] w-auto flex justify-center items-center text-[.9rem] leading-[1.1rem] text-[#908E8D] tracking-[5%]`}
              >
                Follow Us:
              </p>
              <div className="flex justify-center items-center ml-[7.4rem]">
                <img src={fbM} alt="" />
                <img src={igM} alt="" className="mx-[1.7rem]" />
                <img src={liM} alt="" />
              </div>
            </div>
          </div>
          <div className="flex h-[14.4rem] mt-[4.8rem] pt-[.8rem] text-[.9rem] leading-[1.1rem] border-t border-[#f9f6f433]">
            <p className="ml-[2.4rem] w-auto geographr">Terms & Legal</p>
            <p className="ml-[5.1rem] mr-[9rem] w-auto geographr">
              Privacy Policy
            </p>
            <p className="w-auto geographr">©2022 GOODVETS</p>
          </div>
        </footer>
      ) : (
        <footer className="geographr flex flex-col justify-between bg-[#262626] text-[1.4rem] leading-[1.8rem] text-white h-[42.6rem] pt-[6rem]">
          <div className="flex">
            <div className="ml-[3.4rem]">
              <p className=" w-[14.2rem] geographr">My Account</p>
            </div>
            <div className="ml-[40.8rem]">
              <p className="mb-[1rem] w-[14.2rem] geographr">Locations</p>
              <p className="mb-[1rem] w-[14.2rem] geographr">Services</p>
              <p className="mb-[1rem] w-[14.2rem] geographr">Virtual care</p>
              <p className="mb-[1rem] w-[14.2rem] geographr">Wellness Plans</p>
            </div>
            <div className="ml-[13.3rem]">
              <p className="mb-[1rem] w-[14.2rem] geographr">Join our Team</p>
              <p className="mb-[1rem] w-[14.2rem] geographr">Partner with Us</p>
              <p className="mb-[1rem] w-[14.2rem] geographr">Associate Vets</p>
              <p className="mb-[1rem] w-[14.2rem] geographr">New Grads</p>
              <p className="mb-[1rem] w-[14.2rem] geographr">
                Technicians & Staff
              </p>
            </div>
            <div className="ml-[13.3rem]">
              <p className="mb-[1rem] w-[14.2rem] geographr">Careers</p>
              <p className="mb-[1rem] w-[14.2rem] geographr">Journal</p>
              <p className="mb-[1rem] w-[14.2rem] geographr">FAQ</p>
              <p className="mb-[1rem] w-[14.2rem] geographr">Press</p>
            </div>
          </div>
          <div className="flex py-[1.9rem] border-t border-white">
            <p className="ml-[3.4rem] w-[14.2rem] geographr">©2022 GOODVETS</p>
            <p className="ml-[40.8rem] w-[14.2rem] geographr">Terms & Legal</p>
            <p className="ml-[13.3rem] w-[14.2rem] geographr">Privacy Policy</p>
            <div className="flex space-x-[2rem] ml-[17.4rem] ">
              <div className="w-[2.4rem] h-[2.4rem] border border-white rounded-full"></div>
              <div className="w-[2.4rem] h-[2.4rem] border border-white rounded-full"></div>
              <div className="w-[2.4rem] h-[2.4rem] border border-white rounded-full"></div>
              <div className="w-[2.4rem] h-[2.4rem] border border-white rounded-full"></div>
            </div>
          </div>
        </footer>
      )}
    </>
  );
};

export default Home;
