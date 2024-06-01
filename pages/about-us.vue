<script setup>
const hero = {
  image: '/images/about/about-us-hero.jpg',
  title: 'Agri-Enterprise Planning',
  description:
    'We offer tailored services to optimize productivity, profitability, and sustainability',
  showButton: false,
  height: 'three-quarters',
  toUrl: '/',
}

const counter = ref([
  { title: 'Products', count: 8 },
  { title: 'Projects', count: 96 },
  { title: 'Farmers Served', count: '2,987' },
  { title: 'TeamMembers', count: 9 },
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
            We are a leading horticultural consultancy and extension service
            company, dedicated to building the capacities of horticultural
            producers and promoting sustainable agriculture practices. Located
            at our demo farm in Elgon View, Eldoret, we offer comprehensive
            consultancy services and extension programs tailored to the needs of
            farmers.
          </p>
          <!-- <p>
            Our strength lies in harnessing the expertise of our team, composed
            of agribusiness specialists, agronomists, and technical service
            personnel. Together, we design effective systems and processes to
            drive success in agribusiness ventures.
          </p> -->

          <h3 class="font-heading text-gray-800 font-bold text-2xl">Mission</h3>
          <p>
            Our mission is to revolutionize the horticultural industry by
            providing expert guidance, innovative solutions, and accessible
            resources to farmers, ultimately fostering agricultural prosperity
            and environmental sustainability.
          </p>
          <!-- <ul class="list-disc ml-10 space-y-5">
            <li>
              <span class="font-bold font-heading">Excellence:</span> We are
              committed to delivering high-quality services and solutions that
              exceed our clients' expectations.
            </li>
            <li>
              <span class="font-bold font-heading">Innovation:</span> We embrace
              innovation and continuously explore new technologies and
              techniques to enhance agricultural productivity and
              sustainability.
            </li>
            <li>
              <span class="font-bold font-heading">Collaboration:</span> We
              believe in the power of collaboration and work closely with
              farmers, stakeholders, and partners to achieve common goals.
            </li>
          </ul> -->
        </div>
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

    <section>
      <AboutRecentProjects />
    </section>
  </div>
</template>
