import React from "react";
import MainPageHeader from "../components/MainPageHeader";
import GoogleMaps from "../components/googleMaps/GoogleMaps";

export default function MainPage() {

  return (
    <>
      <MainPageHeader/>
      <GoogleMaps/>
      {/*<MainPageBottomNavigation/>*/}
    </>
  );
}