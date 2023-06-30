import React, { Component } from "react";
import {Routes, Route} from "react-router-dom";
import Ecole from "../Ecole/Ecole";
import Contact from "../Contact/Contact";

class Router extends Component{
    render(){
        return(
            <>
                <Routes>
                    <Route path="/" element={<Ecole />}></Route>
                    <Route path="/contact" element={<Contact />}></Route>
                </Routes>
            </>
        )
    }
}
export default Router;
