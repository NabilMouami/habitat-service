import React,{useEffect} from "react";
import Footer from "../../../componenets/Footer";
import "./style.css";
const Prisentation = () => {
  useEffect(() => {
    window.scroll(0,0)
 },[])
  return (
    <>
      <div className="prisentation">
        <div className="container-valo">
          <img src="/assets/habitatservice.jpg" className="circle-valo" data-aos="fade-up-right"/>
          <h1 data-aos="fade-up-left">Notre but est de vous aider à prospérer dans vos projets</h1>

          <p data-aos="fade-up-left">
            La société Habitat et Service est une société à responsabilité
            limitée, créée en 2008. Son objet principal est la commercialisation
            , l’import , l’export, et la vente en gros et en détail de Bois et
            ses dérivés. Elle opère au niveau du marché national, se démarque de
            la concurrence par sa qualité de service et place le client au
            centre de ses préoccupations stratégiques.
          </p>
        </div>
        <div className="container-valo" >
          <img src="/assets/habitatservice.jpg" className="circle-valo" data-aos="fade-up-right"/>
          <h1 data-aos="fade-up-left">Délais de livraison</h1>

          <p data-aos="fade-up-left">
            Pour toute commande (de produit en stock) passée avant 15h : vous
            êtes livrés le lendemain.*selon planning de tournées de livraison et
            conditions agences.
          </p>
        </div>
        <div className="contain-pres">
          <div className="right-preso">
            <h1>Délais de livraison</h1>
            <p>
              Pour toute commande (de produit en stock) passée avant 15h : vous
              êtes livrés le lendemain.*selon planning de tournées de livraison
              et conditions agences.
            </p>
          </div>
          <div className="left-preso">
            <img src="/assets/habitatservice.jpg" className="img-right-1" alt="" />
          </div>
        </div>
        <div className="contain-pres" data-aos="fade-right">
          <div className="left-preso">
            <img src="/assets/habitatservice.jpg" alt="" />
          </div>
          <div className="right-preso">
            <h1>Habitat et Service, EXPERT DU BOIS</h1>
            <p>
              Au sein de notre équipe, nous nous sommes entourés des
              collaborateurs en bois ayant une parfaite connaissance de ce
              matériau naturel. Connaître ses propriétés, ses forces, ainsi que
              les conditions optimales pour le conserver, nous permet de
              proposer à notre clientèle un produit sûr. Habitat & Service
              bénéficie d’une expertise précise des bois reçus, et nous
              accordons une grande importance aux divers contrôles qualités que
              nous imposons pour chaque nouvelle importation.
            </p>
          </div>
        </div>
        <div className="contain-pres" data-aos="fade-right">
          <div className="right-preso">
            <h1>Provenances</h1>
            <p>
              Ses principaux fournisseurs au niveau national : Still bois; CEMA
              ; Tol Bois ; Robel Bois , COMAR BOIS, SOCOREG Au niveau
              international, il s’agit notamment de: *CAMAB ; Gosta jacobson ;
              Stenvalls: Suéde *Polky, Stora Enso : Finlande ; Finsa : Espagne
              *Arkopa : Turkie ; Export Drvo: Croitie ; Najua : Romanie *Abalon
              : Allemagne
            </p>
          </div>
          <div className="left-preso">
            <img src="/assets/provenances.jpg" alt="" className="img-right-1" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Prisentation;
