import React,{useEffect} from "react";
import "./style.css";
import data from "./data";
import Footer from "../../componenets/Footer";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Link } from "react-router-dom";
const Actualites = () => {
  useEffect(() => {
    window.scroll(0,0)
 },[])

  return (
    <div className="actualite">
      <div className="ph">
        <h2>Les nouveaux Produits</h2>
      </div>
      <section className="breweries">
        {data.map((item) => {
          return (
            <ul key={item.id}>
              <li>
                <figure>
                  <img src={item.image} alt="" />
                  <figcaption>
                    <h3>{item.title}</h3>
                  </figcaption>
                </figure>
                <p>{item.desc}</p>
                <span><CalendarMonthIcon />:{item.date}</span>
                <Link to="/caison-de-cuisine">Lire Plus</Link>
              </li>
            </ul>
          );
        })}
      </section>
      <h3 className="t-event">Les Evenements Actuelle</h3>

      <section className="wrapper-act wrapper2-act top-act">
        <div className="container-act">
          <div className="text-act" data-aos="fade-right">
            <div className="heading-act">
              <h5>
                Etablissement de siege(WestWood)
                <span className="active">pour la fabarication</span> a Salouan,
                au Nouveau Quartier Industrial
              </h5>
              <h2>2021/06/20</h2>
            </div>

            <div className="para-act">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>

              <div className="box-act flex-act">
                <div className="img-act">
                  <img src="/assets/bandechant.jpg" alt="" />
                </div>
                <div className="name-act">
                  <h5>Jaouad Fatmi</h5>
                  <h5>Directeur</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="wrapper-act top-act">
        <div className="container-act" data-aos="fade-right">
          <div className="text-act">
            <h2>Visite en France</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Actualites;
