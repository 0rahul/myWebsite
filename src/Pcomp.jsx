import React from "react";
import { Swiper, SwiperSlide  } from "swiper/react";


import img1 from './images/4.jpg';
import img2 from './images/5.jpg';
import img3 from './images/6.jpg';
import img4 from './images/3.jpg';
import img5 from './images/7.jpg';
import img6 from './images/8.jpg';
import img7 from './images/next.jpg';

//import {  Navigation,  Scrollbar, Autoplay } from 'swiper/react';


// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import './Pcomp.css';




// import Swiper core and required modules
import SwiperCore, { Navigation,
  Pagination ,Autoplay
} from 'swiper/core';
SwiperCore.use([Navigation,Pagination,Autoplay]);
   



//<Swiper dotColor="#000" activeDotColor="red" />


const Release=()=>{
    return(
<>
<div className="bode">

<Swiper 
navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
 autoplay
 slidesPerView={3} spaceBetween={0} slidesPerGroup={1} loop={true} loopFillGroupWithBlank={true} pagination={{
  clickable: true ,
  bulletClass: `swiper-pagination-bullet`,
  
  
}} 
  className="mySwiper">
  {//use bullet class for dot color
   }


  <SwiperSlide><div>
          <div className="cardsss">
         <img id="photo" src={img1} alt="" />
            <h4 id="h4" >HTML 5</h4>
            <h5 id="h5s">For giving structure to static and dynamic websites.</h5>
          </div>
        </div></SwiperSlide>
        
        <SwiperSlide>
        <div>
          <div className="cardsss">
           <img id="photo" src={img2} alt="" />
            <h4 id="h4">CSS 3</h4>
            <h5 id="h5s">For customization of websites as per clients required.</h5>
          </div>
        </div>
        </SwiperSlide><SwiperSlide>
        <div>
          <div className="cardsss">
           <img id="photo" src={img3} alt="" />
            <h4 id="h4">Javascript</h4>
            <h5 id="h5s">For dynamically updating content.</h5>
          </div>
        </div>
        </SwiperSlide>
  <SwiperSlide><div>
          <div className="cardsss">
           <img id="photo" src={img4} alt="" />
            <h4 id="h4">React JS</h4>
            <h5 id="h5s">For project based on real life scenarios.</h5>
          </div>
        </div></SwiperSlide><SwiperSlide>
        <div>
          <div className="cardsss">
           <img id="photo" src={img5} alt="" />
            <h4 id="h4">Bootstrap</h4>
            <h5 id="h5s">For Quickly design and customize responsive.</h5>
          </div>
        </div>
        </SwiperSlide><SwiperSlide><div>
          <div className="cardsss">
           <img id="photo" src={img6} alt="" />
            <h4 id="h4">Ant Design</h4>
            <h5 id="h5s">Design system for enterprise-level products.</h5>
          </div>
        </div></SwiperSlide> 
        <SwiperSlide><div>
          <div className="cardsss">
           <img id="photo" src={img7} alt="" />
            <h4 id="h4">Next Js</h4>
            <h5 id="h5s">Giving SEO service to the websites.</h5>
          </div>
        </div></SwiperSlide> 
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
  </Swiper>
  
  
  </div>
    </>

    );
}
export default Release;