// get all purple spots
export async function fetchAllPurpleSpots() {
  const response = await fetch('/api/purpleSpots', {
    method: 'GET',
    headers: {},
  });
  if (response.status !== 200) {
    throw new Error(response.statusText);
  }
  return await response.json();
}