// Librairies
import React from "react";
import classes from "./App.module.css"

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

// Ecole
import Router from "../Router/Router";
import Navbar from "../../Components/Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";


function App(){
  return(
    <div className={classes.App}>
      <BrowserRouter>
        <Navbar/>
        <div className={classes.content}>
          <Router/>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;