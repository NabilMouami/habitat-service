import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const BandeChant = () => {


  return (
    <div className="bande-ch">
      <img src="/assets/bandechant.jpg" alt="" style={{ width: "100%" }} />
      <section className="breweries">
        <ul>
          <li>
            <figure>
              <img src="/assets/BandeCh/BchBicolori.jpg" alt="" />
              <figcaption>
                <h3>Bande De Chand Bicolor 3D</h3>
              </figcaption>
            </figure>
            <p>
              Les chants constituent la finition parfaite d'un panneau
              décoratif. Disponibles dans le même décor ou dépareillés pour
              créer du contraste, ils apportent le détail qui peut faire toute
              la différence.
            </p>
            <Link to="/bandechand/bicolor">Lire La Suite</Link>
          </li>
        </ul>
        <ul>
          <li>
            <figure>
              <img src="/assets/BandeCh/BchMonocolor.jpg" alt="" />
              <figcaption>
                <h3>Bande De Chand Uni</h3>
              </figcaption>
            </figure>
            <p>
              Les chants constituent la finition parfaite d'un panneau
              décoratif. Disponibles dans le même décor ou dépareillés pour
              créer du contraste, ils apportent le détail qui peut faire toute
              la différence.
            </p>
            <Link to="/bandechand/monocolor">Lire La Suite</Link>
          </li>
        </ul>

      </section>
    </div>
  );
};

export default BandeChant;
