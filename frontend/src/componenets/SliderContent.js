import React from "react";
import { NavLink } from "react-router-dom";

function SliderContent({ activeIndex, sliderImage }) {
  return (
    <section>
      {sliderImage.map((slide, index) => (
        <div
          key={index}
          className={
            index === activeIndex ? "slides-sl active-sl" : "inactive-sl"
          }
        >
          <img className="slide-image" src={slide.urls} alt="" />
          <div className="sl-content">
            <h3>{slide.title}</h3>
            <h2>{slide.description}</h2>

            <div className="flex-but">
             <NavLink to="/produits"><button className="but">Découvrir</button></NavLink> 
             <NavLink to="/contact"><button className="but">Contact</button></NavLink>
            </div>
          </div>
          {/* <h2 className="slide-title">{slide.title}</h2>
          <h3 className="slide-text">{slide.description}</h3>
          <div className="flex-but">
             <button className="but">Lire Plus</button>
             <button className="but">Contact</button>
          </div>*/}
        </div>
      ))}
    </section>
  );
}

export default SliderContent;
