// get all blue spots
export async function fetchAllBlueSpots() {
  const response = await fetch('/api/blueSpots', {
    method: 'GET',
    headers: {},
  });
  if (response.status !== 200) {
    throw new Error(response.statusText);
  }
  return await response.json();
}