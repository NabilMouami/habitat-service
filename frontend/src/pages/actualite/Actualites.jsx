import React, { useEffect } from "react";
import "./style.css";
import data from "./data";
import Footer from "../../componenets/Footer";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Link } from "react-router-dom";
const Actualites = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

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
                <span>
                  <CalendarMonthIcon />:{item.date}
                </span>
                <Link to={item.path}>Lire Plus</Link>
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
                Etablissement de siege(Nador West Wood) au Zone industrielle
                Selouane Nador.
              </h5>
              <h2>2021/06/20</h2>
            </div>

            <div className="para-act">
              <p>
                est situé dans le parc idustrial Selouane.Province de Nador, qui
                est la base de production de l’industrie marocaine des panneaux.
                il s’agit d’une entreprise complète intégrant le développement
                de produits, la conception, la production, la vente et
                l’après-vente service.it possède une riche expérience dans la
                production de produits en bois et un marché de vente étendu.ses
                principaux produits sont le coffrage de construction, le
                contreplaqué, le placage, la peau de bois, etc. Les produits
                sont exportés vers toutes les régions marocaines Tous les
                employés de l’entreprise ont adhéré à la philosophie
                d’entreprise de « survie par la qualité, développement par la
                réputation », toujours adhérer aux besoins et à la satisfaction
                du client comme noyau, avec « intégrité » comme objectif, avec
                une qualité de première classe et un service de qualité.
              </p>
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
