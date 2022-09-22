<script setup lang="ts">
import { onMounted } from 'vue'
import { themeChange } from 'theme-change'
onMounted(() => {
  themeChange(false)
})
</script>

<template>
  <div class="card w-96 bg-base-100 shadow-xl m-4">
    <div class="card-body">
      <h2 class="card-title">Light Theme!</h2>
      <p>You can switch theme </p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary"
            data-toggle-theme="dark,light" data-act-class="theme-light">
            Change Theme!
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>