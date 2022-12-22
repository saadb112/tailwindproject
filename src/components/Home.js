import React from "react";

const Home = () => {
  return (
    <>
      <section className="main bg-slate-500 h-[62.2rem]">
        <header className="border-b border-white">
          <nav className="flex justify-between items-center">
            <h1 className="font-bold text-4xl ml-[3.4rem] my-8 text-white">
              GoodVets
            </h1>
            <ul className="  flex justify-end mr-[6rem] text-white items-center pt-[2.6rem] pb-[2.8rem]">
              <li className="text-[1.4rem] leading-8 uppercase mr-[7.1rem]">
                Locations
              </li>
              <li className="text-[1.4rem] leading-8 uppercase mr-[6.5rem]">
                Services
              </li>
              <li className="text-[1.4rem] leading-8 uppercase mr-[6.3rem]">
                Wellness Plans
              </li>
              <li className="text-[1.4rem] leading-8 uppercase mr-[6rem]">
                Join Us
              </li>
              <li className="text-[1.4rem] leading-8 uppercase  w-56 flex justify-center items-center border rounded-3xl py-1.5 border-white">
                Book Now
              </li>
            </ul>
          </nav>
        </header>
        <div className="main flex justify-center items-center flex-col">
          <p className="text-[1.4rem] mt-[13.8rem] mb-8 w-[16rem] bg-yellow-500  h-[1.8rem] uppercase text-center font-semibold">
            Associative Vets
          </p>
          <h1 className="text-[7rem]  text-center text-white leading-[8rem] ">
            Grow alongside your <br /> hospital’s Owner
          </h1>
        </div>
      </section>

      <section className="section2 bg-[#faf6f4] rounded-t-2xl h-[36.2rem]">
        <p className="w-[112.2rem] text-[#262626] text-[4rem] mx-auto text-center pt-[7.4rem] font-semibold leading-[4.8rem]">
          As an Associate Vet at GoodVets your Medical Director is also the
          owner of the hospital, which means higher quality of care and
          mentorship from the top down.
        </p>
      </section>

      <section className="section3 pb-[10rem]">
        <h1 className="text-[7rem] leading-[8rem] mx-auto my-40 text-center">
          Mentorship & culture <span className="text-yellow-500"> matter</span>
        </h1>
        <div className="rows">
          <div className="row1 flex justify-center">
            <div className="r1 mx-[3.9rem] h-[42rem] w-[58.2rem] bg-slate-300 rounded-[6px]"></div>
            <div className="r2 mx-[3.9rem] flex flex-col justify-center items-start text-[#282826]">
              <h1 className=" text-[4rem] leading-[4.8rem] font-semibold mb-8 ">
                Vet-Crafted <br /> Standards of Care
              </h1>
              <p className="w-[47.2rem] text-[1.8rem] leading-[2.4rem]">
                Sed gravida fringilla nisi, in ultrices urna consequat in. Proin
                volutpat, elit ut tristique sagittis, urna justo accumsan purus,
                sed orci urna a lectus nulla eget.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="h-[81.6rem] bg-[#FAF6F4]">
        <div>
          <div className="flex flex-col justify-start items-center relative">
            <div className="h-[24.3rem] w-[25.2rem] bg-slate-500 rounded-[100%] relative top-[14rem] z-10"></div>
            <div className="w-[107.7rem] bg-[rgba(154,217,183,0.25)] h-[37.3rem] flex flex-col justify-start pt-[10rem] items-center absolute top-[30.3rem]">
              <p className="font-semibold text-center text-[4rem] leading-[4.8rem] text-[#282826] w-[85.7rem]">
                “GoodVets has fulfilled my wants and needs as an owner and Vet.
                I am living my best life.“
              </p>
              <p className="text-[1.4rem] text-[#262626] text-center uppercase mt-[4rem]">
                DR. SCHAUER - MEDICAL DIRECTOR <br /> STREETERVILLE
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center">
        <h1 className="text-[7rem] mx-auto my-40 text-center leading-[8rem]  ">
          From Associate to Hospital{" "}
          <span className="text-yellow-500"> Owner</span>
        </h1>
        <div className="rows">
          <div className="row1 flex justify-center mt-[4rem]">
            <div className="r1 mx-[3.9rem] h-[40rem] w-[58.2rem] bg-slate-300 rounded-[6px] relative">
              <div className="w-[22.4rem] h-[21.6rem] bg-[#D9C7B8] rounded-[100%] absolute right-[-10rem] top-[-10rem] text-[10rem] flex justify-center items-center">
                1
              </div>
            </div>
            <div className="r2 mx-[3.9rem] flex flex-col justify-end pb-[6rem] items-start text-[#282826]">
              <h1 className=" text-[4rem] leading-[4.8rem] font-semibold mb-8 ">
                Growing with GoodVets
              </h1>
              <p className="w-[47.2rem] text-[1.8rem] leading-[2.4rem]">
                By joining our team you can focus on practicing animal care and
                receive on-the-job training to prepare for becoming a partner
                yourself.
              </p>
            </div>
          </div>
          <div className="row1 flex justify-center mt-[20rem] flex-row-reverse">
            <div className="r1 mx-[3.9rem] h-[40rem] w-[58.2rem] bg-slate-300 rounded-[6px] relative">
              <div className="w-[22.4rem] h-[21.6rem] bg-[#D9C7B8] rounded-[100%] absolute left-[-10rem] top-[-10rem] text-[10rem] flex justify-center items-center">
                2
              </div>
            </div>
            <div className="r2 mx-[3.9rem] flex flex-col justify-end pb-[6rem] items-start text-[#282826]">
              <h1 className=" text-[4rem] leading-[4.8rem] font-semibold mb-8 ">
                Associate Equity Ownership
              </h1>
              <p className="w-[47.2rem] text-[1.8rem] leading-[2.4rem]">
                Buy into your hospital as an associate <br /> and share in your
                hospital’s growth.
              </p>
            </div>
          </div>
          <div className="row1 flex justify-center mt-[20rem]">
            <div className="r1 mx-[3.9rem] h-[40rem] w-[58.2rem] bg-slate-300 rounded-[6px] relative">
              <div className="w-[22.4rem] h-[21.6rem] bg-[#D9C7B8] rounded-[100%] absolute right-[-10rem] top-[-10rem] text-[10rem] flex justify-center items-center">
                3
              </div>
            </div>
            <div className="r2 mx-[3.9rem] flex flex-col justify-end pb-[6rem] items-start text-[#282826]">
              <h1 className=" text-[4rem] leading-[4.8rem] font-semibold mb-8 ">
                Begin the Path <br /> to Partnership
              </h1>
              <p className="w-[47.2rem] text-[1.8rem] leading-[2.4rem]">
                We create long-term opportunities to build an and own your own
                hospital as a partner.
              </p>
            </div>
          </div>
        </div>
        <h1 className="text-8xl mx-auto mb-[8rem] mt-[10rem] text-center">
          Your long-term <span className="text-yellow-500"> future</span>
        </h1>
        <button className="border border-black px-[3rem] py-[1.6rem] text-[1.4rem] leading-[2rem] rounded-[5rem] mx-auto">
          LEARN ABOUT PARTNERSHIP
        </button>
      </section>

      <section className="bg-[rgba(217,199,184,0.25)] mt-[9.9rem] pb-[10rem] flex flex-col items-end">
        <h1 className="text-[4rem] font-semibold leading-[4.8rem] pt-[10rem] mb-[10rem] text-[#262626] w-screen pl-[8.9rem]" >
          Our modern, state-of-the-art facilites
        </h1>
        <div className="flex justify-start items-start max-w-[124.3rem] overflow-hidden">
          <div className="">
            <div className="w-[58.2rem] h-[40rem] bg-slate-400"></div>
            <p className="text-[1.4rem] mt-[2rem]">Image Caption</p>
          </div>
          <div className="ml-[2.3rem]">
            <div className="w-[36.2rem] h-[40rem] bg-slate-400"></div>
            <p className="text-[1.4rem] mt-[2rem]">Image Caption</p>
          </div>
          <div className="ml-[2.3rem]">
            <div className="w-[28.7rem] h-[40rem] bg-slate-400"></div>
            <p className="text-[1.4rem] mt-[2rem]">Image Caption</p>
          </div>
        </div>
      </section>

      <section className="bg-[#FAF6F4]">
        <h1 className="text-[7rem] leading-[8rem] text-center py-[10rem]">
          Associate Vets Benefits
        </h1>
        <div className="ml-[4.1rem] flex">
          <div>
            <div className="h-[1.8rem] w-[8.2rem] bg-[#FEC20D]">
              <h1 className="font-semibold text-[1.4rem] leading-[1.8rem] relative top-[-.6rem] left-[-.8rem] text-[#282826]">
                FINANCIAL
              </h1>
            </div>
            <div className="w-[41.7rem] h-[20rem] bg-white mt-[3.3rem]">
              <h1 className="ml-[5.6rem] text-[1.4rem] leading-[1.8rem] pt-[1.6rem] mb-[3.2rem]">
                Leading compensation and bonuses
              </h1>
              <h1 className="ml-[5.6rem] text-[1.4rem] leading-[1.8rem] mb-[3.2rem]">
                Annual raises
              </h1>
              <h1 className="ml-[5.6rem] text-[1.4rem] leading-[1.8rem] mb-[3.2rem]">
                401k matching
              </h1>
              <h1 className="ml-[5.6rem] text-[1.4rem] leading-[1.8rem] mb-[3.2rem]">
                Profit sharing
              </h1>
            </div>
          </div>
          
          <div className="ml-[2.3rem]">
            <div className="h-[1.8rem] w-[20rem] bg-[#FEC20D]">
              <h1 className="font-semibold text-[1.4rem] leading-[1.8rem] relative top-[-.6rem] left-[-.8rem] text-[#282826]">
              QUALITY OF CARE & CAREER
              </h1>
            </div>
            <div className="w-[41.7rem] h-[25rem] bg-white mt-[3.3rem]">
              <h1 className="ml-[5.6rem] text-[1.4rem] leading-[1.8rem] pt-[1.6rem] mb-[3.2rem]">
              Favorable staffing ratios
              </h1>
              <h1 className="ml-[5.6rem] text-[1.4rem] leading-[1.8rem] mb-[3.2rem]">
              Practice medicine alongside hospital owners
              </h1>
              <h1 className="ml-[5.6rem] text-[1.4rem] leading-[1.8rem] mb-[3.2rem]">
              Continuing education & license support
              </h1>
              <h1 className="ml-[5.6rem] text-[1.4rem] leading-[1.8rem] mb-[3.2rem]">
              Hospital-level growth opportunities
              </h1>
              <h1 className="ml-[5.6rem] text-[1.4rem] leading-[1.8rem] mb-[3.2rem]">
              Best-in-class facilities and technology
              </h1>
            </div>
          </div>
          <div className="ml-[2.3rem]">
            <div className="h-[1.8rem] w-[20rem] bg-[#FEC20D]">
              <h1 className="font-semibold text-[1.4rem] leading-[1.8rem] relative top-[-.6rem] left-[-.8rem] text-[#282826]">
              QUALITY OF LIFE
              </h1>
            </div>
            <div className="w-[41.7rem] h-[20rem] bg-white mt-[3.3rem]">
              <h1 className="ml-[5.6rem] text-[1.4rem] leading-[1.8rem] pt-[1.6rem] mb-[3.2rem]">
              Leading compensation and bonuses
              </h1>
              <h1 className="ml-[5.6rem] text-[1.4rem] leading-[1.8rem] mb-[3.2rem]">
              Annual raises
              </h1>
              <h1 className="ml-[5.6rem] text-[1.4rem] leading-[1.8rem] mb-[3.2rem]">
              401k matching
              </h1>
              <h1 className="ml-[5.6rem] text-[1.4rem] leading-[1.8rem] mb-[3.2rem]">
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
            <h1 className="text-[1.8rem] leading-[2.4rem] text-[#282826] font-semibold w-[43.6rem]">Veterinary Technician - The Gultch</h1>
            <p className="text-[1.4rem] leading-[1.8rem] ml-[33.6rem] w-[25.2rem] mr-[4.8rem]">Nashville, TN</p>
            <p className="w-[3.2rem] h-[3.2rem] border border-black rounded-full text-[2rem] flex justify-center items-center"></p>
          </div>
          <div className="h-[6rem] w-[118.7rem] flex bg-white justify-center items-center my-[1rem]">
            <h1 className="text-[1.8rem] leading-[2.4rem] text-[#282826] font-semibold w-[43.6rem]">Veterinary Technician - West Loop</h1>
            <p className="text-[1.4rem] leading-[1.8rem] ml-[33.6rem] w-[25.2rem] mr-[4.8rem]">Chicago, IL</p>
            <p className="w-[3.2rem] h-[3.2rem] border border-black rounded-full text-[2rem] flex justify-center items-center"></p>
          </div>
          <div className="h-[6rem] w-[118.7rem] flex bg-white justify-center items-center my-[1rem]">
            <h1 className="text-[1.8rem] leading-[2.4rem] text-[#282826] font-semibold w-[43.6rem]">Veterinary Technician - Coconut Grove</h1>
            <p className="text-[1.4rem] leading-[1.8rem] ml-[33.6rem] w-[25.2rem] mr-[4.8rem]">Miami, FL</p>
            <p className="w-[3.2rem] h-[3.2rem] border border-black rounded-full text-[2rem] flex justify-center items-center"></p>
          </div>
          <div className="h-[6rem] w-[118.7rem] flex bg-white justify-center items-center my-[1rem]">
            <h1 className="text-[1.8rem] leading-[2.4rem] text-[#282826] font-semibold w-[43.6rem]">Veterinary Technician - Wynwood</h1>
            <p className="text-[1.4rem] leading-[1.8rem] ml-[33.6rem] w-[25.2rem] mr-[4.8rem]">Miami, FL</p>
            <p className="w-[3.2rem] h-[3.2rem] border border-black rounded-full text-[2rem] flex justify-center items-center"></p>
          </div>
          <div className="h-[6rem] w-[118.7rem] flex bg-white justify-center items-center my-[1rem]">
            <h1 className="text-[1.8rem] leading-[2.4rem] text-[#282826] font-semibold w-[43.6rem]">Veterinary Technician - The Gultch</h1>
            <p className="text-[1.4rem] leading-[1.8rem] ml-[33.6rem] w-[25.2rem] mr-[4.8rem]">Nashville, TN</p>
            <p className="w-[3.2rem] h-[3.2rem] border border-black rounded-full text-[2rem] flex justify-center items-center"></p>
          </div>
          <div className="h-[6rem] w-[118.7rem] flex bg-white justify-center items-center my-[1rem]">
            <h1 className="text-[1.8rem] leading-[2.4rem] text-[#282826] font-semibold w-[43.6rem]">Veterinary Technician - West Loop</h1>
            <p className="text-[1.4rem] leading-[1.8rem] ml-[33.6rem] w-[25.2rem] mr-[4.8rem]">Chicago, IL</p>
            <p className="w-[3.2rem] h-[3.2rem] border border-black rounded-full text-[2rem] flex justify-center items-center"></p>
          </div>
          <div className="h-[6rem] w-[118.7rem] flex bg-white justify-center items-center mt-[8rem]">
            <h1 className="text-[1.8rem] leading-[2.4rem] text-[#282826] font-semibold w-[43.6rem]">Veterinary Technician - Wynwood</h1>
            <p className="text-[1.4rem] leading-[1.8rem] ml-[33.6rem] w-[25.2rem] mr-[4.8rem]">Miami, FL</p>
            <p className="w-[3.2rem] h-[3.2rem] border border-black rounded-full text-[2rem] flex justify-center items-center"></p>
          </div>
        </div>

        <button className="border border-black px-[3rem] py-[1.6rem] text-[1.4rem] leading-[2rem] rounded-[5rem] mx-auto mt-[8rem]">VIEW ALL</button>
      </section>



      <section className="bg-[#FAF6F4] pt-[9.9rem] pb-[10rem] flex flex-col justify-center items-end">
      <h1 className="text-[7rem] mx-auto mb-[9rem] leading-[8rem]  text-left w-screen pl-[8.9rem]">
          <span className="text-yellow-500">    Good Stories </span>
    from GoodVets
        </h1>
        <div className="flex justify-end items-start  overflow-hidden max-w-[127.7rem]">
          <div className=" h-[58.4rem] bg-white w-[41.7rem]">
            <div className="w-[41.7rem] h-[40rem] bg-slate-400"></div>
            <p className="text-[2.2rem] leading-[2.9rem] font-semibold mt-[3rem] ml-[2rem] w-[34.3rem]">How to build a successful career in the veterinary industry.</p>
            <p className="text-[1.4rem] leading-[1.8rem] mt-[2rem] ml-[2rem] ">BY AUTHOR NAME <br /><span className="text-[#D9C7B8]"> AUTHOR TITLE</span></p>
          </div>
          <div className="ml-[7.8rem] h-[58.4rem] bg-white w-[41.7rem]">
            <div className="w-[41.7rem] h-[40rem] bg-slate-400"></div>
            <p className="text-[2.2rem] leading-[2.9rem] font-semibold mt-[3rem] ml-[2rem] w-[34.3rem]">Dr. Sheela Moss on how being a mentor enriches her career.</p>
            <p className="text-[1.4rem] leading-[1.8rem] mt-[2rem] ml-[2rem] ">BY AUTHOR NAME <br /><span className="text-[#D9C7B8]"> AUTHOR TITLE</span></p>
          </div>
          <div className="ml-[7.8rem] h-[58.4rem] bg-white w-[41.7rem] overflow-hidden">
            <div className="w-[41.7rem] h-[40rem] bg-slate-400"></div>
            <p className="text-[2.2rem] leading-[2.9rem] font-semibold mt-[3rem] ml-[2rem] w-[34.3rem]">Take a Tour of GoodVets in Streeterville, Chicago.</p>
            <p className="text-[1.4rem] leading-[1.8rem] mt-[2rem] ml-[2rem] ">BY AUTHOR NAME <br /><span className="text-[#D9C7B8]"> AUTHOR TITLE</span></p>
          </div>
        </div>
        <button className="border border-black px-[3rem] py-[1.6rem] text-[1.4rem] leading-[2rem] rounded-[5rem] mx-auto mt-[8rem]">MORE GOOD STORIES</button>

      </section>


      <section className="pl-[8.9rem] pb-[12rem]">
        <h1 className="text-[4rem] leading-[4.8rem] w-[55.8rem] mt-[8.1rem] mb-[6rem] text-[#262626]">
        Keep up with what’s <br /> happening at GoodVets!
        </h1>
        <div className="w-[124.2rem] border-b border-black ">
        <h1 className="text-[2.2rem] leading-[2.9rem] font-semibold text-[#262626]">Enter your email</h1>
        </div>
      </section>


      <footer className="flex flex-col justify-between bg-[#262626] text-[1.4rem] leading-[1.8rem] text-white h-[42.6rem] pt-[6rem]">
        <div className="flex">
        <div className="ml-[3.4rem]"> 
          <p className=" w-[14.2rem]">My Account</p>
        </div>
        <div className="ml-[40.8rem]">
          <p className="mb-[1rem] w-[14.2rem]">Locations</p>
          <p className="mb-[1rem] w-[14.2rem]">Services</p>
          <p className="mb-[1rem] w-[14.2rem]">Virtual care</p>
          <p className="mb-[1rem] w-[14.2rem]">Wellness Plans</p>
        </div>
        <div className="ml-[13.3rem]">
          <p  className="mb-[1rem] w-[14.2rem]">Join our Team</p>
          <p  className="mb-[1rem] w-[14.2rem]">Partner with Us</p>
          <p  className="mb-[1rem] w-[14.2rem]">Associate Vets</p>
          <p  className="mb-[1rem] w-[14.2rem]">New Grads</p>
          <p  className="mb-[1rem] w-[14.2rem]">Technicians & Staff</p>
        </div>
        <div className="ml-[13.3rem]">
          <p  className="mb-[1rem] w-[14.2rem]">Careers</p>
          <p  className="mb-[1rem] w-[14.2rem]">Journal</p>
          <p  className="mb-[1rem] w-[14.2rem]">FAQ</p>
          <p  className="mb-[1rem] w-[14.2rem]">Press</p>
        </div>
        </div>
        <div className="flex py-[1.9rem] border-t border-white">
  <p className="ml-[3.4rem] w-[14.2rem]">©2022 GOODVETS</p>
  <p className="ml-[40.8rem] w-[14.2rem]">Terms & Legal</p>
  <p className="ml-[13.3rem] w-[14.2rem]">Privacy Policy</p>
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
