import React from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";

import "./style.css";
const Gall = () => {
  const navigate = useNavigate();

  return (
    <div className="gal">
       <h2 className="title-rev">Un choix varié de bois et produits dérivés de qualité</h2>
      <div className="wrapper">
        <div className="gallery">
        <div className="gallery__item gallery__item--1">
            <span
              onClick={() => {
                navigate("/produit", {
                  state: {
                    data: "bois-rouge",
                  },
                });
              }}
              className="gallery__link"
            >
              <img src="/assets/bois-rouge.jpg" className="gallery__image" />
              <div className="gallery__overlay">
                <span>Bois Rouge</span>
              </div>
            </span>
          </div>
          <div className="gallery__item gallery__item--2">
            <span
              onClick={() => {
                navigate("/produit", {
                  state: {
                    data: "bois-blanc",
                  },
                });
              }}
              className="gallery__link"
            >
              <img src="/assets/Pin.jpg" className="gallery__image" />
              <div className="gallery__overlay">
                <span>Bois Blanc</span>
              </div>
            </span>
          </div>
          <div className="gallery__item gallery__item--3">
            <span
              onClick={() => {
                navigate("/produit", {
                  state: {
                    data: "bois-dur",
                  },
                });
              }}
              className="gallery__link"
            >
              <img src="/assets/BdCedre.jpg" className="gallery__image" />
              <div className="gallery__overlay">
                <span>Bois Dur</span>
              </div>
            </span>
          </div>
          <div className="gallery__item gallery__item--4">
            <span
              onClick={() => {
                navigate("/produit", {
                  state: {
                    data: "panneaux",
                  },
                });
              }}
              className="gallery__link"
            >
              <img src="/assets/panneau.jpeg" className="gallery__image" />
              <div className="gallery__overlay">
                <span>Panneaux</span>
              </div>
            </span>
          </div>
          <div className="gallery__item gallery__item--5">
            <span
              onClick={() => {
                navigate("/produit", {
                  state: {
                    data: "contre-plaques",
                  },
                });
              }}
              className="gallery__link"
            >
              <img src="/assets/CpAcajo.jpg" className="gallery__image" />
              <div className="gallery__overlay">
                <span>Contre Plaque</span>
              </div>
            </span>
          </div>
          <div className="gallery__item gallery__item--6">
            <NavLink to="/bandechand" className="gallery__link">
              <img src="/assets/bandechant.jpg" className="gallery__image" />
              <div className="gallery__overlay">
                <span>Bande de Chande</span>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gall;
