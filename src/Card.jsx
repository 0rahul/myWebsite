import React from 'react';


const Cards=(props)=>{
    return(
        <>
     <div className="main_card">
        <div className="card">
         <img id="cardimg" src={props.images} class="card-img-top" alt="card"/>
               <div class="card-body">
                   <h5 class="card-title" id="h55">{props.title}</h5><hr/>
             <p  class="card-text">{props.para}</p>
            
  </div>
</div>
</div>
        </>
    );
}
export default Cards;