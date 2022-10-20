import React from "react";
import { AiFillHome,  } from "react-icons/ai"
import { FaUserAlt } from "react-icons/fa"
import { IoLogOutSharp } from "react-icons/io5"
import { GrFavorite } from "react-icons/gr"
import radioLogo from './radio.svg'
import exploreLogo from './video-horizontal.svg'
import RandB from './RandB.png'




function Sidebar(){
    return (
        <>



        <div className="d-flex gap-5 mt-5">
             <div className="row">
            <div className=" col-12 col-lg-8  ">

       <img className="img-fluid dashboard-img" src={RandB}></img>
       </div>
       {/* <img className="img-fluid"  src={require('./RandB small.png')} ></img> */}

       <div className="col-12 col-lg-4 d-lg-block">

       <div className="Top-Charts mt-5 mt-lg-0  d-lg-block">
           <h5>Top Charts</h5>
           <div className="d-flex playlist-container d-lg-block gap-5">
           <div className="playlists p-2   d-lg-flex d-block">
      <img className="playlist-cover" src={require('./golden.png')} />

       <div className="mt-2 ms-lg-3 d-flex  justify-content-between" style={{ width:"100%"}}>
        <div className="" style={{lineHeight:"10px"}}>
      <p style={{color:"#FFFFFF"}}>Golden age of 80s</p>
      <p style={{color:"rgba(255, 255, 255, 0.5)", fontSize:".8rem"}}>Sead Swaddler</p>
      <p style={{color:"rgba(255, 255, 255, 0.5)", fontSize:".8rem"}}>2:34:25</p>
      </div>
  <GrFavorite/>
        </div>
      </div>

       <div className="playlists mt-lg-3 p-2  d-lg-flex d-block ">
      <img className="playlist-cover" src={require('./reggae.png')} />

       <div className="mt-2 ms-lg-3 d-flex  justify-content-between" style={{ width:"100%"}}>
        <div className="" style={{lineHeight:"10px"}}>
      <p style={{color:"#FFFFFF"}}>Reggae "n" blues</p>
      <p style={{color:"rgba(255, 255, 255, 0.5)", fontSize:".8rem"}}>Dj Yk mule</p>
      <p style={{color:"rgba(255, 255, 255, 0.5)", fontSize:".8rem"}}>2:34:25</p>
      </div>
  <GrFavorite/>
        </div>
      </div>

       <div className="playlists mt-lg-3 d-block p-2  d-lg-flex d-block ">
      <img className="playlist-cover" src={require('./tomorrows tunes.png')} />

       <div className="mt-2 ms-lg-3 d-flex  justify-content-between" style={{ width:"100%"}}>
        <div className="" style={{lineHeight:"10px"}}>
      <p style={{color:"#FFFFFF"}}>Tomorrow's tunes</p>
      <p style={{color:"rgba(255, 255, 255, 0.5)", fontSize:".8rem"}}>Qdot</p>
      <p style={{color:"rgba(255, 255, 255, 0.5)", fontSize:".8rem"}}>2:34:25</p>
      </div>
  <GrFavorite/>
        </div>
      </div>

      </div>

</div>

       </div>

        </div>
        </div>



        </>
    )
}


export default Sidebar
