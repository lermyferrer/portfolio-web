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
      <img class="rounded-full h-64 w-64 ring-gray-300 dark:ring-gray-500 pr-2" 
        src="@/assets/images/img-face.jpeg" 
        alt="Lermy avatar"
      >
    </aside>
    <main class="container-template-main dark:bg-gray-800" flex-grow>
      <p class="container-template-main__title dark:text-white">Hi, I’m Lermy Ferrer</p>
      <p class="container-template-main__message dark:text-white">
        {{ message }}
      </p>
      <p class="container-template-main__technologies dark:text-white">
        Creating highly interactive user interfaces and dynamic web sites.
      </p>
      <p class="container-template-main__description dark:text-white">
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
    @apply flex justify-center p-4 sm:p-0 md:flex-none
  }

  .container-template-main {
    @apply px-4 items-center
  }

  .container-template-main__title {
    @apply pb-8 font-semibold text-gray-800 text-4xl mt-4 sm:text-5xl
  }

  .container-template-main__message {
    @apply text-2xl text-gray-800 font-normal text-ellipsis sm:text-justify
  }

  .container-template-main__technologies {
    @apply text-2xl text-gray-800 font-normal text-ellipsis sm:text-justify
  }

  .container-template-main__description {
    @apply text-xl mt-8 text-gray-800 text-ellipsis sm:text-justify
  }
</style>
