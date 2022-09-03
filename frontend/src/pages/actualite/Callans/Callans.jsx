import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Footer from "../../../componenets/Footer";
import Sidebar from "../../details/sidebar/Sidebar";
const Callans = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  const navigate = useNavigate();

  return (
    <div>
      <div className="details">
        <div classNmae="detail-flex">
          <div className="det-flex">
            <img src="/assets/Cal.jpg" alt="" />
            <div className="description">
              <h3>Description de nos produit : Cal</h3>
              <p>
                Habitat dispose d’un stock important de bois rouge(Cal), importé
                de Suède.C’est sa facilité et sa rapidité d’usinage qui permet
                la réalisation d’ouvrages les plus variés.Très durable en raison
                de sa teneur en résine ; accroissement annuels très serrés ce
                qui lui donne une très bonne résistance mécanique.
              </p>
            </div>
          </div>
          <h3 className="information-comp">Informations Complementaires:</h3>

          <div className="flex-desc">
            <div>
              <span className="span-descr">Essences des bois:</span>
              <p className="flex-desc-p">Pin Sylvestre</p>
            </div>
            <div>
              <span className="span-descr">utilisations:</span>
              <p className="flex-desc-p">
                portes, fenêtres, lambris assemblés, parquets, moulures,
                plinthes, bâtis et huisseries.
              </p>
            </div>
            <div>
              <span className="span-descr">Qualité:</span>
              <p className="flex-desc-p">Royal,Plus</p>
            </div>
            <div>
              <span className="span-descr">PROVENANCES:</span>
              <p className="flex-desc-p">Stenvalls</p>
            </div>
            <div>
              <span className="span-descr">RÉSISTANCE:</span>
              <p className="flex-desc-p">
                Flexion : 75 Mpa Traction : 90 Mpa Compression : 40 Mpa
              </p>
            </div>
            <div>
              <span className="span-descr">Classifications:</span>
              <p className="flex-desc-p">I-III,O/S,S/F,STAR,PLUS,6 ½ </p>
            </div>
            <div>
              <span className="span-descr">longueurs(mm):</span>
              <p className="flex-desc-p">5,100-4,800-3,000</p>
            </div>
            <div>
              <span className="span-descr">epaisseur(mm):</span>
              <p className="flex-desc-p">75-19</p>
            </div>
            <div>
              <span className="span-descr">largeurs(mm):</span>
              <p className="flex-desc-p">225-200-100</p>
            </div>
          </div>
          <section className="portfolio-ex top-ex">
            <div className="container-ex flex-ex">
              <div className="left-ex">
                <div className="text-ex">
                  <h2>Notre Gamme de produits</h2>
                  <p>
                    Vous Veuillez Voir Toutes Les Produits.Les Produits Pour
                    Réaliser Votre Projet.
                  </p>
                  <button
                    onClick={() => {
                      navigate("/produits");
                    }}
                  >
                    Vois Toutes
                  </button>
                </div>
              </div>
              <div className="right-ex grid-ex">
                <div className="box-ex">
                  <div className="img-ex">
                    <img
                      src="/assets/Cal1.jpg"
                      className="image-ex"
                      style={{ width: "100%", height: "360px" }}
                    />
                  </div>
                  <div className="middle-ex">
                    <div className="text-ex">
                      <h4>I-III</h4>
                    </div>
                  </div>
                </div>
                <div className="box-ex">
                  <div className="img-ex">
                    <img
                      src="/assets/Cal2.jpg"
                      className="image-ex"
                      style={{ width: "100%", height: "360px" }}
                    />
                  </div>
                  <div className="middle-ex">
                    <div className="text-ex">
                      <h4>O/S</h4>
                    </div>
                  </div>
                 
                </div>
                <div className="box-ex">
                  <div className="img-ex">
                    <img
                      src="/assets/Cal3.jpg"
                      className="image-ex"
                      style={{ width: "100%", height: "360px" }}
                    />
                  </div>
                  <div className="middle-ex">
                    <div className="text-ex">
                      <h4>S/F</h4>
                    </div>
                  </div>
                </div>
                <div className="box-ex">
                  <div className="img-ex">
                    <img
                      src="/assets/Cal4.jpg"
                      className="image-ex"
                      style={{ width: "100%", height: "360px" }}
                    />
                  </div>
                  <div className="middle-ex">
                    <div className="text-ex">
                      <h4>Star</h4>
                    </div>
                  </div>
                </div>
                <div className="box-ex">
                  <div className="img-ex">
                    <img
                      src="/assets/Cal5.jpg"
                      className="image-ex"
                      style={{ width: "100%", height: "360px" }}
                    />
                  </div>
                  <div className="middle-ex">
                    <div className="text-ex">
                      <h4>Plus</h4>
                    </div>
                  </div>
                </div>
                <div className="box-ex">
                  <div className="img-ex">
                    <img
                      src="/assets/Cal6.jpg"
                      className="image-ex"
                      style={{ width: "100%", height: "360px" }}
                    />
                  </div>
                  <div className="middle-ex">
                    <div className="text-ex">
                      <h4>6 ½</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
};

export default Callans;
