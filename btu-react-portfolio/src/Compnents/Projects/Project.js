import axios from "axios";
import React, { useEffect, useState } from "react";
import User from "./user";
import './project.css'
function Project() {
    const [user, setUser] = useState([])
    useEffect(()=>{
     axios.get("https://api.github.com/users").then(response=>{
         setUser(response.data)
     })
    },[user])
    return (
        <div className="project-container">
            <h1>This is my friend's github and I work with them</h1>
            <div className="github-user">
                 <User props={user}/>
            </div>
         <h1 className="github-link">Here is all my project <a href="https://github.com/MAKIAVELIST?tab=repositories" alt="_blank"><i class="fab fa-github"></i></a></h1>
        </div>
    )
}

export default Project;