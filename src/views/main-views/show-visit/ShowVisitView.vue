<script setup lang="ts">

import {useRoute} from "vue-router";
import {deleteVisit, getVisitById, type Visit} from "@/api/visits.ts";
import {getTreatmentById} from "@/api/treatments.ts";
import {getEmployeeById} from "@/api/employees.ts";

const router = useRoute();
const visitId = Number(router.params.id);

const visit: Visit = getVisitById(visitId);

const treatment = getTreatmentById(visit.treatmentId);
const employee = getEmployeeById(visit.employeeId);

function handleDeleteVisit(){
  deleteVisit(visitId);
}

</script>

<template>
<h2>Wizyta</h2>
  <p>Imię i nazwisko: {{visit.name}}</p>
  <p>Email: {{visit.email}}</p>
  <p>Telefon: {{visit.phone}}</p>
  <p>Pracownik: {{employee.username}}</p>
  <p>Zabieg: {{treatment.title}}</p>
  <p>Data: {{visit.date}}</p>
  <p>Godzina: {{visit.time}}</p>
  <button @click="handleDeleteVisit">Odwołaj wizytę</button>

</template>

<style scoped>

</style>
