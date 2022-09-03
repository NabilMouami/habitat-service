import React from "react";
import "./style.css";
import { useSelector } from "react-redux";
import Sidebar from "../details/sidebar/Sidebar";
import InterestProd from "../details/boisrouge/interst/InterestProd";

const DetailBchande = () => {
  const ChandInfo = useSelector((state) => state.Chand);
  const { CHAND } = ChandInfo;

  return (
    <div className="dt-bandechand">
      <div className="bande-flex">
        <img src={CHAND.image} style={{ width: "100%" }} />
        <div className="avantages">
          <h2>Avantages:</h2>
            <li>1- Aspect visuel homogène</li>
            <li>2- Large palette de coloris</li>
            <li>3- Pas d'éclats</li>
            <li>4- Résistance aux chocs</li>
            <li>5- Excellent recouvrement des panneaux</li>
            <li>6- Pas d'encrassement des chants fraisés</li>
            <li>7- Pas de décollement du chant en cas d'humidité</li>
        </div>
        <Sidebar />
      </div>
      
      <h3>Informations Complementaires sur {CHAND.name}:</h3>

      <div className="flex-desc">
          <div>
            <span className="span-descr">Longeur(m):</span>
            <p>{CHAND.long}</p>
          </div>
          <div>
            <span className="span-descr">Largeur(mm):</span>
            <p>{CHAND.larg}</p>
          </div>
          <div>
            <span className="span-descr">Épaisseur(mm):</span>
            <p>{CHAND.epaisseur}</p>
          </div>
          <div>
            <span className="span-descr">Matiere:</span>
            <p>{CHAND.matiere}</p>
          </div>


      </div>
      <InterestProd />
    </div>
  
  );
};

export default DetailBchande;
