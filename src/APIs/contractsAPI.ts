import { SaleContract, RentContract } from "../types/interfaces";
import myNodeJSServer from "./myService";

export async function getSaleContracts() {
  const SaleContracts = await myNodeJSServer.getSaleContracts();

  return SaleContracts;
}
export async function getSaleContract(id: number) {
  return await myNodeJSServer.getSaleContract(id);
}
export async function insertSaleContract(
  newSaleContract: Omit<SaleContract, "id">
) {
  await myNodeJSServer.insertSaleContract(newSaleContract);
}
export async function updateSaleContracts(updatedSaleContract: SaleContract) {
  await myNodeJSServer.updateSaleContracts(updatedSaleContract);
}
export async function deleteSaleContract(id: number) {
  await myNodeJSServer.deleteSaleContract(id);
}


export async function getRentContract(id: number) {
  return await myNodeJSServer.getRentContract(id);
}
export async function getRentContracts() {
  const SaleContracts = await myNodeJSServer.getRentContracts();

  return SaleContracts;
}
export async function insertRentContract(
  newRentContract: Omit<RentContract, "id">
) {
  await myNodeJSServer.insertRentContract(newRentContract);
}
export async function updateRentContracts(updatedRentContract: RentContract) {
  await myNodeJSServer.updateRentContracts(updatedRentContract);
}
export async function deleteRentContract(id: number) {
  await myNodeJSServer.deleteRentContract(id);
}
