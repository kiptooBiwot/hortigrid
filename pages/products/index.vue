<script setup>
import { useGeneralStore } from '@/stores/general.js'

const generalStore = useGeneralStore()

const hero = {
  image: '/images/products/products.jpg',
  title: 'Agri-Enterprise Planning',
  description:
    'We offer tailored services to optimize productivity, profitability, and sustainability',
  showButton: false,
  height: 'three-quarters',
  toUrl: '/',
}
</script>
<template>
  <div class="min-h-screen">
    <HomeHero :hero-details="hero" />

    <div class="max-w-2xl lg:mx-auto mx-5 py-10">
      <div class="flex items-center gap-5 pb-10">
        <div class="hidden md:flex items-center">
          <Icon name="wpf:record" class="w-5 h-5 text-gray-500 mr-3" />
          <Icon name="wpf:record" class="w-10 h-10 text-gray-800" />
        </div>
        <h1
          class="text-[35px] mx-auto md:mx-0 md:text-6xl lg:text-7xl font-normal text-horti-green-900"
        >
          Our Products
        </h1>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
        <div
          v-for="(product, index) in generalStore.products"
          :key="index"
          class="p-5 rounded-md shadow-md space-y-5"
        >
          <div>
            <h3 class="text-xl font-bold font-heading">{{ product.title }}</h3>
            <p class="text-sm">{{ product.subtitle }}</p>
          </div>
          <div>
            <NuxtLink
              :to="product.url"
              class="py-2 px-5 text-white bg-horti-green-900 shadow-sm text-sm rounded-md"
              >Read More</NuxtLink
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
