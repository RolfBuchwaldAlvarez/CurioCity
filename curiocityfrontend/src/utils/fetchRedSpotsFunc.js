// get all red spots
export async function fetchAllRedSpots() {
  const response = await fetch('/api/redSpots', {
    method: 'GET',
    headers: {},
  });
  if (response.status !== 200) {
    throw new Error(response.statusText);
  }
  return await response.json();
}