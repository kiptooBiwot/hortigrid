<script setup>
const props = defineProps(['heroDetails'])
</script>

<template>
  <div
    class="bg-cover bg-center w-full flex items-center justify-center"
    :class="[heroDetails.height === 'full' ? 'h-screen' : 'h-[500px]']"
    :style="`background-image: url(${heroDetails.image})`"
  >
    <div
      class="absolute inset-0 bg-black bg-opacity-30"
      :class="[heroDetails.height === 'full' ? 'h-screen' : 'h-[500px]']"
    ></div>
    <div class="text-center text-white max-w-3xl mx-5 lg:mx-auto space-y-5 z-0">
      <h1 class="text-5xl md:text-8xl text-white font-normal mb-4">
        {{ heroDetails.title }}
      </h1>
      <p class="text-lg md:text-2xl font-body leading-relaxed">
        {{ heroDetails.description }}
      </p>

      <div class="py-5" :class="[heroDetails.showButton ? 'block' : 'hidden']">
        <NuxtLink
          to="/services"
          class="py-3 px-9 bg-horti-green-900 text-white rounded-md shadow-sm uppercase hover:shadow-lg hover:bg-horti-green-800 font-bold"
        >
          Learn More
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
