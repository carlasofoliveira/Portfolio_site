import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../src/Paginas/Home";
import NavMenu from "../src/Components/NavMenu";
import Sobre from "../src/Paginas/Sobre";
import Projectos from "./Paginas/Projectos";
import Contactos from "../src/Paginas/Contactos";
import AppCenter from "./Components/AppCenter";
import Marvel from "./Components/Marvel";
import UpLife from "./Components/UpLife";
import Playdate from "./Components/Playdate";
import SiteJogo from './Components/SiteJogo';


export default function App() {
  return (
    <>
      <Router>
        <NavMenu />
        <Switch>
          <Route path="/sobre">
            <Sobre />
          </Route>

          <Route path="/projectos">
            <Projectos />
          </Route>

          <Route path="/contactos">
            <Contactos />
          </Route>
          <Route path="/AppCenter">
            <AppCenter />
          </Route>
          <Route path="/Marvel">
            <Marvel />
          </Route>
          <Route path="/UpLife">
            <UpLife />
          </Route>
          <Route path="/Playdate">
            <Playdate />
          </Route>
          <Route path="/SiteJogo">
            <SiteJogo />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
