// select spot color by category

import React from "react";
import {Marker} from "@react-google-maps/api";

// switch case operator function for rendering different spot-colors
function setSpotTypeDependingOnCategory() {
  const RESTAURANT = "restaurant";
  const BAR = "bar";

  switch (spot.category) {
    case RESTAURANT:
      return (
        spot => (
          <Marker
            /*key={spot.time.toISOString()}*/
            position={{lat: spot.lat, lng: spot.lng}}
            icon={{
              url: "/svg/greenMarker.svg",
              scaledSize: new window.google.maps.Size(14, 14),
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(7, 7),
            }}
            onClick={() => {
              setSelected(spot);
            }}
          />
        ));
    case BAR:
      return (
        spot => (
          <Marker
            /*key={spot.time.toISOString()}*/
            position={{lat: spot.lat, lng: spot.lng}}
            icon={{
              url: "/svg/redMarker.svg",
              scaledSize: new window.google.maps.Size(14, 14),
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(7, 7),
            }}
            onClick={() => {
              setSelected(spot);
            }}
          />
        ));
    case
    default:
  }
}

// switch case operator function for rendering different spot-colors
function setSpotsDependingOnCategory() {

  spots.map((spot) => {
    if (spot.category === "restaurant") {
      return (
        <Marker
          /*key={spot.time.toISOString()}*/
          position={{lat: spot.lat, lng: spot.lng}}
          icon={{
            url: "/svg/greenMarker.svg",
            scaledSize: new window.google.maps.Size(14, 14),
            origin: new window.google.maps.Point(0, 0),
            anchor: new window.google.maps.Point(7, 7),
          }}
          onClick={() => {
            setSelected(spot);
          }}
        />
      );
    } else if (spot.category === "bar") {
      return (
        <Marker
          /*key={spot.time.toISOString()}*/
          position={{lat: spot.lat, lng: spot.lng}}
          icon={{
            url: "/svg/redMarker.svg",
            scaledSize: new window.google.maps.Size(14, 14),
            origin: new window.google.maps.Point(0, 0),
            anchor: new window.google.maps.Point(7, 7),
          }}
          onClick={() => {
            setSelected(spot);
          }}
        />
      );
    }
    return null;
  })
}