import React,{useEffect} from "react";
import Footer from "../../../componenets/Footer";
import Gallery from "../../test/Gallery/Gallery";
import HomeOver from "../../test/hoverslide/HomeOver";
import "./style.css";

function Caisson() {
  useEffect(() => {
    window.scroll(0,0)
 },[])

  return (
    <div className="">
      <div className="details">
        <div classNmae="datail-flex">
          <div className="det-flex">
            <img src="/assets/caisseur.jpg" alt="caison" />
            <div className="description">
              <h3>Description de nos produit : Caisson</h3>
              <p>
                Un caisson de cuisine est souvent composé de 2 côtés, 1 dessus,
                1 dessous et souvent d’un fond arrière. Il peut être habillé de
                portes ou être muni d’un tiroir. Lorsqu’on achète un caisson
                pour cuisine en kit il est généralement de taille standard. Mais
                lorsqu’on ne dispose que d’un petit espace-cuisine cela peut
                s’avérer problématique. Acquérir alors un caisson de cuisine sur
                mesure peut être la solution idéale. De même, il est difficile
                de trouver des caissons d’angle en kit qui correspondent aux
                exactes mesures de l’angle que l’on souhaite optimiser. Le
                sur-mesure devient alors le recours le plus judicieux.
              </p>
            </div>
          </div>
          <h3 className="information-comp">Informations Complementaires:</h3>

          <div className="flex-desc">
            <div>
              <span className="span-descr">PROVENANCES:</span>
              <p>Espagne, Turquie, Maroc</p>
            </div>
            <div>
              <span className="span-descr">Hauteur(mm):</span>
              <p>700-900</p>
            </div>
            <div>
              <span className="span-descr">Profondeur(mm):</span>
              <p>330-560</p>
            </div>
            <div>
              <span className="span-descr">largeurs(mm):</span>
              <p>350-400-450-600-700-900-1000</p>
            </div>
            <div>
              <span className="span-descr">COULEURS & DESIGNS:</span>
              <p>
                Classique: Disponible en blanc et gris.
              </p>
            </div>
            <div>
              <span className="span-descr">CARACTÉRISTIQUES:</span>
              <p>
                Ergonomie Esthétique Capacité d’entreposage Fonctionnalité
                Multi-usages Antibactérien
              </p>
            </div>
         
          </div>
          <HomeOver />

        </div>

      </div>

      <Footer />
    </div>
  );
}

export default Caisson;
