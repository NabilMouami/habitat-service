import React, { useState, useRef } from "react";
import Footer from "../../componenets/Footer";
import data from "../../utils/data";
import { Pie } from "react-chartjs-2";
import { Chart, Tooltip, Title, ArcElement, Legend } from "chart.js";
import NumberCounter from "number-counter";
import SliderCard from "./SliderCard";
import ProdAcceuil from "./ProdAcceuil";
import Products from "./products/Products";
import Forniseur from "./forniseur/Forniseur";
import Equipe from "./equipe/Equipe";
import Valorisant from "./valorisant/Valorisant";
import Review from "./review/Review";
import Gallery from "../test/Gallery/Gallery";
import Gall from "./gall/Gall";
import { NavLink } from "react-router-dom";
import Carousel from "./carousel/Carousel";
import Slider from "../../componenets/Slider";
import InterestProd from "../details/boisrouge/interst/InterestProd";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import VideoJS from "./video/Video";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import SwiperCards from "../test/swiper/SwiperCards";

const images = [
  "/assets/bois-rouge.jpg",
  "/assets/depoy.jpg",
  "/assets/madrier.jpg",
  "/assets/panneau.jpeg",
  "/assets/pin.jpg",
];

const Accueil = () => {
  const playerRef = React.useRef(null);

  const videoJsOptions = {
    controls: true,
    responsive: true,
    
    fluid: true,
    sources: [
      {
        src: "/assets/vhabitat.mp4",
        type: "video/mp4",
      },
    ],
  };
  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on('waiting', () => {
      videojs.log('player is waiting');
    });

    player.on('dispose', () => {
      videojs.log('player will dispose');
    });
  };

  Chart.register(Tooltip, Title, ArcElement, Legend);
  const [gnrData, setGnrData] = useState({
    labels: ["Bois", "Panneau et Contre-plaque", "Bande de Chand"],
    datasets: [
      {
        label: "Percentage  for All classNamees",
        data: [40, 40, 20],
        backgroundColor: ["rgba(75,192,192,1)", "red", "yellow"],
      },
    ],
  });

  const [img, setImg] = useState(images[0]);
  const hoverHandler = (image, i) => {
    setImg(image);
    refs.current[i].classNameList.add("active");
    for (var j = 0; j < images.length; j++) {
      if (i !== j) {
        refs.current[j].classNameList.remove("active");
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
    <div>
      <Slider />
      {/*<Gallery />*/}
      {/*<Carousel />*/}
      <section className="icons-container">
        {data.map((item) => {
          const { id, icon, following, title } = item;
          return (
            <div className="icons" key={id}>
              <img src={icon} width="100%" />

              <div className="contente">
                <h3>
                  <NumberCounter end={following} start={0} delay="20s" />
                </h3>
                <p>{title}</p>
              </div>
            </div>
          );
        })}
      </section>

      <section className="wrapper-competance">
        <div className="container-competance">
          <img
            src="/assets/group.jpg"
            alt="equipe"
            width="60%"
            height="400px"
            data-aos="fade-right"
            data-aos-easing="ease-in-sine"
          />
          <div
            className="left-competance"
            data-aos="fade-left"
            data-aos-easing="ease-in-sine"
          >
            <h2>S??rieux, Comp??tence, Efficacit??</h2>
            <p>
              Nos ??quipes mettent tout en ??uvre afin de vous offrir une large
              gamme de bois, panneaux et mat??riaux de construction, et ce ?? des
              tarifs d??fiant toute concurrence. Chaque projet est unique et nous
              assurons ?? notre client??le un service professionnel et
              personnalis??.
            </p>

            <NavLink to="/services">
              <button className="button">Nos Services</button>
            </NavLink>
          </div>
        </div>
      </section>
         <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
      {/* <SliderCard />*/}
      {/* <ProdAcceuil /> */}
      <Gall />
      <Valorisant />
      <Forniseur />
      <Equipe />
      <Review />
      <div className="statis">
        <h1>Pourcentage des Produits %:</h1>
        <Pie
          data={gnrData}
          height={"30%"}
          options={{ maintainAspectRatio: false }}
        />
      </div>
     {/* <InterestProd /> */}
       <SwiperCards />
      <Footer />
    </div>
  );
};

export default Accueil;
