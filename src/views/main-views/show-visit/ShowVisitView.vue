<script setup lang="ts">

import {useRoute, useRouter} from "vue-router";
import {deleteVisit, getVisitById, type Visit} from "@/api/visits.ts";
import {getTreatmentById} from "@/api/treatments.ts";
import {getEmployeeById} from "@/api/employees.ts";

const route = useRoute();
const router = useRouter();
const visitId = Number(route.params.id);

const visit: Visit = getVisitById(visitId);

const treatment = getTreatmentById(visit.treatmentId);
const employee = getEmployeeById(visit.employeeId);

function handleDeleteVisit(){
  deleteVisit(visitId);
  router.push(`/client`)
}

</script>

<template>
  <section>
    <h2>Wizyta</h2>
    <p>Imię i nazwisko: {{visit.name}}</p>
    <p>Email: {{visit.email}}</p>
    <p>Telefon: {{visit.phone}}</p>
    <p>Pracownik: {{employee.username}}</p>
    <p>Zabieg: {{treatment.title}}</p>
    <p>Data: {{visit.date}}</p>
    <p>Godzina: {{visit.time}}</p>
    <button @click="handleDeleteVisit" class="primary-button">Odwołaj wizytę</button>
  </section>


</template>

<style scoped>
h2{
  margin-top: 0;
}
section{
  padding:30px;
}
</style>
