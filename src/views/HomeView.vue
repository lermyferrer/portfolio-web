<script setup>
import  Footer  from '../components/Footer.vue'

defineProps({
  message: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="container md:flex lg:mt-36 sm:mt-8">
    <aside class="flex justify-center p-4 sm:p-0 md:flex-none md:w-64">
      <img
        alt="logo-lermy"
        class="inline-block h-64 w-64 rounded-full border-4"
        src="@/assets/images/mia-2.png"
        width="100"
        height="100"
      />
    </aside>
    <main class="px-4 items-center" flex-grow>
      <p class="text-5xl p-2 font-semibold text-gray-800">Lermy Ferrer</p>
      <p class="text-2xl p-2 mt-6 text-gray-600 font-semibold text-justify">
        {{ message }}
      </p>
      <p class="text-1xl p-2 mt-6 text-gray-800 text-justify">
        {{ description }}
      </p>
    </main>
  </div>

  <Footer />
</template>

<style scoped></style>
