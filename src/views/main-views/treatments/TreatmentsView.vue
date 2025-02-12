<script setup lang="ts">

import {getTreatments} from "@/api/treatments.ts";
import {onMounted} from "vue";

const treatments = getTreatments()

onMounted(() => {
  console.log(treatments)
})

</script>

<template>
  <div className="treatments">
    <h1>Dostępne zabiegi</h1>

    <div className="treatment-list">

      <div v-for="treatment in treatments" :key="treatment.id" class="treatment-element">
        <h2>
          <b>{{treatment.title}}</b>
        </h2>
        <p>{{treatment.description}}</p>
        <p>
          <b>Cena: </b>
          {{treatment.price.toFixed(2)}} zł
        </p>
        <RouterLink :to="{ name: 'book-now-id', params: { id: treatment.id } }" class="plain-button">
          Umawiam się
        </RouterLink>
      </div>

    </div>
  </div>
</template>

<style scoped>
.treatment-element {
  border: solid 2px;
  border-radius: 10px;
  padding: 1.33em;
  margin: 1em 0 1em 0;
}

.treatment-element p {
  font-size: 1.25em;
}

.treatment-list {
  width: 80%;
}

.treatments {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3em 0 3em 0;
}

.treatment-list a {
  font-size: 1.5em;
}

</style>
