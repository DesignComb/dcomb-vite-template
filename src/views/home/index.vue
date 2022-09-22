<script setup lang="ts">
import TestRouter from "@/components/checkCards/testRouter.vue";
import TestPinia from "@/components/checkCards/testPinia.vue";
import DarkTheme from "@/components/checkCards/darkTheme.vue";
import TestI18n from "@/components/checkCards/testI18n.vue";
import TestAxios from "@/components/checkCards/testAxios.vue";
</script>

<template>
  <div class="flex flex-row flex-wrap justify-center">
    <test-router/>
    <test-pinia/>
    <dark-theme/>
    <test-i18n/>
    <test-axios/>
    <div class="w-96 m-4"></div>
    <div class="w-96 m-4"></div>
    <div class="w-96 m-4"></div>
    <div class="w-96 m-4"></div>
  </div>
</template>

<style scoped>
</style>