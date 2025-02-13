
import Cookies from 'js-cookie'
import { getUsersBare, saveUsers, type User, UserType} from "@/api/users.ts";
import {useRouter} from "vue-router";


export function login(email: string, password: string): number {

  const userArray = getUsersBare();

  const user = userArray.find(user => user.email === email && user.password === password);

  if (!user) {
    return 401
  } else {
    Cookies.set('userId', user.id.toString());
    return 200
  }

}

export function register(email: string, password: string): number {

  const userArray = getUsersBare();

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
    userType: nextId == 0 ? UserType.Admin : UserType.Client,
  }

  if (userArray.some((user) => user.email === email)) {
    return 409;
  }

  userArray.push(newUser);
  saveUsers(userArray);

  return 201;
}

export function logOut(router: ReturnType<typeof useRouter>) {
  Cookies.remove('userId');
  router.push('/').catch((error) => {
    console.error("Navigation error:", error);
  });
}


