import React from "react";
import "./header.css"
import {Route,BrowserRouter as Router, Switch, Link} from 'react-router-dom'
import Home from "../Home/Home";
import Contact from "../Contact/contact";
import Project from "../Projects/Project";
import About from "../About/About";
import vector1 from "../../assets/Vector.png"
import vecto from "../../assets/Vecto.png"
function Header(){

   return(
       <div >
           <Router>
            <div className="header">
            <Link to="/" className="style">
            <div className="logo">
                <div className="logo-img">
                  <img src={vecto}/>
                  <img src={vector1}/>
                </div>
                <h1>George</h1>
            </div>
            </Link>
           <ul className="menu">
                <li><Link className="style" to="/">Home</Link> </li>
                <li><Link className="style" to="about">About</Link></li>
                <li><Link className="style" to="contact">Contact</Link></li>
                <li><Link className="style" to="project">Projects</Link></li>
           </ul>
           </div>
           <Switch>
               <Route path="/" exact component={Home}/>
               <Route path="/about" component={About}/>
               <Route path="/contact" component={Contact}/>
               <Route path="/project" component={Project}/>
           </Switch>
           </Router>
       </div>
   )
}

export default Header;