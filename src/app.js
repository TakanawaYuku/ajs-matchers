export default function sortPlayers(data) {
  const result = data.sort((a, b) => (a.health > b.health ? -1 : 1));
  return result;
}
