<template>
  <footer class="container-footer">
    <ul
      class="container-footer__ul dark:text-white"
    >
      <li>
        <a
          href="https://www.linkedin.com/in/lermyferrer"
          class="container-footer__ul-li"
          >LinkedIn</a
        >
      </li>
      <li>
        <a
          href="https://github.com/lermyferrer"
          class="container-footer__ul-li"
          >GitHub</a
        >
      </li>
      <li class="socials-link">
        <a
          class="hover:underline text-xl"
          href="mailto:lermy.ferrer@gmail.com"
          title="Contact me at"
          >Contact Me</a
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
  @apply flex flex-wrap items-center mt-3 text-xl font-medium text-gray-800 sm:mt-0
}

.container-footer__ul-li {
  @apply mr-4 hover:underline md:mr-6 text-xl
}
</style>
