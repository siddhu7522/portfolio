import React from "react"
import './App.css';
import firebase from "./firebase"
import Skills from "./Skills"
import Header from "./Header"
import Projects from "./Projects"
import Contact from "./Contact"
function App() {
  return (
    <div className="App">
      <Header/>
    
    <Skills/>
    <Projects/>
    <Contact/>
            



    </div>
    
  

   
   
  



  );
  
 
}

export default App;
