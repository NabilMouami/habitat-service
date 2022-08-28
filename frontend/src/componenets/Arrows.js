import React from "react";

function Arrows({ prevSlide, nextSlide }) {
  return (
    <div className="arrows">
      <span className="prev-sl" onClick={prevSlide}>
        &#10094;
      </span>
      <span className="next-sl" onClick={nextSlide}>
        &#10095;
      </span>
    </div>
  );
}

export default Arrows;
