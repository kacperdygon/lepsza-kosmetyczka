
import Cookies from 'js-cookie'
import {getUsers, saveUsers, type User, UserType} from "@/api/users.ts";


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

export function register(email: string, password: string): number {

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
    userType: UserType.Client,
  }

  if (userArray.some((user) => user.email === email)) {
    return 409;
  }

  userArray.push(newUser);
  saveUsers(userArray);

  return 201;
}



