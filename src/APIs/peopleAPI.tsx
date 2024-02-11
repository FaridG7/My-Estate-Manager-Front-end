import myNodeJSServer from "./myService";

export async function getPeople() {
    const people = await myNodeJSServer.getPeople();
  
    return people;
  }