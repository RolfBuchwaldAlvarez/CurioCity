export async function fetchAllSpots() {
  const response = await fetch('/api/spots');
  return await response.json();
}