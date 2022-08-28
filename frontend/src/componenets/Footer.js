import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";
import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";
import {  NavLink } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PlaceIcon from "@mui/icons-material/Place";
import FaxIcon from '@mui/icons-material/Fax';
function Footer() {
  return (
    <div>
      <section className="footer">
        <div className="box-container">
          <div className="box">
            <h3>Heures de travail</h3>

            <p>Lundi-Vendredi………………………….8h30-18h30</p>
            <p>Samedi…………………………………………..8h30-13h</p>
            <p>Dimanche…………………………………….Fermé</p>
            <div>
              <h3>Social Medias</h3>
              <a>
                <FacebookSharpIcon style={{ color: "#161616" }} />
                facebook
              </a>
              <a>
                <InstagramIcon style={{ color: "#161616" }} />
                instagram
              </a>
              <a>
                <LinkedInIcon style={{ color: "#161616" }} />
                linkedin
              </a>
            </div>
          </div>
          <div className="box">
            <h3>quick links</h3>
            <NavLink to="/">
              <ArrowForwardSharpIcon style={{ color: "#161616" }} />
              Accueil
            </NavLink>
            <NavLink to="/produits">
              <ArrowForwardSharpIcon style={{ color: "#161616" }} />
              Nos Produits
            </NavLink>
            <NavLink to="/actualites">
              <ArrowForwardSharpIcon style={{ color: "#161616" }} />
              Actualites
            </NavLink>
            <NavLink to="/reclamation">
              <ArrowForwardSharpIcon style={{ color: "#161616" }} />
              Reclamation
            </NavLink>
            <NavLink to="/contact">
              <ArrowForwardSharpIcon style={{ color: "#161616" }} />
              Contact-Nous
            </NavLink>
          </div>
          <div className="box">
            <h3>contact</h3>
            <a>
              <FaPhoneAlt style={{ color: "#161616" }} />
              +212661440013
            </a>
            <a>
              <FaPhoneAlt style={{ color: "#161616" }} />
              +212666200104
            </a>
            <a>
              <AiTwotoneMail style={{ color: "#161616" }} />
              Habitat.Service@gmail.com
            </a>
            
          </div>
          <div className="box">
            <h3>Nos agences</h3>
            <h5 style={{color: "#222",textDecoration: "underline"}}>Oujda</h5>
            <p> <PlaceIcon style={{ color: "#161616" }} />N 17 Bis Rue B 60 Hay si Lakhdar - Oujda</p>
            <p><FaxIcon />Fax:0536687712/0536358535</p>
            <p><FaxIcon />Fax:0536687712/0536358535</p>
            <h5 style={{color: "#222",textDecoration: "underline"}}>Nador</h5>
             <p> <PlaceIcon style={{ color: "#161616" }} />Propriété El Mostaqbal Zone Industrielle Selouane-Nador</p>            
            <p> <FaPhoneAlt style={{ color: "#161616" }} />Tel:0661440013/0666200104</p>
          </div>
        </div>
        <div className="credit">
          Copyright©2022 Habitat et Service All Rights Reserved. Sagittarius
          Creative
        </div>
      </section>
    </div>
  );
}

export default Footer;
