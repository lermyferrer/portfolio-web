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
  <div class="container-template">
    <aside class="container-template__aside">
      <img
        alt="logo-lermy"
        class="inline-block h-64 w-64 rounded-full border-4"
        src="@/assets/images/mia-2.png"
        width="100"
        height="100"
      />
    </aside>
    <main class="container-template-main" flex-grow>
      <p class="container-template-main__title">Lermy Ferrer</p>
      <p class="container-template-main__message">
        {{ message }}
      </p>
      <p class="container-template-main__description">
        {{ description }}
      </p>
    </main>
  </div>

  <Footer />
</template>

<style scoped >
  .container-template {
    @apply container md:flex lg:mt-36 sm:mt-8
  }
  
  .container-template__aside {
    @apply flex justify-center p-4 sm:p-0 md:flex-none md:w-64
  }

  .container-template-main {
    @apply px-4 items-center
  }

  .container-template-main__title {
    @apply text-5xl p-2 font-semibold text-gray-800
  }

  .container-template-main__message {
    @apply text-2xl p-2 mt-6 text-gray-600 font-semibold text-justify
  }

  .container-template-main__description {
    @apply text-xl p-2 mt-6 text-gray-700 text-justify
  }
</style>
