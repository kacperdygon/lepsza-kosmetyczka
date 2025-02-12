
import Cookies from 'js-cookie'
export interface User{
  id: number;
  username: string;
  email: string;
  password: string;
}

export function login(email: string, password: string): number {

  const userArray = getUsers();

  const user = userArray.find(user => user.email === email && user.password === password);

  if (!user) {
    return 401
  } else {
    Cookies.set('userId', user.id.toString());
    return 200
  }

}

export function addUser(email: string, password: string): number {

  const userArray = getUsers();

  let nextId;
  if (userArray.length == 0) {
    nextId = 0;
  } else {
    nextId = userArray[userArray.length - 1].id + 1;
  }

  const newUser: User = {
    id: nextId,
    username: email,
    email: email,
    password: password,
  }

  if (userArray.some((user) => user.email === email)) {
    return 409;
  }

  userArray.push(newUser);
  saveUsers(userArray);

  return 201;
}

export function isUserLoggedIn() {
  return Cookies.get('userId') !== null;
}

function saveUsers(userArray: User[]){
  localStorage.setItem("users", JSON.stringify(userArray));
}

function getUsers(): User[] {
  const storedUsers = localStorage.getItem("users");
  let parsedStoredUsers;

  if (storedUsers) {
    parsedStoredUsers = JSON.parse(storedUsers);
  } else {
    parsedStoredUsers = [];
  }

  return parsedStoredUsers as User[];
}

