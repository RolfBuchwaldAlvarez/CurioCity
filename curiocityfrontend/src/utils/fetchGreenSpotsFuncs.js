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
