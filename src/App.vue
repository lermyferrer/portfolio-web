<script setup>
import { ref } from "vue";

import HomeView from "./views/HomeView.vue";

const toggleDarkMode = ref(document.documentElement.className === 'dark');

if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

const changeDarkMode = () => {
  toggleDarkMode.value = document.documentElement.classList.toggle('dark');
  toggleDarkMode.value ? (localStorage.theme = 'dark') : (localStorage.theme = 'light');
}

</script>

<template>
  <section>
    <div class="flex justify-end p-4">
      <img alt="dark_mode" class="cursor-pointer" :class="[toggleDarkMode ? 'dark-mode-img' : 'light-mode-img']"
        src="@/assets/images/mode_dark.png" @click="changeDarkMode" />
    </div>
    <HomeView message="+4 years of experience as a Full-Stack Developer from Barranquilla, Colombia."
      description="Developing applications in: PHP | Laravel | Javascript | Vue.js | Angular | Typescript | Node | React Native" />
  </section>
</template>

<style scoped>
.dark-mode-img {
  filter: invert(100%);
}
</style>
