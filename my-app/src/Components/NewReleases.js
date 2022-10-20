import React from "react";
import { Link } from "react-router-dom";

function NewReleases(){
    return (
         <div className="mt-2 ms-lg-5 mt-lg-5">
         <h5>New Releases.</h5>
        <div className=" releases-container d-flex gap-5">
           <Link to ="/Album"> <img className="releases" src={require('./Images/Rectangle 14.png')}></img></Link>
            <img className="releases" src={require('./Images/Rectangle 15.png')}></img>
            <img className="releases" src={require('./Images/Rectangle 14.png')}></img>
            <img className="releases" src={require('./Images/Rectangle 17.png')}></img>
            <img className="releases" src={require('./Images/Rectangle 18.png')}></img>
            <img className="releases" src={require('./Images/Rectangle 19.png')}></img>
            <img className="releases" src={require('./Images/Rectangle 20.png')}></img>
            <img className="releases" src={require('./Images/Rectangle 14.png')}></img>
            <img className="releases" src={require('./Images/Rectangle 14.png')}></img>


        </div>
        </div>
    )
}


export default NewReleases
