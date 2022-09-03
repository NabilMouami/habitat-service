import React from 'react'
import {  useNavigate } from "react-router-dom";
import Footer from '../../componenets/Footer';
import InterestProd from '../details/boisrouge/interst/InterestProd';
import Sidebar from '../details/sidebar/Sidebar';

const Monocolor = () => {
    const navigate = useNavigate();

    return (
      <div className="bande-ch">
        <img src="/assets/BandeCh/BchMonocolor.jpg" alt="" style={{ width: "100%" }} />
      <h3 className='t-bande'>Bande De Chand Uni</h3>

        <section class="portfolio-ex top-ex">
          <div class="container-ex flex-ex">
            <div class="left-ex">
              <div class="text-ex">
              <h2>Notre Gamme de produits</h2>
                <p>
                  Vous Veuillez Voir Toutes Les Produits.Les Produits POUR RÉUSSIR
                  VOTRE PROJET
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
                  <img src="/assets/BandeCh/monocoloruse1.jpg" class="image-ex" style={{width: "100%",height: "340px"}} />
                </div>
           
              </div>
              <div class="box-ex">
                <div class="img-ex">
                  <img src="/assets/BandeCh/monocoloruse2.jpg" class="image-ex" style={{width: "100%",height: "340px"}} />
                </div>
              </div>
              <div class="box-ex">
                <div class="img-ex">
                  <img src="/assets/BandeCh/monocoloruse3.jpg" class="image-ex" style={{width: "100%",height: "340px"}} />
                </div>
             
              </div>
              <div class="box-ex">
                <div class="img-ex">
                  <img src="/assets/BandeCh/monocoloruse4.jpg" class="image-ex" style={{width: "100%",height: "340px"}} />
                </div>
              
              </div>
            </div>
          </div>
        </section>
        <div className="dt-bandechand">
        <div className="bande-flex">
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
          
        </div>
        
        <h3 className="title-info-comp">Informations Complementaires :</h3>
  
        <div className="flex-desc">
            <div>
              <span className="span-descr">Longeur(m):</span>
              <p>100-150-230-300</p>
            </div>
            <div>
              <span className="span-descr">Largeur(mm):</span>
              <p>22</p>
            </div>
            <div>
              <span className="span-descr">Épaisseur(mm):</span>
              <p>4-8-10</p>
            </div>
            <div>
              <span className="span-descr">Matiere:</span>
              <p>PVC,ABS,Mélaminé.</p>
            </div>
            <div>
              <span className="span-descr">Utilisation:</span>
              <p>Recouvrir le chant d’un panneau ou le rebord d’un meuble pour un rendu plus esthétique.</p>
            </div>
  
  
        </div>
        <Footer />
      </div>
  
         
      </div>
    )}

export default Monocolor