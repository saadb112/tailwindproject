import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";
import { useRef } from "react";
import Bg from "../img/main.jpg"
import Slider1 from "../img/bg1.jpg"
import Slider2 from "../img/bg2.jpg"
import Review1 from "../img/review1.jpg"
import Review2 from "../img/review2.jpg"
import Ho1 from "../img/ho1.jpg"
import Ho2 from "../img/ho2.jpg"
import Ho3 from "../img/ho3.jpg"
import One from "../img/01.jpg"
import two from "../img/02.jpg"
import three from "../img/03.jpg"
import four from "../img/04.jpg"
import five from "../img/05.jpg"
import six from "../img/06.jpg"
import seven from "../img/07.jpg"
import eight from "../img/08.jpg"
import Blob1 from "../img/blob-1.svg"
import Blob2 from "../img/blob-2.svg"
import Blob3 from "../img/blob-3.svg"
import Search from "../img/Search.png"
import arrow from "../img/arrow.svg"
import Logo from "../img/logo.svg"

const Home = () => {
  const [element, setCard] = useState(null)
  const [left, setleft] = useState(0.0);
  const [prev, setprev] = useState(0.0);
  const Prev = () => {
    if (left == 0) {
    } else {
      setleft(left + 100);
    }
  };
  const Next = () => {
    if (left == -300) {
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
// const elementRef = useRef(null)


//   const [isDown, setisDown] = useState(false)
//   const [startx, setstartx] = useState(null)
//   const [scollleft, setscollleft] = useState(null)
//   const [x, setx] = useState(null)
//   const [walk, setwalk] = useState(null)
//   useEffect(() => {
 
//     setCard(elementRef.current)
    
//     console.log(element)
//   }, [])
  

// const mousedown = (e)=>{
//   setisDown(true)

//   setstartx(e.pageX - element.offsetLeft)
//   setscollleft(element.scrollLeft)
//   console.log(e.pageX)
// console.log(element.scrollLeft)
// }
// const mouseleave = (e)=>{
//   setisDown(false)
// }
// const mouseup = (e)=>{
//   setisDown(false)


// }
// const mousemove = (e)=>{
//   if(!isDown) return
//   e.preventDefault()
//   setx(e.pageX - element.offsetLeft)
//   setwalk(x - startx)
//   element.scrollLeft = scollleft - walk
// }
  return (
    <>
      {/* -------------OVERLAY----------------- */}
      <section className="w-[100%] bg-[rgba(38,38,38,0.25)] absolute hidden z-[100]">

      <div className="bg-[#FAF6F4] w-[45.1rem] pt-[4.9rem] relative">
<div className="w-[3rem] h-[3rem] border border-black rounded-full absolute top-[2rem] right-[2rem]">

</div>

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
            Aliquam vitae dictum turpis. Proin tincidunt imperdiet augue a tristique. Maecenas nec purus quis nunc bibendum venenatis sed porta orci. Vivamus hendrerit non ligula id maximus.
            </p>
          </div>
          <div className="mt-[9.1rem]">
            <h2 className="text-[#FEC20D] text-[2.2rem] leading-[2.9rem] ">
            How do you recharge after a long week? What’s your go-to activity for hitting the restart button?
            </h2>
            <p className=" text-[1.8rem] leading-[2.4rem]  mt-[2rem] font-[500]">
            Aliquam vitae dictum turpis. Proin tincidunt imperdiet augue a tristique. Maecenas nec purus quis nunc.
            </p>
          </div>
          <div className="mt-[9.1rem]">
            <h2 className="text-[#FEC20D] text-[2.2rem] leading-[2.9rem] ">
            In another life, if you weren’t working in Pet care, what would you be doing?
            </h2>
            <p className=" text-[1.8rem] leading-[2.4rem]  mt-[2rem] font-[500]">
            Aliquam vitae dictum turpis. Proin tincidunt imperdiet augue a tristique. Maecenas nec purus quis nunc.
            </p>
          </div>
        </div>
      </div>
      </section>

      <section className="main bg-slate-500 h-[62.2rem] bg-cover bg-center" style={{background : ` rgb(38, 38, 38, 0.2) url(${Bg}) `, backgroundBlendMode: "darken"}}>
        <header className="border-b border-white">
          <nav className="flex justify-between items-center ">
            <img src={Logo} alt="" className="ml-[3.4rem] my-8 w-[16.5rem] h-[3.4rem]"/>
            {/* <h1 className="font-bold text-4xl ml-[3.4rem] my-8 text-white geographr ">
              GoodVets
            </h1> */}
            <ul className="  flex justify-end mr-[6rem] text-white items-center">
              <li className="my-[2.7rem] text-[1.4rem] leading-8 uppercase mr-[7.1rem]">
                Locations
              </li>
              <li className="my-[2.7rem] geographr text-[1.4rem] leading-8 uppercase mr-[6.5rem]">
                Services
              </li>
              <li className="my-[2.7rem] geographr text-[1.4rem] leading-8 uppercase mr-[6.3rem]">
                Wellness Plans
              </li>
              <li className=" my-[2.7rem] geographr text-[1.4rem] leading-8 uppercase mr-[6rem]">
                Join Us
              </li>
              <li className="my-[2.7rem] geographr text-[1.4rem] leading-8 uppercase  w-56 flex justify-center items-center border rounded-3xl py-1.5 border-white">
                Book Now
              </li>
            </ul>
          </nav>
        </header>
        <div className="main flex justify-center items-center flex-col">
          <p className="geographm text-[1.4rem] mt-[13.8rem] mb-8 w-[16rem] bg-yellow-500  h-[1.8rem] uppercase text-center ">
            Associative Vets
          </p>
          <h1 className="text-[7rem] tracking-[-.14rem] text-center text-white leading-[8rem] ">
            A Vet-Owned Hospital,
            <br /> Invested in You
          </h1>
        </div>
        <button className="text-[1.4rem] leading-[2rem] text-[#262626] w-[21.3rem] h-[5rem] bg-[#FEC20D] rounded-[5rem] fixed z-10 right-[3.5rem] top-[65.8rem] hover:bg-[#262626] hover:text-white">
          VIEW OPPORTUNITIES
        </button>
      </section>

      <section className="section2 bg-[#faf6f4] rounded-t-2xl h-[38.2rem]">
        <p className="geographm w-[112.2rem] text-[#262626] text-[4rem] mx-auto text-center pt-[7.4rem] leading-[4.8rem]">
          As an associate veterinarian at GoodVets, you'll be mentored by a
          partner veterinarian who is personally invested in your success.
        </p>
      </section>

      <section className="section3 pb-[10rem]">
        <h1 className="text-[7rem] leading-[8rem] mx-auto my-40 text-center">
          A Culture of <span className="text-yellow-500"> Mentorship</span>
        </h1>
        <div className="relative flex justify-center items-center flex-col">
          <div className="absolute w-[94.8%] z-10  flex justify-between items-center top-[18rem] ">
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
          <div className="rows flex max-w-[100%] overflow-hidden">
            <div
              className={`row1 flex justify-center min-w-[100%] relative transition-all duration-[0.5s] ease-in-out`}
              style={{ position: "relative", left: `${left}%` }}
            >
              <div className="r1 mx-[3.9rem] h-[42rem] w-[58.2rem]  rounded-[6px]" style={{background : `url(${Slider1})`, backgroundSize : "cover", backgroundPosition : "center"}}></div>
              <div className="r2 mx-[3.9rem] flex flex-col justify-center items-start text-[#282826]">
                <h1 className="geographm text-[4rem] leading-[4.8rem]  mb-8 ">
                  Veterinarian-Led <br /> Medicine
                </h1>
                <p className="geographr w-[47.2rem] text-[1.8rem] leading-[2.4rem]">
                  Our partner veterinarians design their own medical programs,
                  so you'll be learning from and working with your hospital's
                  top dog.
                </p>
              </div>
            </div>
            <div
              className={`row1 flex justify-center min-w-[100%] relative transition-all duration-[0.5s] ease-in-out`}
              style={{ position: "relative", left: `${left}%` }}
            >
              <div className="r1 mx-[3.9rem] h-[42rem] w-[58.2rem] bg-slate-300 rounded-[6px]" style={{background : `url(${Ho3})`, backgroundSize : "cover", backgroundPosition : "center"}}></div>
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
              className={`row1 flex justify-center min-w-[100%] relative transition-all duration-[0.5s] ease-in-out`}
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
              className={`row1 flex justify-center min-w-[100%] relative transition-all duration-[0.5s] ease-in-out`}
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
            </div>
          </div>
        </div>
      </section>

      <section className="h-[81.6rem] bg-[#FAF6F4] ">
        <div className="m-auto max-w-[124.3rem] h-[100%]">

        <Slider  {...reviews}>
          <div className=" h-[81.6rem] flex-col start-center items-center relative reviews" >
            <div className="h-[24.3rem] w-[25.2rem]  rounded-[100%]  relative top-[14rem] z-10" style={{background : ` url(${Blob1}), url(${Review1}) `,backgroundBlendMode : "multiply",  backgroundPosition : "center", backgroundSize : "cover"}}>


            </div>

            
            <div className="w-[107.7rem] bg-[rgba(154,217,183,0.25)] h-[37.3rem] flex flex-col justify-start pt-[10rem] items-center absolute top-[30.3rem]">
              <p className="geographm  text-center text-[4rem] leading-[4.8rem] text-[#282826] w-[85.7rem]">
                “GoodVets has fulfilled my wants and needs as an owner and Vet.
                I am living my best life.“
              </p>
              <p className="geographr text-[1.4rem] text-[#262626] text-center uppercase mt-[4rem]">
                DR. SCHAUER - MEDICAL DIRECTOR <br /> STREETERVILLE
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-start items-center relative reviews" >
            <div className="h-[24.3rem] w-[25.2rem]  rounded-[100%]  relative top-[14rem] z-10" style={{background : `url(${Review2})`, backgroundPosition : "center", backgroundSize : "cover"}}></div>
            <div className="w-[107.7rem] bg-[rgba(115,134,230,0.25)] h-[37.3rem] flex flex-col justify-start pt-[10rem] items-center absolute top-[30.3rem]">
              <p className="geographm text-center text-[4rem] leading-[4.8rem] text-[#282826] w-[85.7rem]">
                “GoodVets has fulfilled my wants and needs as an owner and Vet.
                I am living my best life.“
              </p>
              <p className="geographr text-[1.4rem] text-[#262626] text-center uppercase mt-[4rem]">
                DR. SCHAUER - MEDICAL DIRECTOR <br /> STREETERVILLE
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-start items-center relative reviews" >
            <div className="h-[24.3rem] w-[25.2rem]  rounded-[100%]  relative top-[14rem] z-10" style={{background : `url(${Review1})`, backgroundPosition : "center", backgroundSize : "cover"}}></div>
            <div className="w-[107.7rem] bg-[rgba(154,217,183,0.25)] h-[37.3rem] flex flex-col justify-start pt-[10rem] items-center absolute top-[30.3rem]">
              <p className="geographm text-center text-[4rem] leading-[4.8rem] text-[#282826] w-[85.7rem]">
                “GoodVets has fulfilled my wants and needs as an owner and Vet.
                I am living my best life.“
              </p>
              <p className="geographr text-[1.4rem] text-[#262626] text-center uppercase mt-[4rem]">
                DR. SCHAUER - MEDICAL DIRECTOR <br /> STREETERVILLE
              </p>
            </div>
          </div>
        </Slider>
        </div>

      </section>

      <section className="flex flex-col justify-center items-center">
        <h1 className="text-[7rem] mx-auto my-40 text-center leading-[8rem]  ">
          Many Ways to Take
          <span className="text-yellow-500"> Ownership</span>
        </h1>
        <div className="rows">
          <div className="row1 flex justify-center mt-[4rem]">
            <div className="r1 mx-[3.9rem] h-[40rem] w-[58.2rem] bg-slate-500 rounded-[6px] relative" style={{background : `url(${Ho1})`, backgroundPosition : "center", backgroundSize : "cover"}}>
              <div className="w-[22.4rem] h-[21.6rem]  absolute right-[-10rem] top-[-10rem] flex justify-center items-center">
                <p className="text-[#262626] absolute top-[4.2rem] left-[4.1rem]  text-[10rem] leading-[8rem] tracking-[-.2rem] w-[14.2rem] h-[13.2rem] flex justify-center items-center">1</p>
              <img src={Blob1} alt="" />
              </div>
            </div>
            <div className="r2 mx-[3.9rem] flex flex-col justify-end pb-[6rem] items-start text-[#282826]">
              <h1 className="geographm text-[4rem] leading-[4.8rem] mb-8 ">
                Expand Your Expertise
              </h1>
              <p className="geographr w-[47.2rem] text-[1.8rem] leading-[2.4rem]">
                Working at GoodVets is an education unto itself. You’ll be
                mentored by visionary partner vets, practice alongside talented
                peers, and uncover your own unique skills and passions.
              </p>
            </div>
          </div>
          <div className="row1 flex justify-center mt-[20rem] flex-row-reverse">
            <div className="r1 mx-[3.9rem] h-[40rem] w-[58.2rem] bg-slate-300 rounded-[6px] relative" style={{background : `url(${Ho2})`, backgroundPosition : "center", backgroundSize : "cover"}}>
            <div className="w-[22.4rem] h-[21.6rem]  absolute left-[-10rem] top-[-10rem] flex justify-center items-center">
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
            <div className="r1 mx-[3.9rem] h-[40rem] w-[58.2rem] bg-slate-300 rounded-[6px] relative" style={{background : `url(${Ho3})`, backgroundPosition : "center", backgroundSize : "cover"}}>
            <div className="w-[22.4rem] h-[21.6rem]  absolute right-[-10rem] top-[-10rem] flex justify-center items-center">
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
          </div>
        </div>
        <h1 className="text-8xl mx-auto mb-[8rem] mt-[10rem] text-center">
          Get <span className="text-yellow-500"> Started!</span>
        </h1>
        <button className="geographr border border-black px-[3rem] py-[1.6rem] text-[1.4rem] leading-[2rem] rounded-[5rem] mx-auto  hover:bg-[#FEC20D] hover:border-[#FEC20D]">
          LEARN ABOUT PARTNERSHIP
        </button>
      </section>

      <section className="bg-[rgba(217,199,184,0.25)] mt-[9.9rem] pb-[10rem] flex flex-col items-end">
        <h1 className="geographm text-[4rem]  leading-[4.8rem] pt-[10rem] mb-[10rem] text-[#262626] w-screen pl-[8.9rem]">
          Modular
        </h1>
        <div className="max-w-[127.7rem] Modular">
          <Slider {...settings}>
            <div className="w-[58.2rem]">
              <div className="w-[100] h-[40rem] bg-slate-400 m-0" style={{background : `url(${five})`, backgroundSize : "cover"}}></div>
              <p className="geographr text-[1.4rem] mt-[2rem]">Image Caption</p>
            </div>
            <div className="w-[58.2rem]">
              <div className="w-[100] h-[40rem] bg-slate-400 m-0" style={{background : `url(${six})`, backgroundSize : "cover"}}></div>
              <p className="geographr text-[1.4rem] mt-[2rem]">Image Caption</p>
            </div>
            <div className="w-[58.2rem]">
              <div className="w-[100] h-[40rem] bg-slate-400 m-0" style={{background : `url(${seven})`, backgroundSize : "cover"}}></div>
              <p className=" geographr text-[1.4rem] mt-[2rem]">Image Caption</p>
            </div>
            <div className="w-[58.2rem]">
              <div className="w-[100%] h-[40rem] bg-slate-400 m-0" style={{background : `url(${eight})`, backgroundSize : "cover"}}></div>
              <p className="geographr text-[1.4rem] mt-[2rem]">Image Caption</p>
            </div>
          </Slider>
        </div>
      </section>

      <section className="bg-[#FAF6F4]">
        <h1 className="text-[7rem] leading-[8rem] text-center py-[10rem]">
          Associate Vets Benefits
        </h1>
        <div className="mx-auto  w-[129.7rem] flex justify-between items-start">
          <div>
            <div className="h-[1.8rem] w-[8.2rem] bg-[#FEC20D]">
              <h1 className="geographm text-[1.4rem] leading-[1.8rem] relative top-[-.6rem] left-[-.8rem] text-[#282826]">
                FINANCIAL
              </h1>
            </div>
            <div className="w-[41.7rem] h-[20rem] bg-white mt-[3.3rem]">
              <h1 className="geographr ml-[5.6rem] text-[1.4rem] leading-[1.8rem] pt-[1.6rem] mb-[3.2rem]">
                Leading compensation and bonuses
              </h1>
              <h1 className="geographr ml-[5.6rem] text-[1.4rem] leading-[1.8rem] mb-[3.2rem]">
                Annual raises
              </h1>
              <h1 className="geographr ml-[5.6rem] text-[1.4rem] leading-[1.8rem] mb-[3.2rem]">
                401k matching
              </h1>
              <h1 className="geographr ml-[5.6rem] text-[1.4rem] leading-[1.8rem] mb-[3.2rem]">
                Profit sharing
              </h1>
            </div>
          </div>

          <div className="">
            <div className="h-[1.8rem] w-[20rem] bg-[#FEC20D]">
              <h1 className="geographm text-[1.4rem] leading-[1.8rem] relative top-[-.6rem] left-[-.8rem] text-[#282826]">
                QUALITY OF CARE & CAREER
              </h1>
            </div>
            <div className="w-[41.7rem] h-[25rem] bg-white mt-[3.3rem]">
              <h1 className="geographr ml-[5.6rem] text-[1.4rem] leading-[1.8rem] pt-[1.6rem] mb-[3.2rem]">
                Favorable staffing ratios
              </h1>
              <h1 className="geographr ml-[5.6rem] text-[1.4rem] leading-[1.8rem] mb-[3.2rem]">
                Practice medicine alongside hospital owners
              </h1>
              <h1 className="geographr ml-[5.6rem] text-[1.4rem] leading-[1.8rem] mb-[3.2rem]">
                Continuing education & license support
              </h1>
              <h1 className="geographr ml-[5.6rem] text-[1.4rem] leading-[1.8rem] mb-[3.2rem]">
                Hospital-level growth opportunities
              </h1>
              <h1 className="geographr ml-[5.6rem] text-[1.4rem] leading-[1.8rem] mb-[3.2rem]">
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
              <h1 className="geographr ml-[5.6rem] text-[1.4rem] leading-[1.8rem] pt-[1.6rem] mb-[3.2rem]">
                Leading compensation and bonuses
              </h1>
              <h1 className="geographr ml-[5.6rem] text-[1.4rem] leading-[1.8rem] mb-[3.2rem]">
                Annual raises
              </h1>
              <h1 className="geographr ml-[5.6rem] text-[1.4rem] leading-[1.8rem] mb-[3.2rem]">
                401k matching
              </h1>
              <h1 className="geographr ml-[5.6rem] text-[1.4rem] leading-[1.8rem] mb-[3.2rem]">
                Profit sharing
              </h1>
            </div>
          </div>
        </div>
      </section>

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
            <img src={arrow} alt="" className=" h-[1.5rem] -rotate-90" />

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
            <img src={arrow} alt="" className=" h-[1.5rem] -rotate-90" />

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
            <img src={arrow} alt="" className=" h-[1.5rem] -rotate-90" />

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
            <img src={arrow} alt="" className=" h-[1.5rem] -rotate-90" />

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
            <img src={arrow} alt="" className=" h-[1.5rem] -rotate-90" />

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
            <img src={arrow} alt="" className=" h-[1.5rem] -rotate-90" />

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
            <img src={arrow} alt="" className=" h-[1.5rem] -rotate-90" />

            </p>
          </div>
        </div>

        <button className="geographr border border-black px-[3rem] py-[1.6rem] text-[1.4rem] leading-[2rem] rounded-[5rem] mx-auto mt-[8rem]">
          VIEW ALL
        </button>
      </section>

      <section className="bg-[#FAF6F4] pt-[9.9rem] pb-[10rem] flex flex-col justify-center items-end">
        <h1 className="geographm text-[7rem] mx-auto mb-[9rem] leading-[8rem]  text-left w-screen pl-[8.9rem]">
          <span className="geographm text-yellow-500"> Good Stories </span>
          from GoodVets
        </h1>
        <div className=" GStories max-w-[127.7rem]" id="cards" >
          <Slider {...settings}>
            <div className=" h-[58.4rem] bg-white w-[41.7rem]">
              <div className="w-[41.7rem] h-[40rem] bg-center bg-cover"  style={{background : `url(${One})`, backgroundSize : "cover"}}></div>
              <p className="grennetesm text-[2.2rem] leading-[2.9rem]  mt-[3rem] ml-[2rem] w-[34.3rem]">
                How to build a successful career in the veterinary industry.
              </p>
              <p className="geographr text-[1.4rem] leading-[1.8rem] mt-[2rem] ml-[2rem] ">
                BY AUTHOR NAME <br />
                <span className="text-[#D9C7B8]"> AUTHOR TITLE</span>
              </p>
            </div>
            <div className=" h-[58.4rem] bg-white w-[41.7rem]">
              <div className="w-[41.7rem] h-[40rem] bg-slate-400"  style={{background : `url(${two})`, backgroundSize : "cover"}}></div>
              <p className=" grennetesm text-[2.2rem] leading-[2.9rem]  mt-[3rem] ml-[2rem] w-[34.3rem]">
                Dr. Sheela Moss on how being a mentor enriches her career.
              </p>
              <p className="geographr text-[1.4rem] leading-[1.8rem] mt-[2rem] ml-[2rem] ">
                BY AUTHOR NAME <br />
                <span className="text-[#D9C7B8]"> AUTHOR TITLE</span>
              </p>
            </div>
            <div className=" h-[58.4rem] bg-white w-[41.7rem]">
              <div className="w-[41.7rem] h-[40rem] bg-slate-400"  style={{background : `url(${three})`, backgroundSize : "cover"}}></div>
              <p className="grennetesm text-[2.2rem] leading-[2.9rem]  mt-[3rem] ml-[2rem] w-[34.3rem]">
                Dr. Sheela Moss on how being a mentor enriches her career.
              </p>
              <p className="geographr text-[1.4rem] leading-[1.8rem] mt-[2rem] ml-[2rem] ">
                BY AUTHOR NAME <br />
                <span className="text-[#D9C7B8]"> AUTHOR TITLE</span>
              </p>
            </div>
            <div className=" h-[58.4rem] bg-white w-[41.7rem]">
              <div className="w-[41.7rem] h-[40rem] bg-slate-400"  style={{background : `url(${four})`, backgroundSize : "cover"}}></div>
              <p className="grennetesm text-[2.2rem] leading-[2.9rem]  mt-[3rem] ml-[2rem] w-[34.3rem]">
                Dr. Sheela Moss on how being a mentor enriches her career.
              </p>
              <p className="geographr text-[1.4rem] leading-[1.8rem] mt-[2rem] ml-[2rem] ">
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
        <button className="geographr border border-black px-[3rem] py-[1.6rem] text-[1.4rem] leading-[2rem] rounded-[5rem] mx-auto mt-[8rem] hover:bg-[#FEC20D] hover:border-[#FEC20D] ">
          MORE GOOD STORIES
        </button>
      </section>

      <section className="pl-[8.9rem] pb-[12rem]">
        <h1 className="text-[4rem] leading-[4.8rem] w-[55.8rem] mt-[8.1rem] mb-[6rem] text-[#262626]">
          Keep up with what’s <br /> happening at GoodVets!
        </h1>
        <div className="w-[124.2rem] border-b border-black ">
          {/* <h1 className="text-[2.2rem] leading-[2.9rem]  text-[#262626]">
            Enter your email
          </h1> */}
          <div className=" w-[100%] flex justify-between items-end relative">

          <input
            type="text "
            className="geographm text-[2.2rem] leading-[2.9rem]  w-[80%] hover:placeholder:text-[#FEC20D] outline-none placeholder:text-[#262626]"
            placeholder="Enter Your Email"
            />
            <img src={Search} alt="" className="w-[20.3rem] h-[20.3rem] absolute right-[0] top-[-14rem]"/>
            </div>
        </div>
      </section>

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
            <p className="mb-[1rem] w-[14.2rem] geographr">Technicians & Staff</p>
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
          <div className="flex space-x-[2rem] ml-[13.3rem] ">
            <div className="w-[2.4rem] h-[2.4rem] border border-white rounded-full"></div>
            <div className="w-[2.4rem] h-[2.4rem] border border-white rounded-full"></div>
            <div className="w-[2.4rem] h-[2.4rem] border border-white rounded-full"></div>
            <div className="w-[2.4rem] h-[2.4rem] border border-white rounded-full"></div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
