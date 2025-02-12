<script setup lang="ts">
import Navbar from "@/layout/Navbar.vue";


</script>

<template>
  <div>
    <header>
            <Navbar />
    </header>
    <main>
      <slot/>
    </main>
    <footer>
      <h3>Kosmetyczka</h3>
      <div class="contactDetails">
        <RouterLink to="mailto:kosmetyczka@kosmetyczka.com">
          kosmetyczka@kosmetyczka.com
        </RouterLink>
        <RouterLink to="tel:+48 854 122 960">+48 854 122 960</RouterLink>
        <RouterLink to="https://www.google.com/maps/place/Augustowska+4,+85-808+Bydgoszcz/@53.1026462,18.0402476,21z/data=!4m15!1m8!3m7!1s0x47031386764ebd6f:0xe49ee48c4b65f30e!2sBydgoszcz!3b1!8m2!3d53.1234804!4d18.0084378!16zL20vMGp3enA!3m5!1s0x4703147de910f61d:0xdd120a98ff61f31b!8m2!3d53.1026082!4d18.0402211!16s%2Fg%2F11c4rv6rh0?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D">
          ul. Augustowska 4 85-866 Bydgoszcz, Poland
        </RouterLink>
      </div>
      <div class="footer-nav">
        <RouterLink to="/about-us">O nas</RouterLink>
        <RouterLink to="/treatments">Zabiegi</RouterLink>
        <RouterLink to="/gallery">Galeria</RouterLink>
        <RouterLink to="/book-now">Umów się</RouterLink>
      </div>
      <div class="allRightsReserved">
        <p>Copyright by Kosmetyczka</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
footer {
  background-color: #3a144b;
  color: white;
  padding-top: 10px;
  padding-bottom: 10px;
}

footer > * {
  display: flex;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 10px;
}

footer h3 {
  font-weight: 900;
  font-size: 150%;
}

footer > * > * {
  margin-left: 15px;
  margin-right: 15px;
}

footer .allRightsReserved {
  color: #ffffff88;
}

header {
  background-color: white;
  border-bottom: solid 3px #8c61a0;
}

header > * {
  width: 70%;
  margin: auto;
}

main {
  width: 60%;
  background-color: white;
  margin: auto;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.33);
}

a {
color: white;
  text-decoration: none;
}

</style>
