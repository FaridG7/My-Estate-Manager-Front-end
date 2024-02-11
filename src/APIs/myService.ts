import { Manager, Person } from "../types/interfaces";


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
  public async getPeople(){
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
}

const myNodeJSServer = new myServer(
  "http://localhost:4000",
  "http://localhost:3000"
);

export default myNodeJSServer;
