import type {User} from "@/api/users.ts";
import Cookies from "js-cookie";

export interface ClientData {
  name: string;
  email: string;
  phone: string;
  userId: number;
}

export function saveClientData(clientDataArray: ClientData[]){
  localStorage.setItem("clientData", JSON.stringify(clientDataArray));
}

export function getAllClientData(){
  const storedClientData = localStorage.getItem("clientData");
  let parsedStoredClientData;

  if (storedClientData) {
    parsedStoredClientData = JSON.parse(storedClientData);
  } else {
    parsedStoredClientData = [];
  }

  return parsedStoredClientData as ClientData[];
}

export function getClientData() {
  const clientData = getAllClientData();
  const userId = Number(Cookies.get('userId'));

  return clientData.find(client => client.userId === userId) || null;
}


export function setClientData(name: string, email: string, phone: string) {
  const clientData = getAllClientData();
  const userId = Number(Cookies.get("userId"));

  const existingClient = clientData.find(client => client.userId === userId);

  if (existingClient) {
    existingClient.name = name;
    existingClient.email = email;
    existingClient.phone = phone;
  } else {
    clientData.push({ userId, name, email, phone });
  }

  saveClientData(clientData);
}
