<script setup>
const team = reactive([
  { name: 'Patricia Lagat', role: 'Operations', image: '' },
  { name: 'Prof. Job K. Lagat', role: 'Agribusiness Development', image: '' },
  { name: 'Dr. Elly Kibet ', role: 'Strategy', image: '' },
  { name: 'Jeff', role: 'Consulting Agronomist', image: '' },
  { name: 'David Omeno', role: 'Farm Manager', image: '' },
  { name: 'Shadrach Yator', role: 'Water and Irrigation', image: '' },
  { name: 'Kiptoo Biwot', role: 'ICT Consultant', image: '' },
  { name: 'Annaline Korir', role: 'Communication', image: '' },
])
</script>

<template>
  <div>
    <Swiper
      :modules="[SwiperAutoplay, SwiperEffectCreative]"
      :slides-per-view="2"
      :space-between="50"
      :loop="true"
      :effect="'creative'"
      :autoplay="{
        delay: 8000,
        disableOnInteraction: true,
      }"
      :creative-effect="{
        prev: {
          shadow: false,
          translate: ['-20%', 0, -1],
        },
        next: {
          translate: ['100%', 0, 0],
        },
      }"
    >
      <SwiperSlide v-for="(persons, index) in team" :key="index">
        <!-- <AboutMeetTheTeam :team="persons" /> -->
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style scoped></style>
