import React from "react";
import "./contact.css"
function Contact(){
    return(
        <div className="contact-container">
          <div className="contacts-photo"></div>
          <div className="form-container">
              <h1 className="form-header">Contact Me</h1>
              <form>
                   <input type="text" placeholder="Full Name"/>
                   <input type="email" placeholder="E-mail"/>
                   <textarea placeholder="Message.."></textarea>
                   <button type="button" className="contact-button">Contact Us</button>
              </form>
          </div>
          <div className="describe-container">
          <div className="describe">
              <div className="contact">
                 <h4>Contact</h4>
                 <p>giorgi.jumushadze.1@btu.edu.ge</p>
              </div>
             <div className="based">
                 <h4>Based In</h4>
                 <p>Georgia</p>
                 <p>Tbilisi</p>
             </div>
          </div>
          <div className="social">
              <a href="https://www.linkedin.com/in/giorgi-jumushadze-2934ab22a/?fbclid=IwAR03OdvwMAnw1ZujXTaimxUCDnFOpo6IyQ6AKXJ1222gVRJZidOYgRGN1Fk"><i class="fab fa-linkedin"></i></a>
              <a href="https://www.facebook.com/giorgi.jumushadze.99"><i class="fab fa-facebook-square"></i></a>
              <a href="https://www.instagram.com/jumugeorge/"><i class="fab fa-instagram-square"></i></a>
          </div>
          </div>
        </div>
    )
}

export default Contact;