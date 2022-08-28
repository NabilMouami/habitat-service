import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./style.css"
const Slide = () => {
  return (
    <Carousel className="main-slide" showArrows={true} showThumbs={true} autoPlay={true} showStatus={false} showIndicators={false} stopOnHover={false} >
      <div>
        <img src="/assets/bois-blanco.jpg" style={{width: '100%'}}/>
      </div>
      <div>
        <img src="/assets/bois-rouge.jpg"  style={{width: '100%'}}/>
      </div>
      <div>
        <img src="/assets/madrier.jpg"  style={{width: '100%'}}/>
      </div>
    </Carousel>
  );
};

export default Slide;
