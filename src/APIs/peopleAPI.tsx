import myNodeJSServer from "./myService";

export async function getPeople() {
  const people = await myNodeJSServer.getPeople();

  return people;
}
export async function getOwners() {
  const owners = await myNodeJSServer.getOwners();

  return owners;
}
export async function getBuyers() {
  const buyers = await myNodeJSServer.getBuyers();

  return buyers;
}
export async function getRenters() {
  const renters = await myNodeJSServer.getRenters();

  return renters;
}
