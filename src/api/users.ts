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

export function getUsers(): User[] {
  const storedUsers = localStorage.getItem("users");
  let parsedStoredUsers;

  if (storedUsers) {
    parsedStoredUsers = JSON.parse(storedUsers);
  } else {
    parsedStoredUsers = [];
  }

  return parsedStoredUsers as User[];
}

export function isUserLoggedIn() {
  return Cookies.get('userId') !== null;
}

export function changeUserType(userId: number, newType: UserType){
  const users = getUsers();
  const user = users.find(u => u.id === userId);

  if (user) {
    user.userType = newType;

    saveUsers(users);
  }
}

export function changeUserName(userId: number, newName: string) {
  const users = getUsers();
  const user = users.find(u => u.id === userId);

  if (user) {
    user.username = newName;
    saveUsers(users);
  }
}
