<script setup>
const hero = {
  image: '/images/contact/contact-horti.jpg',
  title: 'Reach Out to Us',
  description: "Let's have a chat about your project.",
  showButton: false,
  height: 'three-quarters',
  toUrl: '/',
}

const contactDetails = ref({
  name: '',
  county: '',
  ward: '',
  email: '',
  phone: '',
  agenda: '',
  message: '',
})

const sendEmail = () => {
  console.log('SENd EMAIL Clicked!')
}
</script>

<template>
  <div class="w-full">
    <HomeHero :hero-details="hero" />

    <div class="max-w-6xl mx-5 lg:mx-auto py-10 md:py-20 space-y-5 leading-7">
      <h1 class="font-bold text-5xl text-center text-[#3b3d42]">Talk to us</h1>
      <p class="text-center">
        Let’s have a chat about your intended engagement with us. Our technical
        representatives are ready to assist you.
      </p>

      <div class="max-w-3xl mx-5 lg:mx-auto py-10">
        <form action="" class="space-y-5">
          <div class="flex flex-col">
            <!-- <label for="name" class="text-xs">Your Name</label> -->
            <input
              v-model="contactDetails.name"
              type="text"
              name="name"
              placeholder="Your Name"
              class="py-4 px-4 bg-gray-100 rounded-md w-full text-sm focus:shadow-lg ring-0 ring-inset ring-horti-green-800 focus:border-none focus:ring-2 focus:ring-inset"
            />
            <!-- :class="{
                  'border-red-500 focus:border-red-500': v$.fullName.$error,
                  'border-[#42d392] ': !v$.fullName.$invalid,
                }"
                @change="v$.fullName.$touch" -->
            <div>
              <!-- <span class="text-xs text-red-500" v-if="v$.fullName.$error">{{
                  v$.fullName.$errors[0].$message
                }}</span> -->
            </div>
          </div>
          <div class="flex gap-5 w-full">
            <div class="flex flex-col flex-1">
              <!-- <label for="name" class="text-xs">Your Name</label> -->
              <input
                v-model="contactDetails.county"
                type="text"
                name="county"
                placeholder="County"
                class="py-4 px-4 bg-gray-100 rounded-md w-full text-sm focus:shadow-lg ring-0 ring-inset ring-horti-green-800 focus:border-none focus:ring-2 focus:ring-inset"
              />
              <!-- :class="{
                    'border-red-500 focus:border-red-500': v$.fullName.$error,
                    'border-[#42d392] ': !v$.fullName.$invalid,
                  }"
                  @change="v$.fullName.$touch" -->
              <div>
                <!-- <span class="text-xs text-red-500" v-if="v$.fullName.$error">{{
                    v$.fullName.$errors[0].$message
                  }}</span> -->
              </div>
            </div>
            <div class="flex flex-col flex-1">
              <!-- <label for="name" class="text-xs">Your Name</label> -->
              <input
                v-model="contactDetails.ward"
                type="text"
                name="ward"
                placeholder="Ward"
                class="py-4 px-4 bg-gray-100 rounded-md w-full text-sm focus:shadow-lg ring-0 ring-inset ring-horti-green-800 focus:border-none focus:ring-2 focus:ring-inset"
              />
              <!-- :class="{
                    'border-red-500 focus:border-red-500': v$.fullName.$error,
                    'border-[#42d392] ': !v$.fullName.$invalid,
                  }"
                  @change="v$.fullName.$touch" -->
              <div>
                <!-- <span class="text-xs text-red-500" v-if="v$.fullName.$error">{{
                    v$.fullName.$errors[0].$message
                  }}</span> -->
              </div>
            </div>
          </div>
          <div class="flex gap-5 w-full">
            <div class="flex flex-col flex-1">
              <!-- <label for="name" class="text-xs">Your Name</label> -->
              <input
                v-model="contactDetails.email"
                type="text"
                name="email"
                placeholder="Your Email"
                class="py-4 px-4 bg-gray-100 rounded-md w-full text-sm focus:shadow-lg ring-0 ring-inset ring-horti-green-800 focus:border-none focus:ring-2 focus:ring-inset"
              />
              <!-- :class="{
                    'border-red-500 focus:border-red-500': v$.fullName.$error,
                    'border-[#42d392] ': !v$.fullName.$invalid,
                  }"
                  @change="v$.fullName.$touch" -->
              <div>
                <!-- <span class="text-xs text-red-500" v-if="v$.fullName.$error">{{
                    v$.fullName.$errors[0].$message
                  }}</span> -->
              </div>
            </div>
            <div class="flex flex-col flex-1">
              <!-- <label for="name" class="text-xs">Your Name</label> -->
              <input
                v-model="contactDetails.phone"
                type="text"
                name="phone"
                placeholder="Enter your Phone Number"
                class="py-4 px-4 bg-gray-100 rounded-md w-full text-sm focus:shadow-lg ring-0 ring-inset ring-horti-green-800 focus:border-none focus:ring-2 focus:ring-inset"
              />
              <!-- :class="{
                    'border-red-500 focus:border-red-500': v$.fullName.$error,
                    'border-[#42d392] ': !v$.fullName.$invalid,
                  }"
                  @change="v$.fullName.$touch" -->
              <div>
                <!-- <span class="text-xs text-red-500" v-if="v$.fullName.$error">{{
                    v$.fullName.$errors[0].$message
                  }}</span> -->
              </div>
            </div>
          </div>
          <div class="flex flex-col">
            <!-- <label for="name" class="text-xs">Your Name</label> -->
            <!-- <input
              v-model="contactDetails.phone"
              type="text"
              name="phone"
              placeholder="Enter your Phone Number"
              class="py-4 px-4 bg-gray-100 rounded-md w-full text-sm focus:shadow-lg ring-0 ring-inset ring-horti-green-800 focus:border-none focus:ring-2 focus:ring-inset"
            /> -->
            <select
              v-model="contactDetails.agenda"
              name="agenda"
              id=""
              placeholder="Select your agenda"
              class="py-4 px-4 bg-gray-100 rounded-md w-full text-sm focus:shadow-lg ring-0 ring-inset ring-horti-green-800 focus:border-none focus:ring-2 focus:ring-inset"
            >
              <option value="" selected>Agenda</option>
              <option value="Lima Smart(Agri-business Modelling and Extension)">
                Lima Smart(Agri-business Modelling and Extension)
              </option>
              <option value="Plateau Greens">Plateau Greens</option>
              <option value="Agritude 101">Agritude 101</option>
              <option value="Farm Infrastructure">Farm Infrastructure</option>
            </select>
            <div></div>
          </div>
          <div class="flex flex-col">
            <!-- <label for="name" class="text-xs">Your Name</label> -->
            <textarea
              id=""
              cols="30"
              rows="10"
              v-model="contactDetails.message"
              type="text"
              name="message"
              placeholder="Enter your message"
              class="py-4 px-4 bg-gray-100 rounded-md w-full text-sm focus:shadow-lg ring-0 ring-inset ring-horti-green-800 focus:border-none focus:ring-2 focus:ring-inset"
            ></textarea>
            <!-- :class="{
                  'border-red-500 focus:border-red-500': v$.fullName.$error,
                  'border-[#42d392] ': !v$.fullName.$invalid,
                }"
                @change="v$.fullName.$touch" -->
            <div>
              <!-- <span class="text-xs text-red-500" v-if="v$.fullName.$error">{{
                  v$.fullName.$errors[0].$message
                }}</span> -->
            </div>
          </div>

          <div class="flex pt-5">
            <button
              @click.prevent="sendEmail"
              class="text-white text-sm font-bold tracking-wider uppercase py-4 px-6 rounded-md bg-horti-green-900 hover:bg-horti-green-800 hover:shadow-lg"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
