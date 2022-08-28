import React from "react";
import "./style.css";
const Equipe = () => {
  return (
    <div className="equipes" data-aos="fade-up">
      <h1>La Direction Général</h1>
      <section className="con">
        <div className="con-card">
          <div className="bg-image">
            <img src="/assets/Pin.jpg" alt="" />
          </div>
          <div className="pic">
            <img src="/assets/woodp.jpg" alt="" />
          </div>
          <div className="pic">
            <h3>Jaouad Fatmi</h3>
            <p>
              Directeur de l'entreprise Habitat et Service.
            </p>
          </div>
        </div>
        <div className="con-card">
          <div className="bg-image">
            <img src="/assets/Pin.jpg" alt="" />
          </div>
          <div className="pic">
            <img src="/assets/woodp.jpg" alt="" />
          </div>
          <div className="pic">
            <h3>Mohamed Fatmi</h3>
            <p>
             Prisedent de l'entreprise Bois Select de Oujda,et co-fondateur D'Habitat et Service.
            </p>
          </div>
        </div>

        <div className="con-card">
          <div className="bg-image">
            <img src="/assets/Pin.jpg" alt="" />
          </div>
          <div className="pic">
            <img src="/assets/woodp.jpg" alt="" />
          </div>
          <div className="pic">
            <h3>Amine Fatmi</h3>
            <p>
             Directeur de l'entreprise Bois Select.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Equipe;
