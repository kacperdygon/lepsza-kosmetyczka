import {getUsers, saveUsers, UserType} from "@/api/users.ts";

export function getEmployees() {
  const users = getUsers();
  return users.filter((user) => user.userType == UserType.Employee);
}

export function changeToEmployee(id: number) {
  const users = getUsers();

  const userIndex = users.findIndex(user => user.id === id);

  users[userIndex].userType = UserType.Employee;

  saveUsers(users);

}

export function removeEmployee(id: number) {
  const users = getUsers();

  const userIndex = users.findIndex(user => user.id === id);

  users[userIndex].userType = UserType.Client;

  saveUsers(users);
}
