<template>
  <section class="about-hero">
    <div class="about-hero-content">
      <h1>O nas</h1>
      <p>
        Witamy w salonie &#34;Kosmetyczka&#34; – miejscu, gdzie piękno
        spotyka profesjonalizm.
      </p>
    </div>
  </section>

  <section class="about-team">
    <h2>Poznaj nasz zespół</h2>
    <div class="team-grid">
      <div class="team-member">
        <img src="https://socialpress.pl/wp-content/uploads/2020/01/shutterstock_1158137110-1-1200x900.jpg" alt="Anna Nowak – Kosmetolog" />
        <div class="team-member-info">
          <h3>Anna Nowak</h3>
          <p>
            Kosmetolog z ponad 10-letnim doświadczeniem, specjalizująca się w
            pielęgnacji skóry twarzy.
          </p>
        </div>

      </div>
      <div class="team-member">
        <img src="https://d-art.ppstatic.pl/kadry/k/r/1/c2/9b/5301e41851a21_o_medium.jpg" alt="Katarzyna Kowalska – Stylistka paznokci" />
        <h3>Katarzyna Kowalska</h3>
        <p>
          Stylistka paznokci, której kreatywne wzory zachwycają każdą
          klientkę.
        </p>
      </div>
      <div class="team-member">
        <img src="https://www.butcherspetcare.com/wp-content/uploads/2023/11/frederic-christian-3nOlkfHl3CM-unsplash.jpg" alt="Ewa Wiśniewska – Makijażystka" />
        <h3>Ewa Wiśniewska</h3>
        <p>
          Makijażystka z pasją do tworzenia perfekcyjnych stylizacji na
          każdą okazję.
        </p>
      </div>
    </div>
  </section>

  <section class="about-values">
    <h2>Nasze wartości</h2>
    <ul>
      <li>
        <strong>Profesjonalizm:</strong> Każdy zabieg wykonywany jest z
        najwyższą starannością.
      </li>
      <li>
        <strong>Indywidualne podejście:</strong> Każda klientka to wyjątkowa
        historia.
      </li>
      <li>
        <strong>Innowacyjność:</strong> Pracujemy z najnowszymi
        technologiami i produktami.
      </li>
      <li>
        <strong>Relaks:</strong> Stawiamy na atmosferę, w której możesz się
        odprężyć.
      </li>
    </ul>
  </section>
</template>

<style>
.about-hero {
  background-color: var(--foreground);
  text-align: center;
  padding: 60px 20px;
}

.about-hero h1 {
  font-size: 3rem;
  margin-bottom: 10px;
}

.about-hero p {
  font-size: 1.2rem;
}

.about-team {
  padding: 40px 20px;
  background-color: var(--background);
  text-align: center;
}

.about-team h2 {
  font-size: 2rem;
  margin-bottom: 20px;
}

.team-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.team-member {
  background-color: var(--foreground);
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 250px;
  text-align: center;
}

.team-member img {
  width: 100%;
  height: auto;
  border-radius: 8px 8px 0 0;
  height:200px;
  object-fit:cover;
}

.team-member-info {
  padding: 20px;
}

.team-member h3 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.team-member p {
  font-size: 1rem;
}

.about-values {
  padding: 40px 20px;
  background-color: var(--background);
  text-align: center;
}

.about-values h2 {
  font-size: 2rem;
  margin-bottom: 20px;
}

.about-values ul {
  list-style: none;
  padding: 0;
}

.about-values li {
  font-size: 1.1rem;
  margin: 10px 0;
}

.about-values li strong {
  color: var(--font-color);
}

</style>
<script setup lang="ts">
</script>
