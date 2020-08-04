// get all green spots
import React from "react";

export async function fetchAllSpots() {
  const response = await fetch('/api/spots', {
    method: 'GET',
    headers: {},
  });
  if (response.status !== 200) {
    throw new Error(response.statusText);
  }
  return await response.json();
}

// add single spot
export function putSpot(category, lat, lng) {
  return fetch('/api/spots', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({category, lat, lng}),
  }).then((response) => {
    if (response.status !== 200) {
      throw new Error("failed to fetch data");
    }
    return response.json();
  })
}

// temporär aus GoolgeMaps.js ausgelagert

/*
const onMapClick = React.useCallback((event) => {
  console.log(event);
  putGreenSpot(event.id, event.category, event.latLng.lat(), event.latLng.lng())
    .then((spot) => {
      setGreenSpots((current) => [
        ...current,
        {
          id: event.id,
          category: event.category,
          lat: event.latLng.lat(),
          lng: event.latLng.lng(),
          /!*time: new Date(),*!/
        }]);
    })
}, []);*/
