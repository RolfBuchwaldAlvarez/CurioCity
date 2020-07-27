import React from 'react';
import UserLoginSF from "./pages/userLoginSimplified/UserLoginSF";
import CreateAccount from "./pages/createAccount/CreateAccount";
import {Route, Switch} from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route exact path={"/createAccount"}>
        <CreateAccount/>
      </Route>
      <Route exact path={"/login"}>
        <UserLoginSF/>
      </Route>
    </Switch>
  );
}

export default App;
