import React from 'react';
import {Route, Switch} from "react-router-dom";
import UserLoginSF from "./pages/userLoginSimplified/UserLoginSF";
import CreateAccount from "./pages/createAccount/CreateAccount";
import MainPage from "./pages/mainPage/MainPage";
import GoogleMaps from "./pages/googleMaps/GoogleMaps";

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
    </Switch>
  );
}

export default App;
