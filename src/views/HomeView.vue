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
    <aside class="p-4 md:flex-none md:w-68">
      <img
        alt="logo-lermy"
        class="inline-block h-64 w-64 rounded-full border-4"
        src="@/assets/images/mia-2.png"
        width="100"
        height="90"
      />
    </aside>
    <main class="px-4 mb-6 items-center" flex-grow>
      <p class="text-2xl p-2 mt-12 text-gray-800 font-semibold text-left">
        {{ message }}
      </p>
      <p class="text-1xl p-2 mt-6 text-gray-800 text-left">
        {{ description }}
      </p>
    </main>
  </div>

  <Footer />
</template>

<style scoped></style>
