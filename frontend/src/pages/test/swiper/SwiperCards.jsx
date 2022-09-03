import React from "react";
import { Navigation, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css/scrollbar';

import "swiper/css/effect-coverflow";
import "./style.css";
import data from "../../details/boisrouge/interst/data";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper/core";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { detailsBois } from "../../../actions/boisaction";
SwiperCore.use([EffectCoverflow, Pagination]);

const SwiperCards = () => {
  const dispatch = useDispatch();

  return (
    <section id="testimonials" className="main-testimonials-wrapper">
      <h3 style={{textAlign: "center"}}>DÉCOUVREZ NOS PRODUITS</h3>
      <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation
        effect={"coverflow"}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        autoplay={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 8,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
        }}
       
        className="mySwiper"
      >
        {data.map((item, key) => (
          <SwiperSlide>
            <img src={item.data.image} alt={item.name} width="100%" height="150px"/>
            <h3>{item.title}</h3>
            <p>{item.data.category}</p>
            <Link
              to={"produits/" + item.title + "/" + item.id}
              key={item.data.id}
              onClick={() => dispatch(detailsBois(item))}
            >
              <button>Details</button>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default SwiperCards;
