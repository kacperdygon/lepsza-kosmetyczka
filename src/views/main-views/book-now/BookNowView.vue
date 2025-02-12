<script setup lang="ts">

import {getTreatments} from "@/api/treatments.ts";
import {getEmployees} from "@/api/employees.ts";

const treatments = getTreatments();
const employees = getEmployees();

</script>

<template>
  <div>
    <section class="appointment-hero">
      <div class="appointment-hero-content">
        <h1>Umów się na wizytę</h1>
        <p>
          Zarezerwuj termin w naszym salonie w dogodnym dla Ciebie czasie.
        </p>
      </div>
    </section>

    <section class="appointment-form">
      <h2>Formularz rezerwacji</h2>
      <form class="form-container">
        <div class="form-group">
          <label for="name">Imię i nazwisko:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Twoje imię i nazwisko"
            value=""
          required
          />
        </div>
        <div class="form-group">
          <label for="email">Adres e-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Twój adres e-mail"
            value=""
          required
          />
        </div>
        <div class="form-group">
          <label for="phone">Numer telefonu:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Twój numer telefonu"
            value=""
          required
          />
        </div>
        <div class="form-group">
          <label for="service">Wybierz pracownika:</label>
          <select
            defaultValue="DEFAULT"
            id="service"
            name="service"
            value="Wybierz..."
            required
          >
            <option value="DEFAULT" disabled>Wybierz z listy...</option>
            <option v-for="employee in employees" :key="employee.id" :value="employee.id">{{employee.username}}</option>
          </select>
        </div>
        <div class="form-group">
          <label for="service">Wybierz zabieg:</label>
          <select
            defaultValue="DEFAULT"
            id="service"
            name="service"
            value="Wybierz..."
          required
          >
          <option value="DEFAULT" disabled>Wybierz z listy...</option>
            <option v-for="treatment in treatments" :key="treatment.id" :value="treatment.id">{{treatment.title}}</option>
          </select>
        </div>
        <div class="form-group">
          <label for="date">Data wizyty:</label>
          <input
            type="date"
            id="date"
            name="date"
          required
          />
        </div>
        <div class="form-group">
          <label for="time">Godzina wizyty:</label>
          <select
            id="time"
            name="time"
          required
          >
          <option value="DEFAULT" disabled>Wybierz godzinę...</option>

          </select>
        </div>
        <div class="form-group">
          <label for="notes">Dodatkowe uwagi (opcjonalne):</label>
          <textarea
            id="notes"
            name="notes"
            placeholder="Czy masz jakieś szczególne wymagania?"
          />
          </div>
          <button type="submit" class="btn-submit primary-button">Zarezerwuj termin</button>

          </form>
          </section>


          </div>
</template>

<style scoped>
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
  width:700px;
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

input, textarea {
  box-sizing: border-box;
}

</style>
