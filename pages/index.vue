<script setup>
const hero = {
  // image: '/images/hero_img_1.jpg',
  image: '/images/hero_img.jpg',
  title: 'Horti Grid',
  subHeading: 'Your Agribusiness Solutions Partner!',
  description:
    "Explore our crop production and consultancy services dedicated to niche horticultural value chains. We specialize in enterprise modeling, agronomic support, and capacity building, ensuring profitability for farmers and investors. Let's grow success together!",
  showButton: true,
  height: 'full',
}
</script>

<template>
  <section class="">
    <HomeHero :hero-details="hero" />
  </section>
  <section>
    <HomeSolutions />
  </section>
</template>
