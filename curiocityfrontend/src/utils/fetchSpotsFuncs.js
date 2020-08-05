// get all green spots
import React from "react";

export async function getAllSpots() {
  const response = await fetch('/api/spots', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
    },
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

// delete single spot
export function deleteSpot(id) {
  return fetch(`/api/spots/${id}`, {
    method: 'DELETE',
    headers: {},
  }).then((response) => {
    if (response.status !== 200) {
      throw new Error("failed to fetch data");
    }
  });
}