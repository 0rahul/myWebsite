import React from 'react';
import imgs from './images/1web.jpg' ;
import imgss from './images/2web.jpg';
import imggs from './images/web3.jpg.png';


const Project=()=>{
    return(
<>
<div id="mainee" className="Maine">
<img id="bsado"  src={imgs} alt="website" width="420" height="250"/>
<img id="bsado"  src={imgss} alt="website" height="450"/>
<div classsName="paras">
<h2 id="pass">Website Building Company</h2>
<p id="passes">I was very happy that i was able to complete the task at the required time.<br/>
It was also a good time and first project where i learned many more things.<br/>
I was glad because i learned and built this responsve website.<br/>
My leader and client was also satisfied and happy  seeing<br/> this task being progressed.</p>
</div>
</div>
<div id="mainee">
<img id="musicweb" src={imggs} alt="website" width="750" height="400"/>
<h2 id="h222">Online Music Website</h2>
<p id="hpppp">This Music website was my Second project during my work.<br/>All went
good and the work was completed . I also <br/>learned much more<br/> things during this pproject.<br/>
It was soo good to work with my co-workers and teammates.<br/>I learned to work in team completing the work and <br/> helping
eachother as<br/> teammates.</p>

</div>
</>
    );
}
export default Project;