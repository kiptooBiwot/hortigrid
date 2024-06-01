<script setup>
const services = reactive([
  {
    title: 'Enterprise Modelling',
    icon: 'fluent:clipboard-settings-24-regular',
    description:
      'We tailor our services to help you boost productivity, profits, and sustainability on your farm and with our expertise and personalized guidance',
    url: '/services/enterprise-modelling',
  },
  {
    title: 'Planting material',
    icon: 'icon-park-outline:hold-seeds',
    description:
      'With our expertise in both production and sourcing, we provide reliable planting material, specializing in fruit seedlings such as passion fruit, pomegranates, tamarillo, citrus, and apples. ',
    url: '/services/planting-material',
  },
  {
    title: 'Production Management',
    icon: 'streamline:money-graph-bar-increase-up-product-performance-increase-arrow-graph-business-chart',
    description:
      'Our crop enterprise management services are customized and designed to optimize operations and ease the burden of resource, inputs, and labor management. ',
    url: '/services/production-management',
  },
  {
    title: 'Agronomic support',
    icon: 'streamline:interface-help-customer-support-2-customer-headphones-headset-help-microphone-phone-person-support',
    description:
      'As your trusted partners in growth, our expert agronomic support is dedicated to ensuring crop production success through ecosystem tailored and personalized production guidance to address your farm specific challenges and goals. ',
    url: '/services/agronomic-support',
  },
  {
    title: 'Extension and Demonstration',
    icon: 'mdi:account-supervisor',
    description:
      'Through horticultural demonstration and extension, we provide a learning lab for our team and allow us to bring tried and tested expertise directly to your farm, offering practical knowledge and innovative techniques to help you thrive.',
    url: '/services/extension-and-demonstration',
  },
  {
    title: 'Capacity Building',
    icon: 'streamline:global-learning',
    description:
      'Through our horticultural farm manager training and capacity building services, we provide tailored programs designed to equip you with the skills, confidence, and expertise needed to sustainably run a horticultural production enterprise.',
    url: '/services/capacity-building',
  },
  {
    title: 'Farm Infrastructure Customisation',
    icon: 'ph:farm',
    description:
      'Our customized irrigation and controlled environment solutions tailored for different crops empower your farm with precision agriculture, focusing on optimizing water management and enhancing crop performance.',
    url: '/services/farm-infrastructure-customisation',
  },
  {
    title: 'Market linkage',
    icon: 'solar:hand-money-linear',
    description:
      'Drawing on our expertise in sustainable production management, our horticultural market readiness and linkage services expertly connect your farm to both niche and global markets. ',
    url: '/services/market-linkage',
  },
])
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
          <template v-for="(service, index) in services" :key="index">
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
