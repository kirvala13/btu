import React from "react";
import "./home.css"
function Home(){
    return(
        <>
        <main>
        <div className="opacity"></div>
         <div className="name-container">
         <h1 className="name">George</h1>
          <div className="line"></div>
          <h2>Front-End  React.js Developer</h2>
          <div className="line2"></div>
          <div className="line3"></div>
         </div>
         <a className="download" href="george.pdf" download="Jumushadze george.pdf" >
         <div className="CvButton">
            <div className="vector1"></div>
            <div className="vector2"></div>
            <div className="vector3"></div>
            <div className="vector4"></div>
            <h3>Download CV</h3>
        </div>
        </a>
        </main>
        </>
    )
}

export default Home;