import {
  Estate,
  Manager,
  Person,
  RentContract,
  SaleContract,
} from "../types/interfaces";

class myServer {
  private token: string | null;
  private authUrl: string;
  private baseUrl: string;

  constructor(authUrl: string, baseUrl: string) {
    this.token = sessionStorage.getItem("myEstateManagerToken");
    this.authUrl = authUrl;
    this.baseUrl = baseUrl;
  }

  private setTheToken(token: string) {
    sessionStorage.setItem("myEstateManagerToken", token);
    this.token = token;
  }

  public async login(manager_id: string, password: string): Promise<void> {
    if (this.token) return;
    const response = await fetch(this.authUrl + "/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        manager_id,
        password,
      }),
    });
    if (!response.ok) {
      throw Error(`Failed to get data, status: ${response.status}`);
    }
    const token = (await response.json()) as string;
    this.setTheToken(token);
  }

  public logout() {
    this.token = null;
    sessionStorage.removeItem("myEstateManagerToken");
  }

  public isLoggedin() {
    if (this.token) return true;
    else return false;
  }

  public async getCurrentUser() {
    const response = await fetch(this.baseUrl + "/manager/user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`,
      },
    });

    if (!response.ok) {
      throw Error(`Failed to get data, status: ${response.status}`);
    }
    const manager = (await response.json()) as Manager;
    return manager;
  }

  public async getPeople() {
    const response = await fetch(this.baseUrl + "/people", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`,
      },
    });

    if (!response.ok) {
      throw Error(`Failed to get data, status: ${response.status}`);
    }
    const people = (await response.json()) as Person[];
    return people;
  }
  public async getOwners() {
    const response = await fetch(this.baseUrl + "/people/owners", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`,
      },
    });

    if (!response.ok) {
      throw Error(`Failed to get data, status: ${response.status}`);
    }
    const people = (await response.json()) as Person[];
    return people;
  }
  public async getBuyers() {
    const response = await fetch(this.baseUrl + "/people/buyers", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`,
      },
    });

    if (!response.ok) {
      throw Error(`Failed to get data, status: ${response.status}`);
    }
    const people = (await response.json()) as Person[];
    return people;
  }
  public async getRenters() {
    const response = await fetch(this.baseUrl + "/people/renters", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`,
      },
    });

    if (!response.ok) {
      throw Error(`Failed to get data, status: ${response.status}`);
    }
    const people = (await response.json()) as Person[];
    return people;
  }
  public async getPerson(id: number) {
    const response = await fetch(this.baseUrl + `/people/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`,
      },
    });

    if (!response.ok) {
      throw Error(`Failed to get data, status: ${response.status}`);
    }
    const people = (await response.json()) as Person;
    return people;
  }
  public async insertPerson(newPerson: Omit<Person, "id">) {
    const response = await fetch(this.baseUrl + "/people", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`,
      },
      body: JSON.stringify(newPerson),
    });

    if (!response.ok) {
      throw Error(`Failed to get data, status: ${response.status}`);
    }
  }
  public async updatePerson(updatedPerson: Person) {
    const { id } = updatedPerson;
    if (!id) throw Error("There should be an id in the object");
    const response = await fetch(this.baseUrl + `/people/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`,
      },
      body: JSON.stringify(updatedPerson),
    });

    if (!response.ok) {
      throw Error(`Failed to get data, status: ${response.status}`);
    }
  }
  public async deletePerson(id: number) {
    if (!id) throw Error("There should be an id");
    const response = await fetch(this.baseUrl + `/people/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`,
      },
    });

    if (!response.ok) {
      throw Error(`Failed to get data, status: ${response.status}`);
    }
  }

  public async getIdleEstates() {
    const response = await fetch(this.baseUrl + "/estates/idle", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`,
      },
    });

    if (!response.ok) {
      throw Error(`Failed to get data, status: ${response.status}`);
    }
    const idleEstates = (await response.json()) as Estate[];
    return idleEstates;
  }
  public async getSoldEstates() {
    const response = await fetch(this.baseUrl + "/estates/sold", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`,
      },
    });

    if (!response.ok) {
      throw Error(`Failed to get data, status: ${response.status}`);
    }
    const soldEstates = (await response.json()) as Estate[];
    return soldEstates;
  }
  public async getRentedEstates() {
    const response = await fetch(this.baseUrl + "/estates/rented", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`,
      },
    });

    if (!response.ok) {
      throw Error(`Failed to get data, status: ${response.status}`);
    }
    const rentedEstates = (await response.json()) as Estate[];
    return rentedEstates;
  }
  public async getEstate(id: number) {
    const response = await fetch(this.baseUrl + `/estates/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`,
      },
    });

    if (!response.ok) {
      throw Error(`Failed to get data, status: ${response.status}`);
    }
    const rentedEstates = (await response.json()) as Estate;
    return rentedEstates;
  }
  public async insertEstate(newEstate: Omit<Estate, "id">) {
    const response = await fetch(this.baseUrl + "/estates", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`,
      },
      body: JSON.stringify(newEstate),
    });

    if (!response.ok) {
      throw Error(`Failed to get data, status: ${response.status}`);
    }
  }
  public async updateEstate(updatedEstate: Estate) {
    const { id } = updatedEstate;
    if (!id) throw Error("There should be an id in the object");
    const response = await fetch(this.baseUrl + `/estates/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`,
      },
      body: JSON.stringify(updatedEstate),
    });

    if (!response.ok) {
      throw Error(`Failed to get data, status: ${response.status}`);
    }
  }
  public async deleteEstate(id: number) {
    if (!id) throw Error("There should be an id");
    const response = await fetch(this.baseUrl + `/estates/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`,
      },
    });

    if (!response.ok) {
      throw Error(`Failed to get data, status: ${response.status}`);
    }
  }

  public async getSaleContract(id: number) {
    const response = await fetch(this.baseUrl + `/contracts/sale/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`,
      },
    });

    if (!response.ok) {
      throw Error(`Failed to get data, status: ${response.status}`);
    }
    const saleContract = (await response.json()) as SaleContract;
    return saleContract;
  }
  public async getSaleContracts() {
    const response = await fetch(this.baseUrl + `/contracts/sale/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`,
      },
    });

    if (!response.ok) {
      throw Error(`Failed to get data, status: ${response.status}`);
    }
    const saleContract = (await response.json()) as SaleContract[];
    return saleContract;
  }
  public async insertSaleContract(newSaleContract: Omit<SaleContract, "id">) {
    const response = await fetch(this.baseUrl + `/contracts/sale`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`,
      },
      body: JSON.stringify(newSaleContract),
    });

    if (!response.ok) {
      throw Error(`Failed to get data, status: ${response.status}`);
    }
  }
  public async updateSaleContracts(updatedSaleContract: SaleContract) {
    const { id } = updatedSaleContract;
    const response = await fetch(this.baseUrl + `/contracts/sale/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`,
      },
      body: JSON.stringify(updatedSaleContract),
    });

    if (!response.ok) {
      throw Error(`Failed to get data, status: ${response.status}`);
    }
  }
  public async deleteSaleContract(id: number) {
    const response = await fetch(this.baseUrl + `/contracts/sale/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`,
      },
    });

    if (!response.ok) {
      throw Error(`Failed to get data, status: ${response.status}`);
    }
  }

  public async getRentContract(id: number) {
    const response = await fetch(this.baseUrl + `/contracts/rent/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`,
      },
    });

    if (!response.ok) {
      throw Error(`Failed to get data, status: ${response.status}`);
    }
    const saleContract = (await response.json()) as RentContract;
    return saleContract;
  }
  public async getRentContracts() {
    const response = await fetch(this.baseUrl + `/contracts/rent/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`,
      },
    });

    if (!response.ok) {
      throw Error(`Failed to get data, status: ${response.status}`);
    }
    const saleContract = (await response.json()) as RentContract[];
    return saleContract;
  }
  public async insertRentContract(newRentContract: Omit<RentContract, "id">) {
    const response = await fetch(this.baseUrl + `/contracts/rent`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`,
      },
      body: JSON.stringify(newRentContract),
    });

    if (!response.ok) {
      throw Error(`Failed to get data, status: ${response.status}`);
    }
  }
  public async updateRentContracts(updatedrentContract: RentContract) {
    const { id } = updatedrentContract;
    const response = await fetch(this.baseUrl + `/contracts/rent/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`,
      },
      body: JSON.stringify(updatedrentContract),
    });

    if (!response.ok) {
      throw Error(`Failed to get data, status: ${response.status}`);
    }
  }
  public async deleteRentContract(id: number) {
    const response = await fetch(this.baseUrl + `/contracts/rent/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`,
      },
    });

    if (!response.ok) {
      throw Error(`Failed to get data, status: ${response.status}`);
    }
  }
}

const myNodeJSServer = new myServer(
  "http://localhost:4000",
  "http://localhost:3000"
);

export default myNodeJSServer;
