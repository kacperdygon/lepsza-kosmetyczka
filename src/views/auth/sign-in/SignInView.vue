<script setup lang="ts">
import "../auth.css"
import {computed, reactive, ref} from "vue";
import {login} from "@/api/auth.ts";
import {useRouter} from "vue-router";
import {isUserAdmin, isUserClient, isUserEmployee, isUserLoggedIn} from "@/api/users.ts";



const showPassword = ref<boolean>(false)

const formData = reactive({
  email: "",
  password: "",
})

const signUpMessage = reactive({
  message: "",
  color: "red",
});

const signUpMessageColor = computed(() => {
  return signUpMessage.color;
})

const router = useRouter();

if (isUserLoggedIn()){
  if (isUserClient()){
    router.push("/client")
  } else if (isUserEmployee()) {
    router.push("/employee")
  } else if (isUserAdmin()) {
    router.push("/admin-panel")
  }
}

function handleSubmit() {

  if (formData.email === "" || formData.password === "") {
    signUpMessage.message = "Musisz wypełnić wszystkie pola";
    return;
  }

  const statusCode = login(formData.email, formData.password);
  if (statusCode === 401) {
    signUpMessage.color = "red";
    signUpMessage.message = "Niepoprawny email lub hasło";
  } else if (statusCode === 200) {
    signUpMessage.color = "green";
    signUpMessage.message = "Zalogowano pomyślnie!";
    router.push("/");
  }
}

</script>

<template>
  <div class="auth-div">
    <form
@submit.prevent="handleSubmit"
      >
      <h1>Zaloguj się do Kosmetyczki</h1>

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
        placeholder="hasło"
          :type="showPassword ? 'text' : 'password'"
          v-model="formData.password"
          required
        />
      </label>
      <label>
        <input
          type="checkbox"
          v-model="showPassword"
        />
        &nbsp;Pokaż hasło
      </label>
      <p class="sign-up-message">{{signUpMessage.message}}</p>
      <p>
        Nie masz jeszcze konta? <RouterLink to="/sign-up">Zarejestruj się</RouterLink>
      </p>
      <p>
        Zapomniałeś hasła? <RouterLink to="/password-reset">Zresetuj hasło</RouterLink>
      </p>
      <input type="submit" value="Zaloguj się" class="submit-button" />
    </form>
  </div>
</template>

<style scoped>
@import "../auth.css";
.sign-up-message{
  color: v-bind(signUpMessageColor)
}
</style>
