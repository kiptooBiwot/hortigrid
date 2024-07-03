<script setup>
import { useGeneralStore } from '@/stores/general'
import HortiGridLogo from './HortiGridLogo.vue'

const generalStore = useGeneralStore()

const filteredFooterItems = computed(() => {
  const filteredMenuItems = generalStore.menuItems.filter(
    (item) => item.title !== 'Services'
  )

  return filteredMenuItems
})
</script>

<template>
  <div class="border-t border-gray-100 text-white">
    <div class="py-10 bg-horti-green-900">
      <div
        class="mx-auto px-5 space-y-10 md:space-y-0 lg:px-0 max-w-6xl grid md:grid-cols-2 lg:grid-cols-3 md:gap-5"
      >
        <div class="flex-1 space-y-5">
          <div>
            <HortiGridLogo />
          </div>
          <p class="text-xs w-[265px] leading-7">
            Smart resource utilization is key to making horticultural value
            chains work for smallholders. Horti Grid is there to help you make
            this a reality.
          </p>
        </div>
        <div class="flex-1 space-y-5">
          <h2 class="text-3xl text-white font-bold">Contact Us</h2>
          <div class="flex items-center text-sm gap-3">
            <Icon
              name="heroicons:map-pin-16-solid"
              class="w-6 h-6 text-white"
            />
            <span
              >Alpha Lane, Upper Elgon View Rd, Elgon View Estate Eldoret</span
            >
          </div>
          <div class="flex items-center text-sm gap-3">
            <Icon name="heroicons:envelope-solid" class="w-5 h-5 text-white" />
            <span>info@hortigrid.com</span>
          </div>
          <div class="flex items-center text-sm gap-3">
            <Icon name="heroicons:phone-20-solid" class="w-5 h-5 text-white" />
            <span>+254-704-112-151</span>
          </div>
          <div class="flex items-center text-sm gap-3">
            <Icon name="heroicons:home-solid" class="w-5 h-5 text-white" />
            <span>P.O. Box 2990-30100, Eldoret. Kenya.</span>
          </div>
        </div>
        <div class="flex flex-col justify-center">
          <div
            v-for="(item, index) in filteredFooterItems"
            :key="index"
            class="flex-1 flex flex-col font-bold leading-9 text-sm uppercase space-y-5 text-gray-100 hover:text-green-800 ml-0 md:ml-20"
          >
            <NuxtLink :to="item.url">
              {{ item.title }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <!-- bg-[#F8F8F8] -->
    <div class="py-5 bg-horti-green-900 border-t border-horti-green-30">
      <div
        class="max-w-6xl mx-auto flex flex-col gap-5 items-center lg:gap-0 lg:flex-row lg:justify-between"
      >
        <div>
          <p class="text-xs">
            <span class="text-gray-800">HORTI-GRID</span> &copy;
            {{ new Date().getFullYear() }} All Rights reserved.
          </p>
        </div>

        <div class="flex gap-10 order-first lg:order-last">
          <SocialIcons />
        </div>
      </div>
    </div>
  </div>
</template>
