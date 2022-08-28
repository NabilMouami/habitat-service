import { useState, useRef } from "react";

import "./gallery.css";
const images = [
  "/assets/caison1.jpg",
  "/assets/caison2.jpg",
  "/assets/caison3.jpg",
  "/assets/caison4.jpg",
];

const Gallery = () => {

  const [img, setImg] = useState(images[0]);
  const hoverHandler = (image, i) => {
    setImg(image);
    refs.current[i].classList.add("active");
    for (var j = 0; j < images.length; j++) {
      if (i !== j) {
        refs.current[j].classList.remove("active");
      }
    }
  };
  const refs = useRef([]);
  refs.current = [];
  const addRefs = (el) => {
    if (el && !refs.current.includes(el)) {
      refs.current.push(el);
    }
  };

  return (
    <>
      <section className="home-acceuil" id="home">
        <div className="head-container">
        
          <div className="image-acceuil">
            <img
              src={img}
              className="slide-acceuil"
              width="100%"
              height="100%"
              
            />
          </div>
          <div className="image_item">
            {images.map((image, i) => (
              <img
                src={image}
                onMouseOver={() => hoverHandler(image, i)}
                ref={addRefs}
              />
            ))}
            {/*
      <img src="image/home1.jpg" alt="" class="slide active" onMouseOver="img('image/home1.jpg')" />
        <img src="image/home2.jpg" alt="" class="slide" onMouseOver="img('image/home2.jpg')" />
        <img src="image/home3.jpg" alt="" class="slide" onMouseOver="img('image/home3.jpg')" />
        <img src="image/home4.jpg" alt="" class="slide" onMouseOver="img('image/home4.jpg')" />
     */}
          </div>
        </div>
      </section>

    </>
  );
};

export default Gallery;
