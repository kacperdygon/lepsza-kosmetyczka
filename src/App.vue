<script setup lang="ts">
import { RouterView } from 'vue-router'
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import DefaultLayout from '@/layout/DefaultLayout.vue';

const route = useRoute();

const noWrapperRoutes = ['sign-in', 'sign-up'];

const layout = computed(() => {
  return noWrapperRoutes.includes(route.name?.toString() || '') ? 'div' : DefaultLayout;
});

console.log('Current route name:', route.name); // 🔍 Sprawdź w konsoli

</script>

<template>

  <component :is="layout">
  <RouterView />

  </component>

</template>

<style scoped>

</style>
