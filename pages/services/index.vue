<script setup>
const hero = {
  image: '/images/services/farmer-extension.jpg',
  title: 'Solutions We Offer',
  description:
    'We combine our extensive experience and new technologies designed by our team of Developers, Agriculture, and Agronomy experts to offer these services.',
  showButton: false,
  height: 'three-quarters',
  toUrl: '/',
}
</script>

<template>
  <div class="min-h-screen w-full">
    <!-- <HomeHero :hero-details="hero" /> -->
    <SwiperSlider :hero-details="hero" />
    <div class="max-w-6xl mx-5 lg:mx-auto">
      <Solutions />
    </div>
  </div>
</template>
