// get all green spots
export async function fetchAllGreenSpots() {
  const response = await fetch('/api/greenSpots', {
    method: 'GET',
    headers: {},
  });
  if (response.status !== 200) {
    throw new Error(response.statusText);
  }
  return await response.json();
}

// add single spot
export async function putGreenSpot(id, lat, lng) {
  const response = await fetch('/api/spots', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({id, lat, lng}),
  });
  if (response.status !== 200) {
    throw new Error("failed to fetch data");
  }
  return await response.json();
}
