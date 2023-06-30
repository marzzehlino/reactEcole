import React, {useState, useRef} from "react";
import styledComponent from "styled-components";

//Components
import Search from "../Components/Search/Search";
import MonFragment from "../HOC/MonFragment/MonFragment";
import Eleve from "../Components/Eleve/Eleve";

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

function Home(){
    const [eleves, setEleves] = useState([
        {
          id: 1,
          nom: 'Eva Dupont',
          moyenne: 15,
          citation: 'Allez toujours plus loin !'
        },
        {
          id: 2,
          nom: 'Elon Musk',
          moyenne: 5,
          citation: 'Le feu ça brûle'
        },
        {
          id: 3,
          nom: 'Steve Jobs',
          moyenne: 10,
          citation: "L'eau sa mouille"
          }
    ]);
    
    const [afficherEleve, setAfficherEleve] = useState(true);
    const elementInput = useRef(null);

    const buttonClickedHandler = (nouveauNom, index) => {
        const nouveauxEleves = [...eleves];
        nouveauxEleves[index].nom = nouveauNom;
        setEleves(nouveauxEleves);
        elementInput.current.focus();
    }

    const rebuildEleve = () =>{
        
    }

    const showHideClickHandler = () =>{
        //permet de passer en true et en false => comme un toggle
        setAfficherEleve(!afficherEleve);
    }

    const removeClickHandler = index =>{
        const nouveauxEleves=[...eleves];
        nouveauxEleves.splice(index,1);
        setEleves(nouveauxEleves);
    }

    const nameChangedHandler =(event,index)=>{
        const nouveauxEleves=[...eleves];
        nouveauxEleves[index].nom = event.target.value;
        console.log(event.target.value);
        setEleves(nouveauxEleves);
    }
    
    let cartes = eleves.map((eleveState, index)=>{
    let maVarRef = null;

    if (index === 0) {
        maVarRef = elementInput;
    }

    return(
    <Eleve
        key={eleveState.id} 
        nom={eleveState.nom} 
        moyenne={eleveState.moyenne} 
        citation={eleveState.citation} 
        clic={() => buttonClickedHandler('Julie Martin', index)}
        supprimer={()=>removeClickHandler(index)}
        changerNom={(e)=>nameChangedHandler(e,index)}
        maRef = {maVarRef}>
    </Eleve>
    )
    })
    return (
        <>
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

          <div className="flex-row justify-between">
              <MonBoutonStylise onClick={buttonClickedHandler.bind(this,"Steve Jobs", 0)}>Transformer le premier élève</MonBoutonStylise>
              <MonBoutonStylise onClick={showHideClickHandler} style={{ marginLeft: "1em"}}>Afficher/Masquer</MonBoutonStylise>
          </div>
        </>
    );
};

export default Home;