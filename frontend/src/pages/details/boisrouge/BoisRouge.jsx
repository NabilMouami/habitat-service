import React,{useEffect} from "react";
import "../style.css";
import Sidebar from "../sidebar/Sidebar";
import HomeOver from "../../test/hoverslide/HomeOver";
import { useNavigate } from "react-router-dom";
import Footer from "../../../componenets/Footer";
const BoisRouge = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scroll(0,0)
 },[])
  return (
    <div className="">
      <div className="details">
        <div classNmae="datail-flex">
          <div className="det-flex">
            <img src="/assets/bois-rouge.jpg" alt="" />
            <div className="description">
              <h3>Description de nos produit : Bois Rouge</h3>
              <p>
                Bois Rouge au Maroc.Utilisation étendue en menuiseries
                intérieure et extérieure : portes, fenêtres, lambris assemblés,
                parquets, moulures, plinthes, bâtis et huisseries. C’est sa
                facilité et sa rapidité d’usinage qui permet la réalisation
                d’ouvrages les plus variés. Très durable en raison de sa teneur
                en résine ; accroissement annuels très serrés ce qui lui donne
                une très bonne résistance mécanique. Le Sapin est recommandé
                pour tous les travaux de charpente
              </p>
            </div>
          </div>
          <h3 className="information-comp">Informations Complementaires:</h3>

          <div className="flex-desc">
            <div>
              <span className="span-descr">Essences des bois:</span>
              <p>Pin Sylvestre</p>
            </div>
            <div>
              <span className="span-descr">utilisations:</span>
              <p>
                Menuiserie intérieure & extérieure, charpente, coffrage,
                ébénisterie
              </p>
            </div>
            <div>
              <span className="span-descr">DENSITÉ:</span>
              <p>0,50 à 0,60 – tendre</p>
            </div>
            <div>
              <span className="span-descr">Livraison:</span>
              <p>Oui</p>
            </div>
            <div>
              <span className="span-descr">PROVENANCES:</span>
              <p>Stenvalls,Camab,Gosta,Ersa,Polkky</p>
            </div>
            <div>
              <span className="span-descr">RÉSISTANCE:</span>
              <p>Flexion : 90 Mpa Traction : 104 Mpa Compression : 46 Mpa</p>
            </div>
            <div>
              <span className="span-descr">Classifications:</span>
              <p>classes:I,II,III,Shall,VI</p>
            </div>
            <div>
              <span className="span-descr">longueurs(m):</span>
              <p>de 2.40 Jusqu'a 5.40</p>
            </div>
            <div>
              <span className="span-descr">epaisseur(cm):</span>
              <p>de 1.6cm Jusqu'a 7.5cm</p>
            </div>
            <div>
              <span className="span-descr">largeurs(mm):</span>
              <p>de 75 Jusqu'a 225</p>
            </div>
          </div>
          <HomeOver />
          <section className="portfolio-ex top-ex">
            <div className="container-ex flex-ex">
              <div className="left-ex">
                <div className="text-ex">
                  <h2>Notre Gamme de produits</h2>
                  <p>
                    Vous Veuillez Voir Toutes Les Produits.Les Produits POUR
                    RÉUSSIR VOTRE PROJET
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

              <div class="right-ex grid-ex">
                <div class="box-ex">
                  <div class="img-ex">
                    <img
                      src="/assets/BrCharpente.jpg"
                      class="image-ex"
                      style={{ width: "100%", height: "340px" }}
                    />
                  </div>
                
                </div>
                <div class="box-ex">
                  <div class="img-ex">
                    <img
                      src="/assets/BrCofrage.jpg"
                      class="image-ex"
                      style={{ width: "100%", height: "340px" }}
                    />
                  </div>
                </div>
                <div class="box-ex">
                  <div class="img-ex">
                    <img
                      src="/assets/BrEbenis.jpg"
                      class="image-ex"
                      style={{ width: "100%", height: "340px" }}
                    />
                  </div>
               
                </div>
                <div class="box-ex">
                  <div class="img-ex">
                    <img
                      src="/assets/BrMenuiserie.jpg"
                      class="image-ex"
                      style={{ width: "100%", height: "340px" }}
                    />
                  </div>
               
                </div>
              </div>
            </div>
          </section>
        </div>
        <Sidebar />
        
      </div>
      {/* <div className="interes">
        <p className="interes-para">Produits pouvant vous intéresser:</p>
        <section className="breweries">
          {data.map((item) => {
            return (
              <ul key={item.id}>
                <li>
                  <figure>
                    <img src={item.data.image} alt="" />
                    <figcaption>
                      <h3>{item.title}</h3>
                    </figcaption>
                  </figure>
                  <p>{item.data.desc}</p>
                  <a href={item.path}>Visit Website</a>
                </li>
              </ul>
            );
          })}
        </section>
        <Footer />
      </div>*/}

      <Footer />
    </div>
  );
};

export default BoisRouge;
