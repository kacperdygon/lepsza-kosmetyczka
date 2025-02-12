<script setup lang="ts">

import {addTreatment, deleteTreatment, getTreatments} from "@/api/treatments.ts";
import {reactive, ref} from "vue";

  const treatments = ref(getTreatments());

  const dialogRef = ref<HTMLDialogElement | null>(null);

  function handleOpenDialog() {
    dialogRef.value?.showModal();
  }

  function handleAddTreatment(): void {
    dialogRef.value?.close();
    addTreatment(formData.title, formData.description, formData.price);
    reloadTreatments()
  }

  function handleDeleteTreatment(id: number): void {
    deleteTreatment(id);
    reloadTreatments()
  }

  function reloadTreatments() {
    treatments.value = getTreatments();
  }

  const formData = reactive({
    title: '',
    description: '',
    price: 0,
  })

</script>

<template>
 <section class="treatments-section">
   <h3>
     Zabiegi
   </h3>
   <ul>
    <li v-for="treatment in treatments" :key="treatment.id">
      <h3>{{treatment.title}}</h3>
      <p>{{treatment.description}}</p>
      <p>{{treatment.price.toFixed(2)}} zł</p>
      <button @click="handleDeleteTreatment(treatment.id)">Usuń zabieg</button>
    </li>
   </ul>

   <button @click="handleOpenDialog">Dodaj zabieg</button>

   <Teleport to="body">
     <dialog ref="dialogRef">
       <form @submit.prevent="handleAddTreatment">
          Tytuł <input type="text" v-model="formData.title" required/>
         Opis <textarea v-model="formData.description" required/>
         Cena <input type="number" v-model="formData.price" required step="0.01"/>
         <input type="submit" value="Dodaj zabieg">
       </form>
     </dialog>
   </Teleport>
 </section>
</template>

<style scoped>
@import '../adminGlobal.css';

li{
  width: 800px;
}
</style>
