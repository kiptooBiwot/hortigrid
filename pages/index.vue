<script setup>
import { useGeneralStore } from '@/stores/general.js'

const generalStore = useGeneralStore()

const hero = [
  {
    // image: '/images/hero_img_1.jpg',
    image: '/images/hero_img.jpg',
    title: 'Horti Grid',
    subHeading: 'Your Agribusiness Solutions Partner!',
    description:
      "Explore our crop production and consultancy services dedicated to niche horticultural value chains. We specialize in enterprise modeling, agronomic support, and capacity building, ensuring profitability for farmers and investors. Let's grow success together!",
    showButton: true,
    height: 'full',
  },
  {
    image: '/images/about/about-us-hero.jpg',
    title: 'Lima Smart',
    description: 'Agribusiness Project Modelling & Guided Extension',
    showButton: true,
    height: 'three-quarters',
    toUrl: '/products',
  },
  {
    image: '/images/services/farmer-extension.jpg',
    title: 'Solutions We Offer',
    description:
      'We combine our extensive experience and new technologies designed by our team of Developers, Agriculture, and Agronomy experts to offer these services.',
    showButton: false,
    height: 'three-quarters',
    toUrl: '/',
  },
  {
    image: '/images/portfolio/planting.jpg',
    title: 'Planting Material',
    description:
      'Cultivating growth from the ground up with reliable sourcing and supply of planting material for cultivation with confidence and efficiency',
    showButton: false,
    height: 'three-quarters',
    toUrl: '/',
  },
  {
    image: '/images/products/products.jpg',
    title: 'Agri-Enterprise Planning',
    description:
      'We offer tailored services to optimize productivity, profitability, and sustainability',
    showButton: false,
    height: 'three-quarters',
    toUrl: '/',
  },
  {
    image: '/images/contact/contact-horti.jpg',
    title: 'Reach Out to Us',
    description: "Let's have a chat about your project.",
    showButton: false,
    height: 'three-quarters',
    toUrl: '/',
  },
]
</script>

<template>
  <div class="w-full">
    <section>
      <SwiperSlider :hero-details="generalStore.heroItems" />
    </section>
    <section>
      <HomeSolutions />
    </section>
  </div>
</template>
