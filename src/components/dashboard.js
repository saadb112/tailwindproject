import React, { useEffect, useState } from 'react'

const Dashboard = () => {
    const [Data, setData] = useState([])
    useEffect(() => {
//         const data = fetch("http://localhost:8000/dashboard",{
//             method: "POST",
//                   headers: {
//                       "Content-Type": "application/json",
//                   },
//                   body: JSON.stringify({
//                       token : localStorage.getItem("token")
//                   })
//           }).then((res) => res.json()).then((data)=>{
//               setData(data)
              
//               localStorage.setItem("IsLoggedin" , true)
//               console.log(data)
              
//   // console.log(data)
//           }).catch((error)=>{
//               console.log(error)
//           })
        const data = fetch("http://localhost:8000/upload",{
            method: "POST",
                  headers: {
                      "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                      token : localStorage.getItem("token")
                  })
          }).then((res) => res.json()).then((data)=>{
              setData(data)
              
            //   localStorage.setItem("IsLoggedin" , true)
            //   console.log(data)
              
  // console.log(data)
          })
    }, [])
    
  return (
    <div>{Data && Data.map((e)=>{
        console.log(e)
        return(
            <>
            <img src={`/uploads/${e.imgName}`} alt="" />
            <p>
type : {e.Type} <br />
Name : {e.Name} <br />
CName : {e.CName} <br />
WG : {e.WG} <br />
StartDate : {e.StartDate} <br />
EndDate : {e.EndDate} <br />
Terms : {e.Terms} <br />

            </p>
            </>
            )
            
    })}</div>
  )
}

export default Dashboard