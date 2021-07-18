import React from 'react';
import Cards from './Card.jsx';
import Json from './Json';


const Comp=()=>{
    return(
<>
{   Json.map((curVal,index)=>{
    return ( <Cards
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
export default Comp;