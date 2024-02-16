import { Estate } from "../types/interfaces";
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

export async function insertEstate(newEstate: Omit<Estate, "id">) {
  await myNodeJSServer.insertEstate(newEstate);
}
export async function updateEstate(updatedEstate: Estate) {
  await myNodeJSServer.updateEstate(updatedEstate);
}
export async function deleteEstate(id: number) {
  await myNodeJSServer.deleteEstate(id);
}
