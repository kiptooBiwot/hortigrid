<script setup>
const hero = {
  image: '/images/portfolio/planting.jpg',
  title: 'Planting Material',
  description:
    'Cultivating growth from the ground up with reliable sourcing and supply of planting material for cultivation with confidence and efficiency',
  showButton: false,
  height: 'three-quarters',
  toUrl: '/',
}
</script>

<template>
  <div class="w-full min-h-screen">
    <HomeHero :hero-details="hero" />

    <div class="max-w-6xl mx-5 lg:mx-auto py-10">
      <section>
        <AboutRecentProjects />
      </section>
    </div>
  </div>
</template>
