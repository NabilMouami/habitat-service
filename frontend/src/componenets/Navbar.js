import React, { useState,useEffect } from "react";
import "./Navbar.css";
import { FaPhoneAlt } from "react-icons/fa";
import { Link} from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import { AiTwotoneMail } from "react-icons/ai";
import ArrowDropDownSharpIcon from "@mui/icons-material/ArrowDropDownSharp";
import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";
import {  useNavigate } from "react-router-dom";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
const Navbar = () => {
  const navigate = useNavigate();
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
   
  return (
  
    <>
      <nav className="h-one">
        <div className="email-phone">
          <label className="h-email">
            <AiTwotoneMail style={{ color: "#161616", marginRight: "7px" }} />
            Info@Hservice.com
            <br /> Importation Et Distribution De Bois.
          </label>
          <span style={{ display: "grid" }}>
            <span>
              <FaPhoneAlt style={{ color: "#161616" }} />
              +212661440013
            </span>
            <span>
              <FaPhoneAlt style={{ color: "#161616" }} />
              +212666200104
            </span>
          </span>
          <span style={{ display: "grid" }}>
            <span>
              <AccessTimeIcon style={{ marginRight: "8px", color: "161616" }} />
              Lundi-Vendredi 08H30-18H30
            </span>
            <span>Samedi 08H30-12H30</span>
          </span>
        </div>
        <div className="h-one-icons">
          <a>
            <FacebookSharpIcon />
          </a>
          <a>
            <InstagramIcon />
          </a>
          <a>
            <LinkedInIcon />
          </a>
        </div>
      </nav>
      <nav className="header">
        <div className="nav-iconis">
          <Link to="/" className="logo">
            <img
              src="/assets/habitatservice.png"
              alt=""
              width="180px"
              height="55px"
            />
          </Link>
          <li>
            <div className="nav-icon" onClick={handleClick}>
              {click ? <ClearIcon /> : <MenuIcon />}
            </div>
          </li>

        </div>

        <ul>
          {(!click && window.innerWidth < 500) ?
            <>
            </> 
          
            :
            (
            <>
              <li>
                <Link to="/" className="lien">
                  <span className="active" style={{ marginLeft: "-10px" }}>
                    Accueil
                  </span>
                </Link>
              </li>

              <li>
                <Link to="/" className="lien">
                  H&S
                 {window.innerWidth < 500 ? <ArrowRightIcon /> : <ArrowDropDownSharpIcon />}
                </Link>
                <ul>
                  <li>
                    <Link to="/mot-de-president">Mot Du President</Link>
                  </li>
                  <li>
                    <Link to="/mot-de-president">Mot Du Directeur</Link>
                  </li>
                  <li>
                    <Link to="/historique">Historique de l'entreprise</Link>
                  </li>
                  <li>
                    <Link to="/prisentation">Presentation</Link>
                  </li>
                  <li>
                    <Link to="/equipes">Notre Equipe</Link>
                  </li>

                  <li>
                    <Link to="/services">Services</Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link to="/" className="lien">
                  Nos Produits
                  {window.innerWidth < 500 ? <ArrowRightIcon /> : <ArrowDropDownSharpIcon />}
                </Link>
                <ul>
                  <li>
                    <Link to="/produits">
                      Bois
                      <ArrowRightIcon />
                    </Link>
                    <ul>
                      <li>
                        <span
                          onClick={() => {
                            navigate("/produit", {
                              state: {
                                data: "bois-rouge",
                              },
                            });
                          }}
                        >
                          Bois-Rouge
                        </span>
                      </li>
                      <li>
                        <span
                          onClick={() => {
                            navigate("/produit", {
                              state: {
                                data: "bois-blanc",
                              },
                            });
                          }}
                        >
                          Bois-Blanc
                        </span>
                      </li>
                      <li>
                        <span
                          onClick={() => {
                            navigate("/produit", {
                              state: {
                                data: "bois-dur",
                              },
                            });
                          }}
                        >
                          Bois-Dur
                        </span>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span
                      onClick={() => {
                        navigate("/produit", {
                          state: {
                            data: "panneaux",
                          },
                        });
                      }}
                    >
                      Panneaux
                    </span>
                  </li>
                  <li>
                    <span
                      onClick={() => {
                        navigate("/produit", {
                          state: {
                            data: "contre-plaques",
                          },
                        });
                      }}
                    >
                      Contre-Plaque
                    </span>
                  </li>
                  <li>
                    <Link to="/bandechand">Bande de Chant</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/actualites" className="lien">Actualites</Link>
              </li>
              <li>
                <Link to="/contact" className="lien">Contact</Link>
              </li>
            </>
            
          )}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
