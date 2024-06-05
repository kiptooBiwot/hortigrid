<script setup>
import { useGeneralStore } from '@/stores/general.js'

const generalStore = useGeneralStore()
</script>

<template>
  <div class="w-full py-10 md:py-20">
    <div class="max-w-6xl mx-5 lg:mx-auto">
      <div class="flex items-center gap-5">
        <div class="hidden md:flex items-center">
          <Icon name="wpf:record" class="w-5 h-5 text-gray-500 mr-3" />
          <Icon name="wpf:record" class="w-10 h-10 text-gray-800" />
        </div>
        <h1
          class="text-[35px] mx-auto md:mx-0 md:text-6xl lg:text-7xl font-normal text-horti-green-900"
        >
          Recent Projects
        </h1>
      </div>

      <!-- Cards -->
      <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(project, index) in generalStore.projects"
          :key="index"
          class="w-full h-[250px] rounded-md relative mt-5 group transition duration-1000 ease-in-out hover:shadow-lg"
        >
          <img
            :src="project.imageUrl"
            class="inset-0 absolute w-full rounded-md overflow-hidden h-[250px] object-cover object-center"
            alt=""
          />
          <div
            class="absolute right-0 left-0 bottom-0 h-1/3 bg-black bg-opacity-60 flex items-center px-5 group-hover:opacity-0 transition duration-1000 ease-in-out rounded-b-md"
          >
            <h2
              class="text-white font-heading font-bold text-2xl group-hover:hidden transition duration-1000 ease-in-out"
            >
              {{ project.projectName }}
            </h2>
          </div>
          <div
            class="inset-0 absolute bg-horti-green-900 group-hover:bg-opacity-60 space-y-4 bg-opacity-0 opacity-0 group-hover:opacity-100 transition duration-1000 ease-in-out block py-5 px-10 pt-10"
          >
            <div class="flex items-center">
              <p class="text-white font-heading font-title font-bold text-2xl">
                {{ project.projectName }}
              </p>
              <!-- <div class="flex gap-5"> -->
              <svg
                class="w-12 h-12 text-[#e6ae17] ml-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              <!-- </div> -->
            </div>
            <p class="text-white text-sm">
              {{ project.scopeOfWork }}
            </p>
            <div>
              <NuxtLink
                :to="`/portfolio/${project.projectUrl}`"
                class="px-4 py-1 bg-[#e6ae17] rounded-md text-white hover:bg-[#edda32] cursor-pointer"
              >
                Read More
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
