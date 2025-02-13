import Cookies from "js-cookie";

export interface User{
  id: number;
  username: string;
  email: string;
  password: string;
  userType: UserType;
}

export enum UserType {
  Client,
  Employee,
  Admin,
}

export function saveUsers(userArray: User[]){
  localStorage.setItem("users", JSON.stringify(userArray));
}

export function getUsersBare(): User[] {
  const storedUsers = localStorage.getItem("users");
  let parsedStoredUsers;

  if (storedUsers) {
    parsedStoredUsers = JSON.parse(storedUsers);
  } else {
    parsedStoredUsers = [];
  }

  return parsedStoredUsers as User[];
}

export function getUsers(): User[] {
  const storedUsers = localStorage.getItem("users");
  let parsedStoredUsers;

  if (storedUsers) {
    parsedStoredUsers = JSON.parse(storedUsers);
  } else {
    parsedStoredUsers = [];
  }

  const filteredUsers = parsedStoredUsers.filter((user: User) => user.userType !== UserType.Admin);

  return filteredUsers as User[];
}

export function isUserLoggedIn() {
  return Cookies.get('userId') !== null;
}

export function changeUserType(userId: number, newType: UserType){
  const users = getUsersBare();
  const user = users.find(u => u.id === userId);

  if (user) {
    user.userType = newType;

    saveUsers(users);
  }
}

export function changeUserName(userId: number, newName: string) {
  const users = getUsersBare();
  const user = users.find(u => u.id === userId);

  if (user) {
    user.username = newName;
    saveUsers(users);
  }
}

export function isUserAdmin(){
  const userId = Number(Cookies.get('userId'));
  const users = getUsersBare();
  const userIndex = users.findIndex(user => user.id === userId);
  if (userIndex == -1) return false;
  return users[userIndex].userType === UserType.Admin;
}
export function isUserEmployee(){
  const userId = Number(Cookies.get('userId'));
  const users = getUsersBare();
  const userIndex = users.findIndex(user => user.id === userId);
  if (userIndex == -1) return false;
  return users[userIndex].userType === UserType.Employee;
}
export function isUserClient(){
  const userId = Number(Cookies.get('userId'));
  const users = getUsersBare();
  const userIndex = users.findIndex(user => user.id === userId);
  if (userIndex == -1) return false;
  return users[userIndex].userType === UserType.Client;
}
