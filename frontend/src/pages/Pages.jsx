import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../componenets/Navbar";
import Accueil from "./Accueil/Accueil";
import Prod from "./Accueil/produit/Prod";
import Actualites from "./actualite/Actualites";
import Caisson from "./actualite/Caisson/Caisson";
import Callans from "./actualite/Callans/Callans";
import FilterBois from "./Bois/FilterBois";
import Contact from "./contact/Contact";
import BandeChant from "./contreplaque/BandeChant";
import Bicolor from "./contreplaque/Bicolor";
import Monocolor from "./contreplaque/Monocolor";
import BoisRouge from "./details/boisrouge/BoisRouge";
import Details from "./details/Details";
import Equipes from "./Habitat/equipes/Equipes";
import Prisentation from "./Habitat/Presentation/Prisentation";
import Resume from "./Habitat/Resume/Resume";
import Prisident from "./mot/Prisident";
import Produit from "./produit/Produit";
import Propos from "./propos/Propos";
import { Reclamation } from "./reclamation/Reclamation";
import Services from "./services/Services";
import Gallery from "./test/Gallery/Gallery";
import HomeOver from "./test/hoverslide/HomeOver";
import Slide from "./test/Slide";

const Pages = () => {
  return (
    
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/produits" element={<Produit />} />
          <Route path="bois-filter" element={<FilterBois />} />
          <Route path="bois-rouge" element={<BoisRouge />} />
          <Route path="/produits/:produit/:id" element={<Details />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/produit"  element={<Prod />} />
          <Route path="/produit/bois-rouge" element={<BoisRouge />} />
          <Route path="/produit/:name/:id" element={<Details />} />
        <Route path="/reclamation" element={<Reclamation />} />
        <Route path="/propos" element={<Propos />} />
        <Route path="/equipes" element={<Equipes />} />
        <Route path="/services" element={<Services />} />
        <Route path="/mot-de-president" element={<Prisident />} />
        <Route path="/historique" element={<Resume />} />
        <Route path="/prisentation" element={<Prisentation />} />
        <Route path="/actualites" element={<Actualites />} />
        <Route path="/test" element={<Slide />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/over" element={<HomeOver />} />
        <Route path="/caison-de-cuisine" element={<Caisson/>} />
        <Route path="/callans" element={<Callans/>} />

        <Route path="/bandechand">
          <Route index element={<BandeChant />} />
          <Route path="bicolor" element={<Bicolor />} />
          <Route path="monocolor" element={<Monocolor />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Pages;
