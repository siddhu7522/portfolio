import React from 'react'
import "./Contact.css"
function Contact() {
    return (
        <div className="contact">
            <h1>Contact Me</h1>
            <footer>
                <div className="footer__container">
                <div className="left__col">
                <i class="fa fa-envelope-o" aria-hidden="true"></i>
               
                <a href="mailto:siddhureddy7522@gmail.com"><p>siddhureddy7522@gmail.com</p></a><br/><br/>
                <i class="fa fa-phone" aria-hidden="true"></i>
                <p>6303467339</p><br/><br/>
                <h2 className="rights__text">&#169;All rights reserved</h2>

                </div>
                <div className="right__col">
                    <h2>Our Newsletter</h2><br/>
                    <div className="border"></div>
                    
                    <form action ="" class="newsletter__form">

                        <input type="text"className="txtb"placeholder="Enter your Email"/>
                        
                        <input type="submit"class="btn"value="submit"/>
                    </form>
                </div>
                </div>
            </footer>
           
        </div>
    )
}

export default Contact
