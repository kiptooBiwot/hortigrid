<script setup>
import { useGeneralStore } from '@/stores/general.js'

const generalStore = useGeneralStore()
const route = useRoute()

const project = ref(null)

onMounted(() => {
  const filteredProject = generalStore.projects.find((proj) => {
    return proj.projectUrl === route.params.slug
  })
  project.value = filteredProject
})
</script>

<template>
  <div v-if="project" class="w-full min-h-screen">
    <div
      class="bg-cover bg-center w-full flex items-center justify-center h-[500px]"
      :style="`background-image: url(${project.imageUrl})`"
    ></div>

    <div class="max-w-6xl py-10 mx-5 lg:mx-auto block md:flex">
      <div class="w-full md:w-1/2 space-y-5">
        <div class="flex flex-col">
          <h4 class="text-horti-green-900">Project Name</h4>
          <h3 class="text-[22px] font-bold text-[#333333]">
            {{ project.projectName }}
          </h3>
        </div>
        <div class="flex flex-col">
          <h4 class="text-horti-green-900">Client</h4>
          <h3 class="text-[22px] font-bold text-[#333333]">
            {{ project.client }}
          </h3>
        </div>
        <div class="flex flex-col">
          <h4 class="text-horti-green-900">Project Location</h4>
          <h3 class="text-[22px] font-bold text-[#333333]">
            {{ project.county }}
          </h3>
        </div>
        <div class="flex flex-col">
          <h4 class="text-horti-green-900">Year</h4>
          <h3 class="text-[22px] font-bold text-[#333333]">
            {{ project.year }}
          </h3>
        </div>
      </div>
      <div class="w-full md:w-1/2">
        <h4 class="text-horti-green-900">Scope of Work</h4>
        <p class="leading-7">{{ project.scopeOfWork }}</p>
      </div>
    </div>
  </div>
  <div v-else class="flex min-h-screen items-center justify-center">
    <h2 class="animate-ping text-3xl font-medium">Loading....</h2>
  </div>
</template>
