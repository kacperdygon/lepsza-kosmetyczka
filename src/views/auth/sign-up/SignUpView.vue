<script setup lang="ts">

import {RouterLink} from "vue-router";

import {register} from "@/api/auth.ts";
import {computed, reactive} from "vue";

const formData = reactive({
  email: "",
  password: "",
  repeatPassword: "",
})

const signUpMessage = reactive({
  message: "",
  color: "red",
});

const signUpMessageColor = computed(() => {
  return signUpMessage.color;
})

function handleSubmit(): void {
  if (formData.email === "" || formData.password === "" || formData.repeatPassword === "") {
    signUpMessage.color = "red";
    signUpMessage.message = "Musisz wypełnić wszystkie pola";
    return;
  }
  if (formData.password !== formData.repeatPassword) {
    signUpMessage.color = "red";
    signUpMessage.message = "Hasła muszą być takie same";
    return;
  }


  const statusCode = register(formData.email, formData.password);

  if (statusCode == 409) {
    signUpMessage.color = "red";
    signUpMessage.message = "User already exists!"
  } else if (statusCode == 201) {
    signUpMessage.color = "green";
    signUpMessage.message = "User created"
  }
}

</script>

<template>
  <div class="auth-div">
    <form @submit.prevent="handleSubmit">
      <h1>Zarejestruj się w Kosmetyczce</h1>

      <label>
        <input
          class="login-input"
          type="text"
          placeholder="e-mail"
          v-model="formData.email"
          required
        />
      </label>
      <label>
        <input
          class="login-input"
          type="password"
          placeholder="hasło"
          v-model="formData.password"
          required
        />
      </label>
      <label>
        <input
          class="login-input"
          type="password"
          placeholder="powtórz hasło"
          v-model="formData.repeatPassword"
          required
        />
      </label>
      <p class="sign-up-message">
      {{signUpMessage.message}}

      </p>
      <p>
        Masz już konto? <RouterLink to="/sign-in">Zaloguj się</RouterLink>
      </p>
      <input
        type="submit"
        value="Zarejestruj się"
        class="submit-button"
      />
    </form>
  </div>
</template>

<style scoped>
@import "../auth.css";
.sign-up-message{
  color: v-bind(signUpMessageColor)
}
</style>
