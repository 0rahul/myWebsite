import React from 'react';


const Pcards=(props)=>{
    return(
        <>
        
     <div className="main_card" id="mcard">
        <div className="cards">
         <img id="cardimgs" src={props.images} class="card-img-top" />
               <div class="card-body">
                   <h5 class="card-title" id="h55">{props.title}</h5><hr/>
             <p id="hpp"  class="card-text">{props.para}</p>
            
  </div>
</div>
</div>

        </>
    );
}
export default Pcards;