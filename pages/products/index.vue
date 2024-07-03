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
  <div class="min-h-screen bg-horti-green-100">
    <!-- <HomeHero :hero-details="hero" /> -->
    <SwiperSlider :hero-details="hero" />

    <div class="max-w-6xl lg:mx-auto mx-5 py-10">
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

      <div
        class="max-w-5xl mx-0 lg:mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10"
      >
        <div
          v-for="(product, index) in generalStore.products"
          :key="index"
          class="rounded-md shadow-sm space-y-1 bg-white"
        >
          <div>
            <img
              :src="product.imageUrl"
              alt=""
              class="w-full rounded-t-md object-cover h-[200px]"
            />
          </div>
          <div class="px-5 pb-6 space-y-4">
            <div class="space-y-3">
              <h3
                class="font-bold text-horti-green-900 text-[20px] md:text-[30px] font-heading hover:text-horti-green-900 transition duration-300 ease-in-out"
              >
                {{ product.title }}
              </h3>
              <p class="leading-6 text-sm">
                {{ product.subtitle }}
              </p>
            </div>
            <div class="">
              <NuxtLink
                :to="product.url"
                class="py-2 px-5 text-white bg-horti-green-900 shadow-sm text-sm rounded-md hover:bg-horti-green-700"
                >Read More</NuxtLink
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
