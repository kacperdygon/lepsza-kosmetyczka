<script setup lang="ts">

import {logOut} from "@/api/auth.ts";
import {useRouter} from "vue-router";
import {getVisitsOfClient, getVisitsOfEmployee} from "@/api/visits.ts";

const router = useRouter();
const visits = getVisitsOfEmployee()
</script>

<template>
  <section>
    <button @click="logOut(router)" class="log-out-button primary-button">Wyloguj się</button>
    <h3>Nadchodzące zabiegi</h3>
    <ul>
      <li v-for="visit in visits" :key="visit.id">
        <h3>Zabieg: {{visit.treatmentTitle}}</h3>
        <p>Imię klienta: {{visit.name}}</p>
        <p>Email klienta: {{visit.email}}</p>
        <p>Numer telefonu: {{visit.phone}}</p>
        <p>Data: {{visit.date}}</p>
        <p>Godzina: {{visit.time}}</p>
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
