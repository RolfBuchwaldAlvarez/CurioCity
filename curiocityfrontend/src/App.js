import React from 'react';
import {Route, Switch} from "react-router-dom";
import UserLogin from "./pages/UserLogin";
import CreateNewAccount from "./pages/CreateNewAccount";
import MainPage from "./pages/MainPage";
import GoogleMaps from "./components/googleMaps/GoogleMaps";
import SetSpotCategoryCard from "./components/googleMaps/components/SetSpotCategoryCard";
import SpotSideBar from "./components/googleMaps/components/SpotSideBar";
import LandingPage from "./pages/LandingPage";

function App() {

  return (
    <Switch>
      <Route exact path={"/setSpotCategoryCard"}>
        <SetSpotCategoryCard/>
      </Route>
      <Route exact path={"/spotSideBar"}>
        <SpotSideBar/>
      </Route>
      <Route exact path={"/createAccount"}>
        <CreateNewAccount/>
      </Route>
      <Route exact path={"/login"}>
        <UserLogin/>
      </Route>
      <Route exact path={"/main"}>
        <MainPage/>
      </Route>
      <Route exact path={"/maps"}>
        <GoogleMaps/>
      </Route>
      <Route exact path={"/"}>
        <LandingPage/>
      </Route>
    </Switch>
  );
}

export default App;
