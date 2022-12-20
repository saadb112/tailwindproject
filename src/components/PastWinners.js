import React, { useEffect, useState } from 'react'
import Logo from "../Img/logo.png"
import CalenderWhite  from "../Img/calenderWhite.png"
import Giveaway  from "../Img/giveaway.png"
import Calender  from "../Img/calendar.png"
import FbVote  from "../Img/FbVote.png"
import TwVote  from "../Img/TwVote.png"
import IgVote  from "../Img/IgVote.png"
import Navbar from './Navbar'
import Footer from './Footer'
import ReactPaginate from 'react-paginate'
export default function PastWinners () {
    const [items, setitems] = useState([1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0])
  const [itemOffset, setItemOffset] = useState(0);
const [itemsPerPage, setitemsPerPage] = useState(10)
 
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

 
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

// const pagination = (startingRow, EndRow, BtnIndex) => {
//   const rows = document.querySelectorAll(".winners");
//   console.log(rows)
//   const Pagebtn = document.querySelectorAll(".Pagebtn");
//   const more = document.getElementById("more");
//   console.log(more)
//   console.log(rows)
//   const btnLength = 10
//   console.log(rows.length / 5)
//   for (let index = 0; index < Pagebtn.length; index++) {
//     const element = Pagebtn[index];
//     element.style.backgroundColor = "white";
//     element.style.color = "black";
    
//   }
//   // if (Pagebtn.length >= 5) {
//   //   more.innerText = "...";
//   // }
//   if (BtnIndex == undefined) {
//   } else {
//     Pagebtn[BtnIndex].style.backgroundColor = "black";
//     Pagebtn[BtnIndex].style.color = "white";
//   }
//   for (let index = 0; index < rows.length; index++) {
//     const element = rows[index];
//     element.style.display = "none";
//   }
//   for (let index = startingRow; index < EndRow; index++) {
//     const element = rows[index];
//     if (index >= rows.length) {
//     } else {
//       element.style.display = "flex";
//     }
//   }

// };
// pagination(0, 12)  

  
  return (
  <>
   <section className="Home PastWinnerHome">
   <Navbar/>

     
      <header>
        <nav>
          <div className="logo navdiv">
            <img src={Logo} alt="" />
            <p>The Quick Rich</p>
          </div>
          <div className="Links">
            <a href="" className="simpleParagraph">Sponsor</a>
            <a href="" className="simpleParagraph">About</a>
            <div className="giveaway">
              <p>Given Away So Far</p>
              <h1>$22,785</h1>
            </div>
            <a href="" className="simpleParagraph">FAQ</a>
            <a href="" className="simpleParagraph">Contact</a>
          </div>
          <button className="btn">Login / Signup</button>
        </nav>
      </header>

      <div className="container">
        <h2>PAST WINNER</h2>
        <p>Lorem Ipsum is simply dummy text of the printing</p>
        <button className="btn">Learn More</button>
      </div>
    </section>
    <section className="section3 section7 PastWinners">
      <div className="heading">
        <h2 className="simpleHeading">Latest Giveaway Result</h2>
        <p className="simpleParagraph">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
        </p>
      </div>
      <div className="container">

{currentItems.map((items)=>{

  return(

        <div className="r1 winners">
          <div className="left">
            <div className="top">
              <div className="left">
                <h2>Username</h2>
                <p className="simpleParagraph">
                  <img src={Giveaway} alt="" /> Giveaway Name
                </p>
              </div>
              <div className="right">
                <p className="simpleParagraph">
                  <img src={Calender} alt="" />
                  13 Oct 2022
                </p>
                <h2>Won $1500</h2>
              </div>
            </div>
            <div className="bottom">
              <div className="left">
                <h2>Votes</h2>
                <div className="votes">
                  <div className="icon simpleParagraph">
                    <img src={FbVote} alt="" />
                    09
                  </div>
                  <div className="icon simpleParagraph">
                    <img src={TwVote} alt="" />
                    09
                  </div>
                  <div className="icon simpleParagraph">
                    <img src={IgVote} alt="" />
                    09
                  </div>
                </div>
              </div>
              <div className="right">
                <h2>Total Votes :</h2>
                <p className="simpleParagraph">235</p>
              </div>
            </div>
          </div>
          <div className="mainRight">
            <div className="top">
              <h2>Next Draw</h2>
              <p className="simpleParagraph">
                <img src="./Img/calenderWhite.png" alt="" />13 Oct 2022
              </p>
              <p className="simpleParagraph">
                <img src="./Img/calenderWhite.png" alt="" />15 Oct 2022
              </p>
              <a href="">View All</a>
            </div>
            <div className="bottom">
              <p className="simpleParagraph">Potential Winnings</p>
              <h2>$1500</h2>
            </div>
          </div>
        </div>
  )

})

}
        
        
      </div>
      <ReactPaginate
        breakLabel="..."
        // nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        // previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageClassName='Pagebtn'
        nextClassName='next'
        previousClassName='prev'
        activeClassName='active'
        // activeLinkClassName='actie'
      />
      {/* <div className="pagination" id="pagination">
        <button className="Pagebtn" onClick={pagination(0, 12, 0)}>01</button>
        <button className="Pagebtn" onClick={pagination(12, 24, 1)}>02</button>
        <button className="Pagebtn" onClick={pagination(24, 36, 2)}>03</button>
        <button className="Pagebtn" onClick={pagination(36, 48, 3)}>04</button>
        <button className="Pagebtn" onClick={pagination(48, 50, 4)}>05</button>
        <button className="Pagebtn" onClick={pagination(50, 62, 5)} id="more">
          ...
        </button>
        <button className="Pagebtn" onclick="pagination(62, 74, 6)" id="last">
          20
        </button>
      </div> */}
    </section>

    <Footer/>

  </>
  )
}

