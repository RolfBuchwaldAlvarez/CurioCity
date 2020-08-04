import React from 'react';
import {Route, Switch} from "react-router-dom";
import UserLoginSF from "./pages/UserLoginSF";
import CreateAccount from "./pages/CreateAccount";
import MainPage from "./pages/MainPage";
import GoogleMaps from "./components/googleMaps/GoogleMaps";

function App() {

  return (
    <Switch>
      <Route exact path={"/createAccount"}>
        <CreateAccount/>
      </Route>
      <Route exact path={"/login"}>
        <UserLoginSF/>
      </Route>
      <Route exact path={"/main"}>
        <MainPage/>
      </Route>
      <Route exact path={"/maps"}>
        <GoogleMaps/>
      </Route>
      <Route exact path={"/"}>
        <GoogleMaps/>
      </Route>
    </Switch>
  );
}

export default App;
