import React from 'react';
import Pcards from './Pcard.jsx';
import Pjson from './Pjson';


const PComp=()=>{
    return(
<>
{   Pjson.map((curVal,index)=>{
    return ( <Pcards
    index={curVal.id}
    images={curVal.image}
    para={curVal.para}
    title={curVal.title}

    />

    );
})}
</>
    );
}
export default PComp;