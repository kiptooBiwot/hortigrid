<script setup>
import { useGeneralStore } from '@/stores/general.js'

const route = useRoute()
const generalStore = useGeneralStore()

const service = ref(null)
const hero = ref({
  image: '',
  title: 'Our Solutions',
  // description:
  //   'Cultivating growth from the ground up with reliable sourcing and supply of planting material for cultivation with confidence and efficiency',
  showButton: false,
  height: 'three-quarters',
  toUrl: '/',
})

onMounted(() => {
  const filteredService = generalStore.services.find((singleService) => {
    return singleService.url === `/services/${route.params.slug}`
  })

  service.value = filteredService
  hero.value.image = filteredService.imageUrl
})
</script>

<template>
  <div v-if="service" class="w-full min-h-screen">
    <HomeHero :hero-details="hero" />

    <div class="max-w-6xl mx-5 lg:mx-auto pt-10">
      <h2 class="text-4xl md:text-7xl font-normal text-horti-green-900">
        {{ service.title }}
      </h2>
    </div>
    <div class="max-w-6xl mx-5 lg:mx-auto py-10 block md:flex gap-5">
      <div class="w-full md:w-1/2 mb-10 md:mb-0">
        <img
          :src="service.imageUrl"
          alt=""
          class="w-full h-auto object-cover rounded-lg"
        />
      </div>
      <div class="w-full md:w-1/2">
        <p class="leading-7">{{ service.description }}</p>
      </div>
    </div>
  </div>
  <div v-else>
    <h4>Loading...</h4>
  </div>
</template>

<style lang="scss" scoped></style>
