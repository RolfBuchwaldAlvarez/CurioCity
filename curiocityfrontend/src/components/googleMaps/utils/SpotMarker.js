import {Marker} from "@react-google-maps/api";
import React from "react";

export function SpotMarker({spot, setSelected}) {
  const url = getIconUrl(spot.category);

  return (
    <Marker
      /*key={spot.time.toISOString()}*/
      position={{lat: spot.lat, lng: spot.lng}}
      icon={{
        url,
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

function getIconUrl(category) {
  switch (category) {
    case "restaurant":
      return "/svg/greenSpot.svg";
    case "bar":
      return "/svg/redSpot.svg";
    case "store":
      return "/svg/yellowSpot.svg";
    case "concert":
      return "/svg/purpleSpot.svg";
    case "random":
      return "/svg/blueSpot.svg";
    default:
      return "/svg/greenSpot.svg";
  }
}