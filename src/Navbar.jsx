import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import {NavLink} from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter'
//import WbCloudyIcon from '@material-ui/icons/WbCloudy';
import CodeIcon from '@material-ui/icons/Code';
import Comp from './Comp';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PComp from './Pcomp.jsx';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Project from './Projects';
import Skills from './Skill.jsx';





const Navbar=()=>{
return (
    <>
    <div className="mainnav">
  <nav class="navbar navbar-expand-lg navbar-light bg-light ">
  <div class="container-fluid">
    <a class="navbar-brand"  href="#">Portfolio<CodeIcon/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav" id="fontc">
        <li class="nav-item" >
          <NavLink exact to="/" class="nav-link active" aria-current="page" href="#">Home</NavLink>
        </li>
        <li class="nav-item">
          <NavLink exact to="/Resume" class="nav-link" href="#">Resume</NavLink>
        </li>
        <li class="nav-item">
          <a  href="#mainee" class="nav-link" >Projects</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#contact">Contact</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
</div>
{//<div>
//<WbCloudyIcon id="arrow" />
//<WbCloudyIcon id="arrow" />
//<WbCloudyIcon id="arrow" />


//</div>
}
<div>
<h1 
        style={{ paddingTop: '5rem' , fontSize:'25px',textAlign:'center', margin: 'auto 0', fontFamily:'serif' }}
      >
         A passionate {' '}
        <span style={{ color: 'purple', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter 
            words={['Frontend Developer..', 'Web Designer..', 'Programmmer..', 'Coder..']}
            loop={100}
            cursor
            cursorStyle='|'
            typeSpeed={60}
            deleteSpeed={100}
            delaySpeed={1000}
            onLoopDone={() => console.log(`Done after 100 loops!`)}
          />
        </span>
      </h1>
  
  
</div>
<div className="front">
<h1 id="h11">Successful Front-end Development</h1>
<h3 id="h22">Hi. I'm<span id="raul"> Rahul Thakur</span>, A  Front-end Developer with 2 years commercial experience creating successful websites.</h3>
</div>
<Comp/>
<div className="foot">
<h1 id="foots">I love to Innovate New Things</h1>
<h3 id="feet"><ArrowDownwardIcon id="arrow"/>With<ArrowDownwardIcon id="arrow"/></h3>
</div>
<PComp/>
<Project/>
<Skills/>

<div id="contact" className="footers">
<div className="contac">
<h3 id="cotac"><MailOutlineIcon id="maild"/> Rt887528@gmail.com</h3>
<h3 id="cotac"><PhoneInTalkIcon id="maild"/> 9880206079</h3>
<h3 id="cotac"><LocationOnIcon id="maild"/> Kathmandu, Nepal</h3>
</div>
<div className="Links">
<h4 id="h44">Follow me on:</h4>
<a href="https://www.facebook.com/i.know.u.idku/" ><button id="bttn"><FacebookIcon id="iccns"/></button></a>
<a href="https://www.instagram.com/raulthakur_/?hl=en" ><button id="bttn"><InstagramIcon id="iccn"/></button></a>
<a href="https://www.linkedin.com/in/rahul-thakur-2416201aa/" ><button id="bttn"><LinkedInIcon id="iccns"/></button></a>
</div>
<a href="https://mail.google.com/mail/u/0/#inbox?compose=new"><button type="button" id="butte" class="btn btn-outline-primary">Get Connected</button></a>
<div>
<h3 id="copy">© 2021 Rahul Thakur.  All rights reserved.</h3>
</div>
</div>

    </>
            );
          }
export default Navbar;
