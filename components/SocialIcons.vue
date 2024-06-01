<script setup>
const socialIcons = reactive([
  { icon: 'bi:facebook', url: "www.facebook.com/hortigrid" },
  { icon: 'mdi:twitter', url: "www.x.com/hortigrid" },
  { icon: 'mdi:instagram', url: "www.instagram.com/hortigrid" }
])
</script>

<template>
  <div v-for="(icon, index) in socialIcons" :key="index" class="flex gap-5">
    <NuxtLink :to="icon.url">
      <Icon :name="icon.icon" class="w-5 h-5 text-gray-500 hover:text-horti-green-900" />
    </NuxtLink>
  </div>
</template>
