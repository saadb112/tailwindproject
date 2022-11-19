import React from 'react'
import Navbar from './Navbar'

const Main = () => {
  return (
    <section className='mainSection'>
        <Navbar />
        <div className="main">
            <h2>
            A strong <br />
strategy for your business
            </h2>
            <hr />
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
the industry's standard dummy text ever since the 1500s,</p>
        </div>
    </section>
  )
}

export default Main