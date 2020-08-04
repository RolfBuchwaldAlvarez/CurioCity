// get all yellow spots
export async function fetchAllYellowSpots() {
  const response = await fetch('/api/yellowSpots', {
    method: 'GET',
    headers: {},
  });
  if (response.status !== 200) {
    throw new Error(response.statusText);
  }
  return await response.json();
}