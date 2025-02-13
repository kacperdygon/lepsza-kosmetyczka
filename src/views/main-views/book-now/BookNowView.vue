<script setup lang="ts">
import { getTreatments } from "@/api/treatments.ts";
import { getEmployees } from "@/api/employees.ts";
import {addVisit, getVisits} from "@/api/visits.ts";
import { useRoute } from "vue-router";
import {reactive, computed, ref} from "vue";
import { AvaibleTimes } from "@/api/visits.ts";
import {getClientData} from "@/api/clientData.ts";

const treatments = getTreatments();
const employees = getEmployees();
const visits = getVisits(); // Pobieramy wszystkie wizyty

const route = useRoute();
const treatmentId = route.params.id ? Number(route.params.id) : 0; // Parsowanie ID

const clientData = getClientData();

const formData = reactive({
  name: clientData ? clientData.name : "",
  email: clientData ? clientData.email : "",
  phone: clientData ? clientData.phone : "",
  employeeId: 0,
  treatmentId: treatmentId,
  date: "",
  time: "" as unknown as AvaibleTimes,
  additionalComments: "",
});

const message = ref('');

const availableTimes = computed(() => {
  if (!formData.date || !formData.employeeId) {
    return Object.values(AvaibleTimes).filter((time) => isNaN(Number(time)));
  }

  const bookedTimes = visits
    .filter((visit) => visit.date === formData.date && visit.employeeId === formData.employeeId)
    .map((visit) => visit.time);

  return Object.values(AvaibleTimes)
    .filter((time) => isNaN(Number(time)))
    .filter((time) => !bookedTimes.includes(time));
});


const submitForm = () => {
  console.log("Form submitted:", formData);
  addVisit(formData.name, formData.email, formData.phone, formData.employeeId, formData.treatmentId, formData.date, formData.time, formData.additionalComments);
  message.value = "Umówiono zabieg!";
};


</script>

<template>
  <div>
    <section class="appointment-hero">
      <div class="appointment-hero-content">
        <h1>Umów się na wizytę</h1>
        <p>Zarezerwuj termin w naszym salonie w dogodnym dla Ciebie czasie.</p>
      </div>
    </section>

    <section class="appointment-form">
      <h2>Formularz wizyty</h2>
      <form class="form-container" @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">Imię i nazwisko:</label>
          <input type="text" id="name" v-model="formData.name" required />
        </div>

        <div class="form-group">
          <label for="email">Adres e-mail:</label>
          <input type="email" id="email" v-model="formData.email" required />
        </div>

        <div class="form-group">
          <label for="phone">Numer telefonu:</label>
          <input type="tel" id="phone" v-model="formData.phone" required />
        </div>

        <div class="form-group">
          <label for="employee">Wybierz pracownika:</label>
          <select id="employee" v-model="formData.employeeId" required>
            <option value="" disabled>Wybierz z listy...</option>
            <option v-for="employee in employees" :key="employee.id" :value="employee.id">
              {{ employee.username }}
            </option>
          </select>
        </div>

        <div class="form-group">
          <label for="service">Wybierz zabieg:</label>
          <select id="service" v-model="formData.treatmentId" required>
            <option value="" disabled>Wybierz z listy...</option>
            <option v-for="treatment in treatments" :key="treatment.id" :value="treatment.id">
              {{ treatment.title }}
            </option>
          </select>
        </div>

        <div class="form-group">
          <label for="date">Data wizyty:</label>
          <input type="date" id="date" v-model="formData.date" required />
        </div>

        <div class="form-group">
          <label for="time">Godzina wizyty:</label>
          <select id="time" v-model="formData.time" required>
            <option value="" disabled>Wybierz godzinę...</option>
            <option v-for="hour in availableTimes" :key="hour" :value="hour">
              {{ hour }}
            </option>
          </select>
        </div>

        <div class="form-group">
          <label for="notes">Dodatkowe uwagi (opcjonalne):</label>
          <textarea id="notes" v-model="formData.additionalComments" placeholder="Czy masz jakieś szczególne wymagania?"></textarea>
        </div>

        <button type="submit" class="btn-submit primary-button">Zarezerwuj termin</button>

        <p class="add-message">{{message}}</p>

      </form>
    </section>
  </div>
</template>

<style scoped>
.add-message {
  color:green;
}

.appointment-hero {
  background-color: var(--foreground);
  text-align: center;
  padding: 60px 20px 0;
}

.appointment-hero h1 {
  font-size: 3rem;
  margin-bottom: 10px;
}

.appointment-hero p {
  font-size: 1.2rem;
}

.appointment-form {
  padding: 40px 20px;
  background-color: var(--foreground);
  text-align: center;
}

.appointment-form h2 {
  font-size: 2rem;
  margin-bottom: 20px;
}

.form-container {
  width: 700px;
  margin: 0 auto;
  background-color: var(--foreground);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 15px;
  text-align: left;
}

.form-group label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.form-group textarea {
  resize: vertical;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--font-color);
}

.btn-submit {
  display: inline-block;
  padding: 10px 20px;
  font-size: 1.1rem;
  background-color: var(--font-color);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  margin-top: 10px;
}

.btn-submit:hover {
  background-color: #5c2b61;
}

input,
textarea {
  box-sizing: border-box;
}
</style>
