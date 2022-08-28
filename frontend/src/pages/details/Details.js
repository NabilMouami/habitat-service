import React,{useEffect} from "react";
import { useSelector } from "react-redux";
import Sidebar from "./sidebar/Sidebar";
import Footer from "../../componenets/Footer";
import { useNavigate } from "react-router-dom";
import "./style.css";
const Details = () => {
  useEffect(() => {
    window.scroll(0,0)
 },[])
  const navigate = useNavigate();

  const BoisInfo = useSelector((state) => state.Bois);
  const { Bois } = BoisInfo;

  return (
    <div className="">
      <div className="details">
        <div classNmae="detail-flex">
          <div className="det-flex">
            <img src={Bois.data.image} alt="" />
            <div className="description">
              <h3>Description de nos produit : {Bois.title}</h3>
              <p>{Bois.data.desc}</p>
            </div>
          </div>
          <h3 className="information-comp">Informations Complementaires:</h3>

          <div className="flex-desc">
            <div>
              <span className="span-descr">Essences des bois:</span>
              <p>{Bois.data.essences}</p>
            </div>
            <div>
              <span className="span-descr">utilisations:</span>
              <p>{Bois.data.utilisations}</p>
            </div>
            <div>
              <span className="span-descr">DENSITÉ:</span>
              <p>{Bois.data.DENSITÉ}</p>
            </div>
            <div>
              <span className="span-descr">Livraison:</span>
              <p>{Bois.data.livraison}</p>
            </div>
            <div>
              <span className="span-descr">PROVENANCES:</span>
              <p>{Bois.data.PROVENANCES}</p>
            </div>
            <div>
              <span className="span-descr">RÉSISTANCE:</span>
              <p>{Bois.data.RÉSISTANCE}</p>
            </div>
            <div>
              <span className="span-descr">Classifications:</span>
              <p>{Bois.data.classes}</p>
            </div>
            <div>
              <span className="span-descr">longueurs(m):</span>
              <p>{Bois.data.long}</p>
            </div>
            <div>
              <span className="span-descr">epaisseur(mm):</span>
              <p>{Bois.data.epaisseur}</p>
            </div>
            <div>
              <span className="span-descr">largeurs(mm):</span>
              <p>{Bois.data.larg}</p>
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
                      src={Bois.data.images[0].img1}
                      className="image-ex"
                      style={{ width: "100%", height: "360px" }}
                    />
                  </div>
                </div>
                <div className="box-ex">
                  <div className="img-ex">
                    <img
                      src={Bois.data.images[0].img2}
                      className="image-ex"
                      style={{ width: "100%", height: "360px" }}
                    />
                  </div>
                </div>
                <div className="box-ex">
                  <div className="img-ex">
                    <img
                      src={Bois.data.images[0].img3}
                      className="image-ex"
                      style={{ width: "100%", height: "360px" }}
                    />
                  </div>
                 
                </div>
                <div className="box-ex">
                  <div className="img-ex">
                    <img
                      src={Bois.data.images[0].img4}
                      className="image-ex"
                      style={{ width: "100%", height: "360px" }}
                    />
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

export default Details;
