import React, {useState, useRef, useEffect, createRef} from "react";
import styledComponent from "styled-components";
import "./Ecole.css"

//Components
import Search from "../../Components/Search/Search";
import MonFragment from "../../HOC/MonFragment/MonFragment";
import Eleve from "../../Components/Eleve/Eleve";
import ModalNew from "../../Components/Eleve/FormNew";
import API from "../API/APIConnect";
import FormNew from "../../Components/Eleve/FormNew";

const h1Style={
  fontSize: "3em",
  marginBottom: "4vh"
}
  
const MonBoutonStylise=styledComponent.button`
    padding : 10px 30px;
    background-color : pink;
    color : white;
    border-radius:10px;
    border:none;
    font-size:30px;
    margin-top:4vh;
  
    &:hover{
      background-color: #c999a2;
    }
`;

function Ecole(){
    const [eleves, setEleves] = useState([]);
    const [afficherEleve, setAfficherEleve] = useState(true);
    const modalRef = useRef(null)



    //Un useEffect on y met tout le code qu'on veut et il se joue quand le composant est monté
    useEffect(() => {
      buildEleves(); // Lance la fonction qui récupérer les éléments de notre API
    }, []);

    const buttonClickedHandler = (nouveauNom, index) => {
        const nouveauxEleves = [...eleves];
        nouveauxEleves[index].nom = nouveauNom;
        setEleves(nouveauxEleves);
        elementInput[index].current.focus();
    }

    
    const nameChangedHandler = (id, index) => {
      API.put('/eleves/'+id, {
        nom: elementInput[index].current.value
      }).then(() => {
        buildEleves();
      })
    }

    const showHideClickHandler = () =>{
      //permet de passer en true et en false => comme un toggle
      setAfficherEleve(!afficherEleve);
  }

    const removeClickHandler = id =>{
      // On demande de supprimer l'élève correspondant
      API.delete('eleves/'+id).then(() => {
        buildEleves(); // On refait l'affichage des élèves
        alert("Elève supprimer!"); // On alerte qu'on a bien supprimé l'élève
      });
    }



    const buildEleves = () => {
      API.get('/eleves').then(res => {
        setEleves(res.data) 
      })
    }

    let elementInput = eleves.map((i) => createRef());
    let cartes = eleves.map((eleveState, index) => {

    return(
    <Eleve
        key={eleveState.id} 
        nom={eleveState.nom} 
        moyenne={eleveState.moyenne} 
        citation={eleveState.citation} 
        clic={() => buttonClickedHandler('Julie Martin', index)}
        supprimer={()=>removeClickHandler(eleveState.id)}
        changerNom={()=>nameChangedHandler(eleveState.id, index)} // On aura seulement besoin de l'identifiant de l'élève
        maRef = {elementInput[index]}>
    </Eleve>
    )
    })
    
    return (
        <>
        <div style={{
          backgroundImage: "url(/4028065.jpg)",
          backgroundSize: "cover",
          height: "100%"
        }}>
        <h1 style={h1Style}> Bienvenue dans la classe Terre</h1>
          <Search/>
          { afficherEleve ?
              <div className="flex-row">
              <MonFragment>
                {cartes}
              </MonFragment>
              </div>
              :null
          }

          <div className="flex-row justify-center mb-3">
              <MonBoutonStylise onClick={buttonClickedHandler.bind(this,"Steve Jobs", 0)}>Transformer le premier élève</MonBoutonStylise>
              <MonBoutonStylise onClick={showHideClickHandler} style={{ marginLeft: "1em"}}>Afficher/Masquer</MonBoutonStylise>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center">
            {<FormNew ref={modalRef} submitForm={buildEleves}/>}
          </div>
        </div>
        </>
    );
};

export default Ecole;