import React from 'react'
import { NavLink } from "react-router-dom"
import {AiFillInstagram,AiFillYoutube,AiFillFacebook} from"react-icons/ai";
import './Style.css'


function Footer() {
  return (
    <div className='Footer'>
        <div className="footermid">
            <div> Ready to get Started? <br />
            talk to us today</div>
            <div><NavLink to="/Contacts"><button>Get Started</button></NavLink></div>
        </div>
        <div className='footer1'>
            <div>
                <h3><span>A</span>zhar'<span>s</span></h3>
                Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Totam, dolorum.
            </div>
            <div className='fsubs'>
                <h3>Subscribe to get more updates</h3>
                <div>
                 <form action="" method=''>
                    <div>
                    <input type='email' name='email' autoComplete='off'placeholder='Email here'/>
                    </div>
                    <button className='sbtn'>Subscribe</button>
                 </form>
                 </div>
            </div>
            <div className='footericons'>
            <h3>Folow us on</h3>
                <div className='ficons'>
                
                   <div>
                   <AiFillFacebook className='icons'/>
                   </div>
                   <div>
                    <AiFillInstagram className='icons'/>
                    </div>
                   <div>
                    <AiFillYoutube className='icons'/>
                   </div>
                </div>
           </div>
            <div>
               <h3>Contact us</h3>
                <p>+9287987989998</p>
            </div>
            
        </div>
        <hr />
        <div className='footerend'>
            <div><span>A</span>zhar'<span>s</span> Web.All Rights Reserved</div>
            <div>Privacy Policy
            Terms and Conditions</div>
        </div>
      


       
    </div>
  )
}

export default Footer
