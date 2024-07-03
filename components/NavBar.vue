<script setup>
import { useGeneralStore } from '@/stores/general.js'

const generalStore = useGeneralStore()

const socialIcons = reactive([
  { icon: 'bi:facebook', url: '#' },
  { icon: 'mdi:twitter', url: '#' },
  { icon: 'mdi:instagram', url: '#' },
])

// const menuItems = ref([
//   { title: 'Home', url: '/', type: 'link' },
//   { title: 'About Us', url: '/about-us', type: 'link' },
//   {
//     title: 'Services',
//     url: '/services',
//     type: 'dropdown',
//     isOpen: false,
//     children: [
//       { title: 'First', url: '/first' },
//       { title: 'Second', url: '/second' },
//       { title: 'Third', url: '/Third' },
//       { title: 'Fourth', url: '/Fourth' },
//       { title: 'Fifth', url: '/Fifth' },
//     ],
//   },
//   { title: 'Portfolio', url: '/portfolio', type: 'link' },
//   { title: 'News', url: '/news', type: 'link' },
//   { title: 'Contact', url: '/contacts', type: 'link' },
// ])

const isSubMenuOpen = ref(false)
const servicesDropdownOpen = ref(false)

const toggleDropdown = (index) => {
  generalStore.menuItems[index].isOpen = !generalStore.menuItems[index].isOpen
}

const closeDropdown = (index) => {
  generalStore.menuItems[index].isOpen = false
}

const isMobileMenuOpen = ref(false)
const animation = ref('')
const showMenu = ref(false)

const toggleMobileMenu = () => {
  showMenu.value = !showMenu.value
  animation.value = showMenu.value ? 'slideInRight' : 'slideOutRight'
}

const toggleServicesDropdown = () => {
  servicesDropdownOpen.value = !servicesDropdownOpen.value
}
</script>

<template>
  <div class="">
    <div class="max-w-6xl mx-auto px-5 flex justify-between items-center py-8">
      <NuxtLink to="/" class="cursor-pointer">
        <HortiGridLogo />
      </NuxtLink>
      <div class="hidden lg:block">
        <div class="flex gap-5 font-heading uppercase text-sm font-extrabold">
          <template v-for="(menu, index) in generalStore.menuItems">
            <template v-if="menu.type === 'link'">
              <NuxtLink
                :to="menu.url"
                :key="index"
                class="text-white hover:text-horti-green-900"
              >
                {{ menu.title }}
              </NuxtLink>
            </template>
            <template v-else-if="menu.type === 'dropdown'">
              <div
                :key="index"
                class="relative"
                v-if="menu.children.length > 0"
              >
                <NuxtLink
                  :to="menu.url"
                  @mouseover="toggleDropdown(index)"
                  class="uppercase flex items-center text-white hover:text-horti-green-900"
                >
                  {{ menu.title }}
                  <span>
                    <Icon
                      name="heroicons:chevron-down-16-solid"
                      class="w-5 h-5"
                    />
                  </span>
                </NuxtLink>

                <div
                  v-if="menu.isOpen"
                  @click="closeDropdown(index)"
                  class="absolute right-0 mt-2 w-auto origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg transition duration-300 ease-in-out"
                >
                  <div class="p-3">
                    <div
                      v-for="(submenu, index) in menu.children"
                      :key="index"
                      class="flex flex-col space-y-4 p-2 text-xs text-gray-400 hover:bg-horti-green-50"
                    >
                      <NuxtLink :to="submenu.url">
                        {{ submenu.title }}
                      </NuxtLink>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </template>
        </div>
      </div>

      <!-- Social Icons -->
      <div class="hidden lg:block">
        <ul class="flex gap-3">
          <li v-for="(social, index) in socialIcons" :key="index">
            <NuxtLink :to="social.url">
              <div
                :to="social.url"
                class="border border-1 border-horti-green-900 w-10 h-10 rounded-full transition ease-in-out delay-150 hover:bg-horti-green-900 flex items-center justify-center"
              >
                <Icon :name="social.icon" color="white" class="w-6 h-6" />
              </div>
            </NuxtLink>
            <!-- <Icon name="bi:facebook" color="black" /> -->
          </li>
        </ul>
      </div>

      <!-- Mobile Menu Button -->
      <div class="block lg:hidden">
        <Icon
          @click="toggleMobileMenu"
          name="heroicons:bars-3-20-solid"
          class="w-7 h-7"
        />
      </div>

      <!-- Mobile Menu -->
      <!-- v-if="isMobileMenuOpen" -->
      <div
        class="lg:hidden absolute top-0 left-0 h-screen w-full bg-[#428309] z-10 px-20 transition-all ease-in duration-1000"
        :class="{ hidden: !showMenu }"
        :style="{ animationName: animation }"
      >
        <div>
          <Icon
            @click="toggleMobileMenu"
            name="heroicons:x-mark-20-solid"
            class="w-7 h-7 absolute right-1 top-12 text-white hover:scale-105 hover:shadow-md"
          />
        </div>
        <div class="relative mt-20">
          <template
            v-for="(item, index) in generalStore.menuItems"
            :key="index"
          >
            <NuxtLink
              @click="toggleMobileMenu"
              :to="item.url"
              class="block mb-5 text-white font-heading hover:text-horti-green-100 uppercase text-sm font-extrabold"
            >
              {{ item.title }}
            </NuxtLink>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes slideInRight {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes slideOutRight {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100%);
  }
}
</style>
