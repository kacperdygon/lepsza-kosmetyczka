<script setup lang="ts">

import {logOut} from "@/api/auth.ts";
import {useRouter} from "vue-router";
import {getVisitsOfClient} from "@/api/visits.ts";
import {reactive} from "vue";
import {getClientData, setClientData} from "@/api/clientData.ts";

const router = useRouter();
const visits = getVisitsOfClient()

const clientData = getClientData();

const formData = reactive({
  name: clientData ? clientData.name : '',
  email: clientData ? clientData.email : '',
  phone: clientData ? clientData.phone : ''
})

function handleSubmit(){
  setClientData(formData.name, formData.email, formData.phone);
}
</script>

<template>
  <section><button @click="logOut(router)" class="log-out-button primary-button">Wyloguj się</button></section>

  <section class="client-data">
    <h3>Twoje dane</h3>
    <form @submit.prevent="handleSubmit">
      Imię i nazwisko: <input type="text" v-model="formData.name">
      Email: <input type="email" v-model="formData.email">
      Numer telefonu: <input type="tel" v-model="formData.phone">
      <input type="submit" value="Zapisz dane" class="primary-button">
    </form>
  </section>
  <section>

    <h3>Nadchodzące zabiegi</h3>
    <ul>
      <li v-for="visit in visits" :key="visit.id">
        <h3>Zabieg: {{visit.treatmentTitle}}</h3>
        <p>Pracownik: {{visit.employeeName}}</p>
        <p>Data: {{visit.date}}</p>
        <p>Godzina: {{visit.time}}</p>
        <RouterLink :to="{ name: 'show-visit', params: { id: visit.id } }">Pokaż szczegóły</RouterLink>
      </li>
    </ul>
  </section>
</template>

<style scoped>
li{
  text-align: left;
  list-style: none;
  padding:20px;
  margin: 0 0 10px;

  border:2px var(--font-color ) solid;
  border-radius: 5px;
  width:800px;
  max-width:40vw;

}
ul{
  padding:0;
}

section{
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left:20px;
}
</style>
