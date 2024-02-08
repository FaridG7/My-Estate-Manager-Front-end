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

  public async login(
    manager_id: string,
    password: string
  ): Promise<Error | null> {
    if (this.token) return null;
    try {
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

      const { status, token, text } = (await response.json()) as {
        token: string;
        text: string;
        status: number;
      };
      if (status === 200) this.setTheToken(token);
      else throw new Error(text);
    } catch (error) {
      return error as Error;
    }
    return null;
  }

  public logout() {
    this.token = null;
    sessionStorage.removeItem("myEstateManagerToken");
  }
}

const myNodeJSServer = new myServer(
  "http://localhost:4000",
  "http://localhost:3000"
);

export default myNodeJSServer;
