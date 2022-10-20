import {React,  useRef} from "react";


function Album(){

    let container = []
    let LikeContainer = []

     function Pushref(el){
         console.log(el)
         if(el){
             container.push(el)
         }
         console.log(container)
     }

     function Likeref(el){
      console.log(el)
      if(el){
          LikeContainer.push(el)
      }
      console.log(LikeContainer)
     }

    function handleCollection(){
        // imageref.current.style.display = 'none'
        for(let i = 0; i<container.length; i++){
            container[i].style.display = 'block'
             LikeContainer[i].style.display = 'none'
        }
    }

    function handleLike(){
        for(let i = 0; i<LikeContainer.length; i++){
            LikeContainer[i].style.display = 'block'
            container[i].style.display = 'none'
        }

    }

    return (
        <div className="">
     <div className="mt-5 d-flex button-container gap-lg-5 gap-3">
<button onClick={handleCollection} className="collection btnn">My Collection</button>
<button onClick={handleLike} className="likes btnn">Likes</button>
     </div>

     <div className="mt-4 d-lg-flex d-block gap-4">

<div className="position-relative collection-img"  ref={Pushref}>
<img  className="releases small-picture collection-img" src={require('./Images/Rectangle 14.png')}></img>
<img  className="bigger-picture " src={require('./Images/Rectangle 26.png')}></img>
<div className=" ms-3 title">Limits</div>
</div>

<div className="position-relative  collection-img"  ref={Pushref}>
<img  className="releases  small-picture collection-img" src={require('./Images/Rectangle 17.png')}></img>
<img  className="bigger-picture mt-4 " src={require('./Images/Rectangle 27.png')}></img>
<div className=" ms-3 title">Limits</div>
</div>

<div className="position-relative collection-img"  ref={Pushref}>
<img  className="releases small-picture collection-img" src={require('./Images/Rectangle 19.png')}></img>
<img  className="bigger-picture mt-4 " src={require('./Images/Rectangle 28.png')}></img>
<div className=" ms-3 title">Limits</div>
</div>


<div className="position-relative collection-img"  ref={Pushref}>
<img  className="releases small-picture collection-img" src={require('./Images/Rectangle 20.png')}></img>
<div className=" ms-3 title">Limits</div>
</div>

{/* // */}

<div className="position-relative   liked-collection "  ref={Likeref}>
<img  className="releases  small-picture " src={require('./Images/Rectangle 15.png')}></img>
<img  className="bigger-picture" src={require('./Images/Rectangle 26.png')}></img>
<div className=" ms-3 title">Xtra cool</div>
</div>

<div className="position-relative  liked-collection  "  ref={Likeref}>
<img   className="releases  small-picture " src={require('./Images/Rectangle 15.png')}></img>
<img  className="bigger-picture mt-4 " src={require('./Images/Rectangle 27.png')}></img>
<div className=" ms-3 title">Patek</div>
</div>

<div className="position-relative liked-collection"  ref={Likeref}>
<img className="releases   small-picture" src={require('./Images/Rectangle 15.png')}></img>
<img  className="bigger-picture mt-4 " src={require('./Images/Rectangle 28.png')}></img>
<div className=" ms-3 title">Ototo</div>
</div>

<div className="position-relative liked-collection"  ref={Likeref}>
<img  className="releases  small-picture  " src={require('./Images/Rectangle 15.png')}></img>
<div className=" ms-3 title">Joha</div>
</div>


     </div>

     </div>
    )
}

export default Album
