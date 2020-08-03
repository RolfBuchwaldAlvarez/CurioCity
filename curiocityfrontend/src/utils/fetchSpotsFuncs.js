// get all spots
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
export async function putSpot(id, lat, lng) {
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
