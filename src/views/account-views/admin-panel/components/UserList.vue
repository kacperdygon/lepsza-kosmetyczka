<script setup lang="ts">
import {changeUserName, getUsers, UserType} from "@/api/users.ts";
import {changeToEmployee, removeEmployee} from "@/api/employees.ts";
import {reactive, ref} from "vue";

const users = ref(getUsers());

const dialogRef = ref<HTMLDialogElement | null>(null);

let modifiedUserId: number;

function handleOpenDialog(id: number) {
  dialogRef.value?.showModal();
  modifiedUserId = id;
}



const formData = reactive({
  name: ''
})

function handleChangeName(){
  changeUserName(modifiedUserId, formData.name);
  reloadUsers();
  dialogRef.value?.close();
}

function handleChangeToEmployee(id: number) {
  changeToEmployee(id);
  reloadUsers();
}

function handleRemoveEmployee(id: number) {
  removeEmployee(id);
  reloadUsers();
}

function reloadUsers() {
  users.value = getUsers();
}

</script>

<template>
  <section class="treatments-section">
    <h3>
      Konta użytkowników
    </h3>
    <ul>
      <li v-for="user in users" :key="user.id">
        <div class="name-div"><h3>{{user.username}}</h3> <button @click="handleOpenDialog(user.id)">zmień nazwę</button></div>
        <p>{{user.email}}</p>
        <p v-if="user.userType == UserType.Employee" class="employee-sign">Pracownik</p>
        <button v-if="user.userType != UserType.Employee" @click="handleChangeToEmployee(user.id)">Zmień na pracownika</button>
        <button v-else @click="handleRemoveEmployee(user.id)">Usuń pracownika</button>
      </li>
    </ul>

    <Teleport to="body">
      <dialog ref="dialogRef">
        <form @submit.prevent="handleChangeName">
          Nowa nazwa <input type="text" v-model="formData.name" required/>
          <input type="submit" value="Dodaj zabieg">
        </form>
      </dialog>
    </Teleport>

  </section>
</template>

<style scoped>
@import '../adminGlobal.css';

.employee-sign {
  color:red;
}

.name-div{
  display:flex;
  align-items: center;
}

.name-div button {
  margin-left: 20px;
  width:fit-content;
}

li{
  width:500px;
}

</style>
