// Librairies
import React, { useEffect, useContext, useState } from "react";
import classes from "./Eleve.module.css";
import styled from "styled-components";
import API from "../../Containers/API/APIConnect"

//Contexte
import { themeContext } from "../../context/theme-context";

const Carte = styled.div`
  background-color: ${(props) => props.background};
  border: 1px solid silver;
  font-family: arial;
  padding: 30px;
  margin: 15px;
  display: inline-block;
  width: 300px;
  text-align: left;
`;

function Eleve(props) {
  const theme = useContext(themeContext);

  // componentDidMount
  useEffect(() => {
    console.log("[Eleve.js] componentDidMount");
  }, []);

  // componentDidUpdate
  useEffect(() => {
    console.log("[Eleve.js] componentDidUpdate");
  });

  // componentWillUnmount
  useEffect(() => {
    return () => {
      console.log("[Eleve.js] componentWillUnmount");
    };
  }, []);

  // Limitateur
  useEffect(() => {
    console.log("[Eleve.js] Le nom a été modifié");
  }, [props.nom]);

  // Variables
  const moyenneClasses = [];
  let carteBackground;

  if (props.moyenne > 10) {
    moyenneClasses.push(classes.green);
    carteBackground = "#d2f5e3";
  } else if (props.moyenne === 10) {
    moyenneClasses.push(classes.orange);
    carteBackground = "#fff5ea";
  } else {
    moyenneClasses.push(classes.red);
    carteBackground = "#f7dad9";
  }

  let message;

  if (props.moyenne < 6) {
    message = <p>Cet élève va redoubler.</p>;
  }

  return (
    <Carte background={carteBackground}>
      <h1 className="magie" onClick={props.clic}>
        {props.nom}
      </h1>
      <p>Moyenne scolaire :
        <b className={moyenneClasses.join(" ")}>{props.moyenne}/20</b>
      </p>
      <p>Age : {Math.floor(Math.random() * 100)} ans</p>
      <i>{props.children}</i>
      {message}
      <input
        ref={props.maRef}
        type="text"
        defaultValue={props.nom}
        style={{
          width: "100%",
          background: theme.background,
          color: theme.foreground,
        }}/>
      <button onClick={props.supprimer} style={{ marginTop: "5px" }}>
        Supprimer
      </button>
      <button onClick={props.changerNom} style={{ marginTop: "5px" }}>
        Modifier
      </button>
    </Carte>
    // <Carte background={carteBackground}>
    //     <h1 className="magie" onClick={props.clic}>{props.prenom + " " + props.nom}</h1>
    //     <p>
    //         Moyenne scolaire : &nbsp;
    //         <b className={moyenneClasses.join(' ')}>
    //             {props.moyenne}/20
    //         </b>
    //     </p>
    //     <p>Age : {Math.floor(Math.random() * 100)}</p>
    //     <p>Professeur : <a href="#">{props.professeur.prenom + " " + props.professeur.nom}</a></p>
    //     <i>{props.children}</i>
    //     {message}
    //     <input ref={props.maRef} onChange={props.changerNom} type="text" defaultValue={props.prenom + " " + props.nom}
    //             style={{
    //                     width:'100%',
    //                     background: theme.background,
    //                     color: theme.foreground
    //                 }}/>
    //     <button onClick={props.supprimer} style={{marginTop:'5px'}}>Supprimer</button>
    //     <button onClick={props.update} style={{marginLeft:'5px'}}>Modifier</button>
    // </Carte>
  );
}

/*

    STATEFULL / CONTAINER : Composant qui gère un state
    STATELESS / Component : Composant qui ne gère pas de state

    La bonne méthode : le - de containers possible

*/

export default Eleve;
