<script setup>
const hero = {
  image: '/images/about/about-us-hero.jpg',
  title: 'Lima Smart',
  description: 'Agribusiness Project Modelling & Guided Extension',
  showButton: true,
  height: 'three-quarters',
  toUrl: '/products',
}

const counter = ref([
  { title: 'Products', count: 5 },
  { title: 'Projects', count: 96 },
  { title: 'Farmers Served', count: '2,987' },
  { title: 'TeamMembers', count: 9 },
])

const team = reactive([
  { name: 'Patricia Lagat', role: 'Operations', image: '' },
  { name: 'Prof. Job K. Lagat', role: 'Agribusiness Development', image: '' },
  { name: 'Dr. Elly Kibet ', role: 'Strategy', image: '' },
  { name: 'Emmanuel Lagat', role: 'Consulting Agronomist', image: '' },
  { name: 'David Omeno', role: 'Farm Manager', image: '' },
  { name: 'Shadrach Yator', role: 'Water and Irrigation', image: '' },
  { name: 'Kiptoo Biwot', role: 'ICT Consultant', image: '' },
  { name: 'Annaline Korir', role: 'Communication', image: '' },
])
</script>

<template>
  <div class="w-full">
    <HomeHero :hero-details="hero" />

    <div class="max-w-6xl mx-5 lg:mx-auto py-10 md:py-20 space-y-5 leading-7">
      <div class="flex items-center gap-5">
        <div class="hidden md:flex items-center">
          <Icon name="wpf:record" class="w-5 h-5 text-gray-500 mr-3" />
          <Icon name="wpf:record" class="w-10 h-10 text-gray-800" />
        </div>
        <h1
          class="text-[35px] mx-auto md:mx-0 md:text-6xl lg:text-7xl font-normal text-horti-green-900"
        >
          Get to Know Us
        </h1>
      </div>
      <div class="block md:flex gap-10 py-10">
        <div class="w-full md:w-1/2 mx-auto lg:mx-0 flex items-center">
          <img
            src="/images/about/about-image.jpg"
            alt=""
            class="object-cover rounded-md shadow-md w-full h-[250px] md:h-[400px]"
          />
        </div>
        <div class="w-full md:w-1/2 space-y-5 mt-10 md:mt-0">
          <p class="">
            Horti Grid, founded in 2012 and situated in Eldoret, Kenya, is a
            consultancy firm specializing in horticultural production,
            capacity-building, and agribusiness development. Our primary focus
            is on agrienterprise development, where we strive to enlighten
            farmers and investors with industry insights, technical knowledge,
            and essential skills.
          </p>
          <p>
            Moreover, we concentrate on incorporating smallholder farmers into
            agricultural value chains through production management and
            off-taker contracts. Our key asset is our team's expertise,
            consisting of agribusiness specialists, agronomists, and technical
            service staff.
          </p>

          <h3 class="font-heading text-gray-800 font-bold text-2xl">Mission</h3>
          <p>
            To deliver on products and solutions that will surpass client
            expectations.
          </p>

          <h3 class="font-heading text-gray-800 font-bold text-2xl">Vision</h3>
          <p>
            To be an industry leader in wealth creation through agribusiness.
          </p>
        </div>
      </div>
      <div class="py-10 max-w-2xl mx-auto space-y-5">
        <h3 class="font-heading text-horti-green-800 font-bold text-3xl">
          Core Values
        </h3>
        <div>
          <h4 class="font-heading text-gray-800 font-bold text-lg">
            Excellence
          </h4>
          <p>
            We are committed to delivering high-quality products, services and
            solutions that exceed our clients' expectations.
          </p>
        </div>
        <div>
          <h4 class="font-heading text-gray-800 font-bold text-lg">
            Innovation
          </h4>
          <p>
            We embrace innovation and continuously explore new technologies and
            techniques to enhance agricultural productivity and sustainability
          </p>
        </div>
        <div>
          <h4 class="font-heading text-gray-800 font-bold text-lg">
            Collaboration
          </h4>
          <p>
            We believe in the power of collaboration and work closely with
            farmers, stakeholders, and partners to achieve common goals
          </p>
        </div>

        <!-- What WE Do! -->
        <h3 class="font-heading text-horti-green-800 font-bold text-3xl">
          What we do
        </h3>

        <ul>
          <li>
            A comprehensive agribusiness development and agronomic support
            service for horticulture, dubbed LIMA SMART
          </li>
          <li>
            Out grower farmer engagement for local and export market linkages
          </li>
          <li>Farm enterprise management training.</li>
          <li>Infrastructural Customization and Installation.</li>
        </ul>
      </div>
    </div>

    <div class="hidden md:block w-full h-[150px] relative mb-48">
      <div class="absolute h-[300px] inset-0 bg-black bg-opacity-60"></div>
      <img
        src="/images/about/statistics_about.jpg"
        alt=""
        class="object-cover object-bottom w-full h-[300px]"
      />
      <div
        class="max-w-5xl mx-5 h-[300px] lg:mx-auto block md:flex absolute inset-0 justify-between items-center"
      >
        <template v-for="(stats, index) in counter" :key="index">
          <div class="text-white font-bold block text-center space-y-3">
            <p class="text-7xl font-semibold font-body">{{ stats.count }}</p>
            <p class="text-2xl font-bold">{{ stats.title }}</p>
          </div>
        </template>
      </div>
    </div>

    <div class="w-full py-10 bg-horti-green-100">
      <div class="max-w-6xl mx-5 lg:mx-auto">
        <div class="flex items-center gap-5 mb-10">
          <div class="hidden md:flex items-center">
            <Icon name="wpf:record" class="w-5 h-5 text-gray-500 mr-3" />
            <Icon name="wpf:record" class="w-10 h-10 text-gray-800" />
          </div>
          <h1
            class="text-[35px] mx-auto md:mx-0 md:text-6xl lg:text-7xl font-normal text-horti-green-900"
          >
            Meet the Team
          </h1>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <div v-for="(persons, index) in team" :key="index">
            <AboutMeetTheTeam :team="persons" />
          </div>
        </div>
      </div>
    </div>

    <section>
      <AboutRecentProjects />
    </section>
  </div>
</template>
