import React from 'react'
import "./style.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Sdata from "./Sdata"

const ProdAcceuil = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        autoplay: true,
        appendDots: (dots) => {
          return <ul style={{ margin: "200px -400px" }}>{dots}</ul>;
        },
      };
    
    
  return (
    <div className="slider-image">
      <Slider {...settings}>
        {Sdata.map((value, index) => {
          return (
            <>
              <div className="boxing" key={index}>
                <div className="left-b">
                  <h3>{value.title}</h3>
                  <p>{value.desc}</p>
                </div>
                <div className="right-b">
                  <img src={value.cover} alt="" />
                </div>
              </div>
            </>
          );
        })}
      </Slider>
    </div>
  )
}

export default ProdAcceuil