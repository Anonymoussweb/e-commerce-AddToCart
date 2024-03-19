import React from "react";
import './Style.css'
function Contact() {
  return (
    <div className="Contact">
      <h2>Contact Page <hr /></h2>
        <div className="map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217759.99380853778!2d74.3343893!3d31.482940349999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab!5e0!3m2!1sen!2s!4v1687604715968!5m2!1sen!2s" width="600" height="450" style={{border:0}} allowFullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      
         <div className="form">
          <form action="https://formspree.io/f/mdornkgg" method="POST">
            <label htmlFor="">Username 
            <input type="text" placeholder="Username"
            name="Username"
            required/></label>
            <label htmlFor="">Email----:
             <input type="Email" autoComplete="off" placeholder="Email"
            name="Email"
            required/></label>
            <label htmlFor="">Message
            <textarea name="textarea" id="" cols="30" rows="5"placeholder="type here">Message</textarea></label>
            <button className='btn'type="submit">Submit</button>

          </form>
         </div>

    </div>
  )
}

export default Contact
