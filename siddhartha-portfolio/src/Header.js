import React from 'react'
import "./Header.css"
function Header() {
    return (
        <>
        <div className="top__main">
        <img src="https://image.freepik.com/free-vector/cartoon-people-character-design-happy-young-man-working-laptop-sitting-front-desk-ideal-both-print-web-design_311865-7600.jpg"/>
          <p>Hello</p><br/>
          <h1><strong>I'm Pavan Siddhartha</strong></h1><br/>
          <p>Student at KL University</p><br/>
         <img src="./images/about.jpg"/>
      <a href="https://drive.google.com/file/d/1DIJSYH9O1rs46AFuvtEuW4n5JY_8Ah3Q/view"target="_blank">    <button className="btn1">My Resume</button></a>
     
      
      </div>
      <div class="social-menu">
    
    <ul>
      <li><a href="https://www.facebook.com/siddhartha.reddy.9822"target="_blank"><i class="fa fa-facebook"></i></a></li>
     
      <li><a href="https://www.instagram.com/siddhartha5231/"target="_blank"><i class="fa fa-instagram"></i></a></li>
     
      <li><a href="https://www.linkedin.com/in/pavan-siddhartha-reddy-012a97204/"target="_blank"><i class="fa fa-linkedin"></i></a></li>
    </ul>
  </div>
  </>
    )
}

export default Header
