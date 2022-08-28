import React, { useEffect } from "react";
import "./style.css";
const Equipes = () => {
  let data = [
    {
      id: "1",
      name: "Jaouad Fatmi",
      job: "Directeur",
      img: "/assets/User.png",
    },
    {
      id: "2",
      name: "Mohamed Yaagoubi",
      job: "Ingenieur Robotiques",
      img: "/assets/User.png",
    },
    {
      id: "3",
      name: "Soufiane BBBBB",
      job: "Commerciel",
      img: "/assets/User.png",
    },
    {
      id: "4",
      name: "Mohamed El Tazi",
      job: "Commerciel",
      img: "/assets/User.png",
    },
    {
      id: "5",
      name: "Nabil Mouami",
      job: "Devleppeur Informatique",
      img: "/assets/User.png",
    },
  ];
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div class="wrapper-equi">
      <h1>Nos Equipe</h1>
      <div class="team-equi">
        <div class="team_member">
          <div class="team_img">
            <img src="/assets/User.png" alt="Team_image" />
          </div>
          <h3>Jaouad Fatmi</h3>
          <p class="role">Directeur</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quaerat
            tempora, voluptatum quas facere dolorum aut cumque nihil nulla harum
            nemo distinctio quam blanditiis dignissimos.
          </p>
        </div>
        <div class="team_member">
          <div class="team_img">
            <img src="/assets/User.png" alt="Team_image" />
          </div>
          <h3>Mohamed El Tazi</h3>
          <p class="role">Commerciel</p>
          <p>
            Le Commerce du Bois met à votre disposition une charte
            environnementale de l'achat et de la vente de bois certifié.pour
            plus des informations sur les produits Appele-moi sur:+212661440013
          </p>
        </div>
        <div class="team_member">
          <div class="team_img">
            <img src="/assets/User.png" alt="Team_image" />
          </div>
          <h3>Soufiane Bidaoui</h3>
          <p class="role">Commerciel</p>
          <p>
            Le Commerce du Bois met à votre disposition une charte
            environnementale de l'achat et de la vente de bois certifié.pour
            plus des informations sur les produits Appele-moi sur:+212666200104
          </p>
        </div>
        <div class="team_member">
          <div class="team_img">
            <img src="/assets/User.png" alt="Team_image" />
          </div>
          <h3>Mohamed Yaagoubi</h3>
          <p class="role">Ingenieur Robotiques</p>
          <p></p>
        </div>
        <div class="team_member">
          <div class="team_img">
            <img src="/assets/nabil.jpg" alt="Team_image" />
          </div>
          <h3>Nabil Mouami</h3>
          <p class="role">Devleppeur Informatique</p>
          <p>
            Devleppeur de l'infrastricture digital de l'entreprise Habitat et
            Servise: Applications Mobile Android,Site Web,Logiciel.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Equipes;
