import { Person } from "../types/interfaces";
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

export async function getPerson(id: number) {
  const person = await myNodeJSServer.getPerson(id);

  return person;
}

export async function insertPerson(newPerson: Omit<Person, "id">) {
  await myNodeJSServer.insertPerson(newPerson);
}
export async function updatePerson(updatedPerson: Person) {
  await myNodeJSServer.updatePerson(updatedPerson);
}
export async function deletePerson(id: number) {
  await myNodeJSServer.deletePerson(id);
}
