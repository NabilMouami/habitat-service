import React, { useState, useEffect } from "react";
import "./Reclamation.css";
import Multiselect from "multiselect-react-dropdown";
import axios from "axios";
export const Reclamation = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  const [options, setOptions] = useState([
    "probleme-prix",
    "quantite",
    "qualite",
    "casse",
    "livraison",
  ]);
  const [problm, setProblm] = useState([]);
  console.log(problm);
  const [displayValue, getvalue] = useState();

  //add new reclamation
  const addReclamation = () => {
    axios
      .post("http://localhost:5000/reclamez", {
        name: name,
        email: email,
        number: number,
        message: message,
        options: options,
      })
      .then(() => {
        console.log("success!");
      });
  };
  return (
    <div className="reclamation">
      <div className="rec-left">
        <h1>
          Vous avez des
          <br />
          <span className="qqq">Questions?</span>
          <br />
          Confiez nous votre besoin
        </h1>
        <p>
          Notre but est de vous aider à prospérer dans vos projets et, de cette
          manière, lier avec vous une relation privilégiée où les deux parties
          peuvent travailler dans la simplicité et la confiance.
        </p>
      </div>
      <div className="rec-right">
        <form>
          <h3>Reclamation:</h3>
          <input
            defaultValue={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Votre Nom Et Prenom"
            className="box"
          />
          <input type="email" placeholder="email" className="box" />
          <input type="text" placeholder="Votre Telephone" className="box" />
          <input
            type="text"
            placeholder="Societe Ou Site Web"
            className="box"
          />
          <textarea
            placeholder="Message De Reclamation ..."
            className="box"
            cols="30"
            rows="10"
          ></textarea>
          <Multiselect
            isObject={false}
            options={options}
            showCheckbox
            onSelect={(event) => setProblm(event)}
          />
          <button className="btn" onClick={() => addReclamation()}>
            send message
          </button>
        </form>
      </div>
    </div>
  );
};
