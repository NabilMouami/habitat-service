import React from "react";

function Dots({ activeIndex, onclick, sliderImage }) {
  return (
    <div className="all-dots">
      {sliderImage.map((slide, index) => (
        <img
          src={slide.urls}
          key={index}
          className={`${activeIndex === index ? "dot active-dot" : "dot"}`}
          onClick={() => onclick(index)}
        />
      ))}
    </div>
  );
}

export default Dots;
