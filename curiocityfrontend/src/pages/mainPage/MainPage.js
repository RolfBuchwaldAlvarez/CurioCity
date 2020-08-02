import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import MainPageHeader from "./components/MainPageHeader";
import GoogleMaps from "../googleMaps/GoogleMaps";

const useStyles = makeStyles((theme) => ({
  box1: {
    height: "50%",
  },
  box2: {
    height: "50%",
  }
}));

export default function MainPage() {
  const classes = useStyles();

  return (
    <>
      <MainPageHeader/>
      <GoogleMaps/>
      {/*<MainPageBottomNavigation/>*/}
    </>
  );
}