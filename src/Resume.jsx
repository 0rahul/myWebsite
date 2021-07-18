import React from 'react';
import imgRes from './images/Cv.pdf';
 
const Resume=()=>{
    return(
<>
<div className="Reume">
<embed   id="Resum" src={imgRes} alt="Resume"/>
</div>
</>
    );
}
export default Resume;