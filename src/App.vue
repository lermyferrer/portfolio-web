<script setup>
import { ref } from "vue";

import HomeView from "./views/HomeView.vue";

const toggleDarkMode = ref(localStorage.theme === 'dark' || (!('theme' in localStorage) &&
  window.matchMedia('(prefers-color-scheme: dark)').matches)
);

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
  toggleDarkMode.value = !toggleDarkMode.value;
  document.documentElement.classList.toggle('dark', toggleDarkMode.value);
  localStorage.theme = toggleDarkMode.value ? 'dark' : 'light';
};

</script>

<template>
  <section>
    <div class="flex justify-end p-4">
      <img
        alt="dark_mode" class="cursor-pointer" :class="{ 'dark-mode-img': toggleDarkMode, 'light-mode-img': !toggleDarkMode }"
        src="@/assets/images/mode_dark.png"
        @click="changeDarkMode"
      />
    </div>
    <HomeView message="+5 years of experience as a Full-Stack Developer from Barranquilla, Colombia."
      description="Developing applications in: Laravel | Javascript | Vue | Angular | Typescript | Node | React Native | Git | Github" />
  </section>
</template>

<style scoped>
.dark-mode-img {
  filter: invert(100%);
}
</style>
