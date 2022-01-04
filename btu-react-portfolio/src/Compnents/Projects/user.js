import React from "react";

function User({props}){
  return(
      <>
       {props.map(response=>{
           return(
            <div className="user-container" key={response.id}>
            <img src={response.avatar_url} />
            <p className="name-user">{response.login}</p>
            <a href={response.html_url}>See Repository</a>
        </div>
           )
       })}
      </>
  )
}

export default User