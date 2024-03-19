import React from "react";
import { NavLink } from "react-router-dom"
import './Style.css'
import {TbTruckDelivery} from"react-icons/tb";
import {FaShippingFast} from"react-icons/fa";
import {GiMoneyStack} from"react-icons/gi";
import {RiSecurePaymentFill} from"react-icons/ri";

function Home() {
  return (
    <>
             <div className="Hheader">
                   <div className="content1">
                           <h1>Wellcome To <br /> <span>eCommerce</span> Website</h1>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic aspernatur <br />voluptatem sed harum reprehenderit pariatur ab iure alias labore! Quisquam tempore <br />minima, corrupti voluptatibus corporis maxime molestias quo? Quisquam quos porro nihil mollitia <br />exercitationem ducimus illum repellendus voluptatibus ex. Cum.</p>
                   <NavLink to="/Products"><button>Shop Now</button></NavLink>
                   </div>
                   <div className="figure">
                       <img src="/pic1.jpg" alt="" />
                   </div>

             </div>

             {/* --------------services--------- */}

             <div className="services">
                  <div>
                    <TbTruckDelivery className="Sicon"/>
                    <p>SuperFast and free delivery</p>
                  </div>
                  <div>
                    <FaShippingFast className="Sicon"/>
                    <p>Non Contact Shipping</p>
                    </div>
                    <div>
                      <GiMoneyStack className="Sicon"/>
                    <p>Money Back Guarantee</p>
                    </div>
                    <div>
                      <RiSecurePaymentFill className="Sicon"/>
                    <p>Secure payment System</p>
                    </div>
             </div>
             <div className="trusted">
              <h3>Tusted By 100+ Companies <hr /></h3>
              
                   <div>
                       <img src="./t1.jpg" alt="" />
                   </div>
                   <div>
                   <img src="./t2.jpg" alt="" />
                    </div>
                    <div>
                    <img src="./t3.jpg" alt="" />
                    </div>
                    <div>
                    <img src="./t4.jpg" alt="" />
                    </div>
                    <div>
                    <img src="./t5.jpg" alt="" />
                    </div>
             </div>

      




 </>
  )
}

export default Home
