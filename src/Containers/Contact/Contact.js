import { Outlet } from "react-router-dom";
import Formulaire from "./Formulaire/Formulaire";


function Contact(){
    return (
        <div className="h-100 d-flex flex-column justify-content-center align-items-center">
            <h1>Formulaire de contact</h1>
            <Formulaire/>
            <Outlet/>
        </div>
    );
};

export default Contact;