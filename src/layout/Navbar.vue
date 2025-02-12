<script setup lang="ts">

</script>

<template>
  <nav className="navbar">
    <RouterLink to="/" class="nav-logo primary-button">
      Kosmetyczka
    </RouterLink>
    <RouterLink to="/about-us">O nas</RouterLink>
    <RouterLink to="/treatments">Zabiegi</RouterLink>
    <RouterLink to="/gallery">Galeria</RouterLink>
    <RouterLink to="/book-now" class="book-now-button primary-button">
      Umów się
    </RouterLink>
    <RouterLink to="/auth/login">
      <Image src={personIcon} alt="person icon" />
    </RouterLink>
  </nav>
</template>

<style scoped>
.nav-logo {
  padding: 15px;
}

.navbar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 15px 0 15px 0;
}

.navbar > * {
  max-height: 200px;
  font-size: 150%;
}

.navbar img {
  max-height: 80px;
  max-width: 100px;
}

a {
  color: white;
  text-decoration: none;
}

a:not(.primary-button){
  color: var(--font-color);
}

</style>
