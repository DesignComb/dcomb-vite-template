<script setup lang="ts">
</script>

<template>
  <div class="flex flex-row flex-wrap justify-center items-center">
    <header class="flex flex-wrap justify-center">
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="h-24 mx-12" alt="Vite logo"/>
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="./assets/vue.svg" class="h-24 mx-12" alt="Vue logo"/>
      </a>
      <a href="https://tailwindcss.com/" target="_blank">
        <img src="./assets/tailwind.svg" class="h-24 mx-12" alt="Tailwind logo"/>
      </a>
      <div class="w-full my-12 text-5xl leading-normal font-bold">
        Vite + Vue + TailwindCss Template
      </div>
    </header>
    <router-view/>
  </div>
</template>

<style scoped>
</style>
