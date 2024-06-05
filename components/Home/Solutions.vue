<script setup>
import { useGeneralStore } from '@/stores/general.js'

const generalStore = useGeneralStore()
</script>

<template>
  <div class="w-full py-16 md:py-20 min-h-screen">
    <div class="max-w-6xl mx-5 lg:mx-auto space-y-10">
      <div class="flex items-center gap-5">
        <div class="hidden md:flex items-center">
          <Icon name="wpf:record" class="w-5 h-5 text-gray-500 mr-3" />
          <Icon name="wpf:record" class="w-10 h-10 text-gray-800" />
        </div>
        <h1
          class="text-[35px] mx-auto md:mx-0 md:text-6xl lg:text-7xl font-normal text-horti-green-900"
        >
          Solutions We Offer
        </h1>
      </div>
      <div class="w-full block lg:flex gap-10">
        <div class="flex w-1/2 mx-auto lg:w-3/12 items-center">
          <img
            src="/images/home/solns_home.jpg"
            alt=""
            class="object-cover rounded-xl h-full"
          />
        </div>
        <div class="block md:flex md:flex-wrap flex-1">
          <template
            v-for="(service, index) in generalStore.services"
            :key="index"
          >
            <div class="flex items-start gap-7 w-full md:w-1/2 p-5">
              <div>
                <Icon
                  :name="service.icon"
                  class="text-horti-green-900 w-16 h-16"
                />
              </div>
              <div class="block space-y-2">
                <NuxtLink
                  :to="service.url"
                  class="font-bold text-[#333333] text-[30px] font-heading hover:text-horti-green-900 transition duration-300 ease-in-out"
                >
                  {{ service.title }}
                </NuxtLink>
                <p class="text-sm overflow-ellipsis text-[#888888]">
                  {{
                    service.description.length > 50
                      ? service.description.substring(0, 120) + '...'
                      : service.description
                  }}
                </p>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
