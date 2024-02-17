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
  newSaleContract: Omit<SaleContract, "id" | "manager_id">
) {
  await myNodeJSServer.insertSaleContract(newSaleContract);
}
export async function updateSaleContract(
  updatedSaleContract: Omit<SaleContract, "manager_id">
) {
  await myNodeJSServer.updateSaleContract(updatedSaleContract);
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
  newRentContract: Omit<RentContract, "id" | "manager_id">
) {
  await myNodeJSServer.insertRentContract(newRentContract);
}
export async function updateRentContract(
  updatedRentContract: Omit<RentContract, "manager_id">
) {
  await myNodeJSServer.updateRentContract(updatedRentContract);
}
export async function deleteRentContract(id: number) {
  await myNodeJSServer.deleteRentContract(id);
}
