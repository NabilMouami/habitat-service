import React from "react";
import "./style.css";
const Prisident = () => {
  return (
    <section className="about_section" id="About">
      <div className="about_img">
        <img src="/assets/c2.jpg" alt="" />
      </div>
      <div className="about_details">
        <h1>Mot De President</h1>
        <p>
          Habitat & Service, qui a plus de 14 ans aujourd’hui ambitionne de se
          positionner en accompagnateur de l’humain dans un environnement de
          développement professionnel et personnel en perpétuelle évolution.
          Nous avons tous en nous les clefs de la réussite ou de l’échec lié à
          l’entreprenariat, qui s’idéalise ou se confronte dans le fait de
          regarder derrière soi pour se rappeler toutes les étapes qu’on a
          entrepris, et, devant soi, pour accompagner tous les objectifs que
          l’on projette d’entreprendre. Il suffit de choisir les bonnes clefs et
          d’user enfin de la seule liberté qu’on ait ; faire un choix. Habitat &
          Service fait le choix aujourd’hui d’être proactif sur la toile et s’en
          remet à vos clics. C’est le choix du partage, le choix de se mettre à
          votre écoute, à vos critiques, le choix d’être en audit constant
          envers ses clients et ses fournisseurs, le choix d’alimenter les
          tendances de notre métier, et de se remettre constamment en question
          tout en gardant une ligne de conduite exemplaire.
        </p>
        <div className="btns">
          <p className="btn-about btn1">
            M. JAOUAD FATMI PRÈSIDENT Habitat & Service SARL
          </p>
        </div>
      </div>
    </section>
  );
};

export default Prisident;
