<script setup>
const props = defineProps(['team'])
</script>

<template>
  <div class="">
    <div
      class="bg-white bg-opacity-40 py-10 px-5 rounded-lg shadow-sm space-y-5"
    >
      <img
        :src="team.image"
        alt=""
        class="rounded-full bg-slate-300 object-cover w-[100px] h-[100px]"
      />
      <div>
        <h4 class="text-2xl text-gray-600 font-bold">{{ team.name }}</h4>
        <p class="text-sm uppercase font-medium text-horti-green-900">
          {{ team.role }}
        </p>
      </div>
    </div>
  </div>
</template>
