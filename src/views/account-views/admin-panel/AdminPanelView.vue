<script setup lang="ts">

import Treatments from "@/views/account-views/admin-panel/components/TreatmentList.vue";
import Users from "@/views/account-views/admin-panel/components/UserList.vue";
import {isUserAdmin} from "@/api/users.ts";
import {useRouter} from "vue-router";
import {logOut} from "@/api/auth.ts";

const router = useRouter();

if (!isUserAdmin()){
  router.push('/');
}

</script>

<template>
  <div className="admin-panel">
    <h1>Panel admina</h1>
    <button @click="logOut(router)" class="log-out-button primary-button">Wyloguj się</button>
    <Treatments/>
    <Users/>


  </div>
</template>

<style scoped>
.admin-panel {
  display: flex;
  flex-direction: column;
}

.admin-panel > div {
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1,
h2 {
  text-align: center;
  margin: 10px;
}

form {
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 1em;
}

label > * {
  margin: 5px;
}

input:not([type="submit"]) {
  border-bottom: var(--font-color) solid 2px;
}

textarea {
  border: var(--font-color) solid 2px;
  border-radius: 10px;
}

input,
textarea {
  margin: 10px;
  padding: 5px;
}

input:focus,
textarea:focus {
  outline: none;
}

input[type="submit"] {
  background-color: var(--button-color);
  border-radius: 10px;
  color: white;
  cursor: pointer;
  width: 30%;
  align-self: center;
  padding: 5px;
}

.admin-treatments-section div {
  width: 80%;
}

.admin-treatments-section {
  padding-bottom: 20px;
}

.admin-panel-list-element {
  border: solid 2px;
  border-radius: 10px;
  padding: 10px;
  margin: 10px 0 10px 0;
  width: 100%;
}

.admin-panel-list-element button {
  margin-right: 5px;
}

</style>
