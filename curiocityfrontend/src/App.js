import React, {useEffect, useState} from 'react';
import {Route, Switch} from "react-router-dom";
import UserLoginSF from "./pages/UserLoginSF";
import CreateAccount from "./pages/CreateAccount";
import MainPage from "./pages/MainPage";
import GoogleMaps from "./components/googleMaps/GoogleMaps";
import {fetchAllSpots} from "./utils/SpotsUtils";

function App() {

  const [spots, setSpots] = useState([]);

  useEffect(() => {
    fetchAllSpots().then(data => setSpots(data))
  }, [])

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
        <GoogleMaps>
          {spots.map((spot) => <div key={spot.id}>
            {spot.description}
          </div>)}
        </GoogleMaps>
      </Route>
    </Switch>
  );
}

export default App;
