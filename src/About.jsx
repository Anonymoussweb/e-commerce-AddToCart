import React from 'react'
import './Style.css'
import { NavLink } from 'react-router-dom'
function About() {

  return (
    <div className='About'>
      <div className="Hheader">

        <div className="content1">
          <h1>Wellcome To <br /> <span>About page.</span></h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic aspernatur <br />voluptatem sed harum reprehenderit pariatur ab iure alias labore! Quisquam tempore <br />minima, corrupti voluptatibus corporis maxime molestias quo? Quisquam quos porro nihil mollitia <br />exercitationem ducimus illum repellendus voluptatibus ex. Cum.</p>
          <NavLink to="/Products"><button>Shop Now</button></NavLink>
        </div>
        <div className="figure">
          <img src="/pic1.jpg" alt="" />
        </div>

      </div>
      <div>
        <h1 className='centre'>See More</h1>
      </div>
      <div className='content2'>
        <div>
          <img src="/a1.jpg" alt="" />
        </div>
        <div>
          <img src="/a2.jpg" alt="" />
        </div>
        <div>
          <img src="/a3.jpg" alt="" />
        </div>

      </div>


    </div>

  )
}

export default About
