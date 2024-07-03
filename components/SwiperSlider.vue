<script setup>
import { useGeneralStore } from '@/stores/general.js'

const generalStore = useGeneralStore()
</script>

<template>
  <div v-if="generalStore.heroItems" class="h-[500px]">
    <Swiper
      :modules="[
        SwiperAutoplay,
        SwiperEffectCreative,
        SwiperEffectFade,
        SwiperPagination,
        SwiperNavigation,
      ]"
      :slides-per-view="1"
      :loop="true"
      :effect="'creative'"
      :navigation="true"
      :pagination="false"
      :autoplay="{
        delay: 5000,
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
      <SwiperSlide
        v-for="(item, index) in generalStore.heroItems"
        :key="index"
        class="min-h-screen"
      >
        <div
          class="bg-cover bg-center w-full flex items-center justify-center"
          :class="[item.height === 'full' ? 'h-screen' : 'h-[500px]']"
          :style="`background-image: url(${item.image})`"
        >
          <div
            class="absolute inset-0 bg-black bg-opacity-40"
            :class="[item.height === 'full' ? 'h-screen' : 'h-[500px]']"
          ></div>
          <div
            class="text-center text-white max-w-3xl mx-5 lg:mx-auto space-y-5 z-0"
          >
            <div class="mb-4">
              <h1 class="text-5xl md:text-8xl text-white font-normal mb-1">
                {{ item.title }}
              </h1>
              <p v-if="item.subHeading" class="text-base font-heading italic">
                {{ item.subHeading }}
              </p>
            </div>
            <p class="text-lg md:text-2xl font-body leading-relaxed">
              {{ item.description }}
            </p>

            <div class="py-5" :class="[item.showButton ? 'block' : 'hidden']">
              <NuxtLink
                :to="item.toUrl"
                class="py-3 px-9 bg-horti-green-900 text-white rounded-md shadow-sm cursor-pointer uppercase hover:shadow-lg hover:bg-horti-green-800 font-bold"
              >
                Learn More
              </NuxtLink>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style scoped>
/* .swiper-button-next .swiper-button-prev {
  top: 30% !important;
  color: #96ca2d !important;
} */

/* Custom styles for Swiper navigation buttons */
.swiper-button-next,
.swiper-button-prev {
  top: 30% !important;
  color: #96ca2d !important; /* Change to your desired color */
}

/* Custom styles for Swiper pagination bullets */
.swiper-pagination-bullet {
  top: 70%;
  background: white; /* Change to your desired color */
}

/* Active state for pagination bullets */
.swiper-pagination-bullet-active {
  background: #96ca2d; /* Change to your desired active color */
}
</style>
