<script setup lang="ts">

</script>

<template>
  <section className="hero">
    <h1>Witaj w Kosmetyczce</h1>
    <p>Odkryj piękno i odprężenie w naszym salonie w sercu Bydgoszczy.</p>
  </section>

  <section className="services">
    <h2>Nasze Usługi</h2>
    <div className="service-list">
      <div className="service-card">
        <img src="https://etycznykosmetyczny.pl/wp-content/uploads/2022/10/piele%CC%A8gnacja-twarzy-nakladanie-maseczki.webp">
        <div>
          <h3>Pielęgnacja twarzy</h3>
          <p>Profesjonalne zabiegi regenerujące Twoją cerę.</p>
        </div>
      </div>
      <div className="service-card">
<img src="https://spabaltica.pl/wp-content/uploads/2020/03/Baltica-Wellness-Spa-manicure-i-pedicure-.jpg">
        <div>
          <h3>Manicure i pedicure</h3>
          <p>Piękne i zadbane paznokcie na każdą okazję.</p>
        </div>
      </div>
      <div className="service-card">
<img src="https://jolantakocurek.pl/wp-content/uploads/2021/10/kobieta.jpg">
        <div>
          <h3>Makijaż okolicznościowy</h3>
          <p>Perfekcyjny makijaż na każdą wyjątkową chwilę.</p>
        </div>
      </div>
    </div>
  </section>

  <section className="testimonials">
    <h2>Opinie klientów</h2>
    <blockquote>
      "Najlepszy salon w Bydgoszczy! Moja cera nigdy nie wyglądała lepiej."
    </blockquote>
    <blockquote>
      "Profesjonalna obsługa i relaksująca atmosfera."
    </blockquote>
    <blockquote>
      "Polecam wszystkim! Usługi na najwyższym poziomie."
    </blockquote>
  </section>

  <section className="about">
    <h2>O nas</h2>
    <p>
      Jesteśmy zespołem pasjonatek kosmetologii z wieloletnim
      doświadczeniem. Naszym celem jest podkreślanie naturalnego piękna
      każdej klientki.
    </p>
  </section>

  <section className="contact">
    <h2>Kontakt</h2>
    <p>
      Zadzwoń do nas: <strong>+48 854 122 960</strong>
    </p>
    <p>
      Odwiedź nas: <strong>ul. Augustowska 4 Bydgoszcz</strong>
    </p>
    <iframe
      className="map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2381.0024389754624!2d18.099788716027325!3d53.11070907991317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470313c3b1b690c3%3A0x1b89134e6d3ed56c!2sAugustowska%204%2C%2085-866%20Bydgoszcz%2C%20Poland!5e0!3m2!1sen!2spl!4v1688664358493!5m2!1sen!2spl"
      allowFullScreen=""
      loading="lazy"
    ></iframe>
  </section>
</template>

<style scoped>
.hero {
  background-color: var(--foreground);
  padding: 60px 20px;
  text-align: center;
}

.hero h1 {
  font-size: 2.5rem;
}

.hero p {
  font-size: 1.2rem;
}

.services {
  padding: 40px 20px;
}

.services h2 {
  text-align: center;
  padding-bottom: 20px;
}

.service-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.service-card {
  background-color: var(--foreground);
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;

  text-align: center;
}

.service-card img {
  max-width: 100%;
  border-radius: 8px 8px 0 0;
  height: 300px;
}

.service-card div {
  padding: 20px;
}

.gallery {
  background-color: var(--foreground);
  padding: 40px 20px;
  text-align: center;
}

.gallery img {
  max-width: 100%;
  margin: 10px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.testimonials {
  background-color: var(--background);
  padding: 40px 20px;
  text-align: center;
}

.testimonials blockquote {
  font-style: italic;
  margin: 10px 0;
}

.about {
  padding: 40px 20px;
  text-align: center;
}

.contact {
  background-color: var(--foreground);
  padding: 40px 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.map {
  margin-top: 20px;
  width: 100%;
  max-width: 600px;
  height: 300px;
  border: 0;
  border-radius: 8px;
}

</style>
