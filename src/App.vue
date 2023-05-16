<script setup>
import { ref } from "vue";
import { useThemeDark } from './composables/useThemeDark'

import HomeView from "./views/HomeView.vue";

//const { modeDarkLocalstorage } = useThemeDark();

if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

const toggleDarkMode = ref(document.documentElement.className ==='dark');

const changeDarkMode = () => {
  toggleDarkMode.value = document.documentElement.classList.add('dark');
  toggleDarkMode.value ? localStorage.theme = 'dark' : localStorage.theme = 'light';
}
</script>

<template>
    <!-- <div class="flex justify-end p-4">
    <button @click="changeDarkMode">dia/noche</button>
  </div> -->
  <HomeView
    message="Lermy is systems engineer graduated from the Corporación Universitaria Latinoamericana (CUL) in Barranquilla, Colombia. Web developer with over 3 years of experience." description="Developing applications with: PHP | Laravel | Javascript | Vue.js | Angular | Typescript | Tailwind"
  />
</template>
