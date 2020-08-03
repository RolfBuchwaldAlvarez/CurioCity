// select spot color by category

import {Marker} from "@react-google-maps/api";
import React from "react";

export function setSpotColorBySpotCategory(marker) {
  const RESTAURANT = "restaurant";
  const BAR = "bar";

  switch (marker.category) {
    case RESTAURANT:
      return (
        marker => (
          <Marker
            /*key={marker.time.toISOString()}*/
            position={{lat: marker.lat, lng: marker.lng}}
            icon={{
              url: "/svg/greenMarker.svg",
              scaledSize: new window.google.maps.Size(14, 14),
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(7, 7),
            }}
            onClick={() => {
              setSelected(marker);
            }}
          />
        ));
    case BAR:
      return (
        marker => (
          <Marker
            /*key={marker.time.toISOString()}*/
            position={{lat: marker.lat, lng: marker.lng}}
            icon={{
              url: "/svg/redMarker.svg",
              scaledSize: new window.google.maps.Size(14, 14),
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(7, 7),
            }}
            onClick={() => {
              setSelected(marker);
            }}
          />
        ));

  }
}