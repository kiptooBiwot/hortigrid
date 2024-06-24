<script setup>
import { useGeneralStore } from '@/stores/general.js'

const route = useRoute()
const generalStore = useGeneralStore()

const product = ref('')
const hero = ref({
  image: '',
  title: 'Our Products',
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
  hero.value.image = filteredProduct.imageUrl
})
</script>

<template>
  <div class="w-full min-h-screen pb-20">
    <HomeHero :hero-details="hero" />

    <div class="max-w-3xl mx-5 lg:mx-auto py-10 space-y-5">
      <div class="">
        <h3 class="text-3xl font-bold">{{ product.title }}</h3>
        <h5>{{ product.subtitle }}</h5>
      </div>

      <div v-html="product.description" class="space-y-5 leading-7"></div>
    </div>
  </div>
</template>
