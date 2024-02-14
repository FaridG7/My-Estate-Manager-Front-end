import myNodeJSServer from "./myService";

export async function getIdleEstates() {
  const people = await myNodeJSServer.getIdleEstates();

  return people;
}
export async function getSoldEstates() {
  const owners = await myNodeJSServer.getSoldEstates();

  return owners;
}
export async function getRentedEstates() {
  const buyers = await myNodeJSServer.getRentedEstates();

  return buyers;
}
export async function getEstate(id: number) {
  const renters = await myNodeJSServer.getEstate(id);

  return renters;
}
