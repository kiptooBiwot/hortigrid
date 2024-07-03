<script setup>
import { useGeneralStore } from '@/stores/general.js'

const route = useRoute()
const generalStore = useGeneralStore()

const product = ref(null)
const hero = ref({
  image: '/images/plateau-greens/plateau-greens (1).jpg',
  title: '',
  // description:
  //   'Cultivating growth from the ground up with reliable sourcing and supply of planting material for cultivation with confidence and efficiency',
  showButton: false,
  height: 'three-quarters',
  toUrl: '/',
})

onMounted(() => {
  const filteredProduct = generalStore.products.find((singleProduct) => {
    return singleProduct.url === `/products/${route.params.slug}`
  })

  product.value = filteredProduct
  // hero.value.image = filteredProduct.imageUrl
  hero.value.title = filteredProduct.title
})
</script>

<template>
  <div v-if="product" class="w-full min-h-screen">
    <HomeHero :hero-details="hero" />

    <div class="max-w-6xl mx-5 lg:mx-auto pt-10">
      <h2 class="text-4xl md:text-7xl font-normal text-horti-green-900">
        {{ product.title }}
      </h2>
      <h5>{{ product.subtitle }}</h5>
    </div>
    <div class="max-w-6xl mx-5 lg:mx-auto py-10 block md:flex gap-5">
      <div class="w-full md:w-1/2 mb-10 md:mb-0">
        <img
          :src="product.imageUrl"
          alt=""
          class="w-full h-auto object-cover rounded-lg"
        />
      </div>
      <div
        v-html="product.description"
        class="w-full md:w-1/2 space-y-5 leading-7"
      ></div>
    </div>
  </div>
  <div v-else>
    <h4>Loading...</h4>
  </div>
  <!-- <div v-if="product" class="w-full min-h-screen">

    <div class="max-w-2xl mx-5 lg:mx-auto py-10 space-y-5">
      <div class="">
        <h3 class="text-3xl font-bold">{{ product.title }}</h3>
        <h5>{{ product.subtitle }}</h5>
      </div>

      <div v-html="product.description" class="space-y-5 leading-7"></div>
    </div>
  </div>
  <div v-else class="min-h-screen flex justify-center items-center">
    <h2 class="text-gray-400 text-2xl mg:text-5xl animate-pulse">Loading...</h2>
  </div> -->
  <!-- <div v-else class="min-h-screen flex items-center justify-center">
    <h4 class="animate-pulse text-3xl md:5xl">Loading...</h4>
  </div> -->
</template>

<style lang="scss" scoped></style>

<!-- <script setup>
import { useGeneralStore } from '@/stores/general.js'

const generalStore = useGeneralStore()
const route = useRoute()

const product = ref(null)

onMounted(() => {
  const filteredProduct = generalStore.products.find((prod) => {
    return prod.url === `/products/${route.params.slug}`
  })

  product.value = filteredProduct

  console.log('PRODUCT', product.value.imageUrl)
})
</script>

<template>
  <div v-if="product" class="w-full min-h-screen pb-20">-->
<!-- <HomeHero :hero-details="hero" /> -->
<!-- <div
      class="bg-cover bg-center w-full flex items-center justify-center h-[500px]"
      :style="`background-image: url(${product.imageUrl})`"
    ></div>

    <div class="max-w-2xl mx-5 lg:mx-auto py-10 space-y-5">
      {{ product.imageUrl }}
      <div class="">
        <h3 class="text-3xl font-bold">{{ product.title }}</h3>
        <h5>{{ product.subtitle }}</h5>
      </div>

      <div v-html="product.description" class="space-y-5 leading-7"></div>
    </div>
  </div>
  <div v-else class="min-h-screen flex justify-center items-center">
    <h2 class="text-gray-400 text-2xl mg:text-5xl animate-pulse">Loading...</h2>
  </div>
</template> -->
