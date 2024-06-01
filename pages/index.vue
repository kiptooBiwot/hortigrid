<script setup>
const hero = {
  image: '/images/hero_img_1.jpg',
  title: 'Horti Grid',
  description:
    "Our expert team delivers affordable consultation, extension, and agribusiness management packages, fostering growth for farmers and investors alike. Let's cultivate your success together!",
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
