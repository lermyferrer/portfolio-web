<template>
  <footer class="container-footer">
    <ul
      class="container-footer__ul"
    >
      <li>
        <a
          href="https://www.linkedin.com/in/lermyferrer"
          class="mr-4 hover:underline text-gray-800 md:mr-6 text-base"
          >Linkedin</a
        >
      </li>
      <li>
        <a
          href="https://github.com/lermyferrer"
          class="mr-4 hover:underline text-gray-800 md:mr-6 text-base"
          >Github</a
        >
      </li>
      <li class="socials-link">
        <a
          class="hover:underline text-gray-800 text-base"
          href="mailto:lermy.ferrer@gmail.com"
          title="Contact me at"
          >Contact me at</a
        >
      </li>
    </ul>
  </footer>
</template>

<script lang="ts">
export default {
  name: "Footer",
};
</script>

<style scoped>
.container-footer {
  @apply flex justify-center mt-24;
}

.container-footer__ul {
    @apply flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0
}
</style>
