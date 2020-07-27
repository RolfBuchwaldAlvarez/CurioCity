import React from 'react';
<<<<<<< HEAD
import CreateAccount from "./pages/createAccount/CreateAccount";


function App() {
  return (
    /*<UserLoginSF/>*/
    <CreateAccount/>
=======
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
>>>>>>> db0474a82ed498b3063fa227a0b5a8aa85325be7
  );
}

export default App;
