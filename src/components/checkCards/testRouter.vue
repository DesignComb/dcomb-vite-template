<script setup lang="ts">
</script>

<template>
  <div class="card w-96 bg-base-100 shadow-xl m-4">
    <div class="card-body text-left">
      <h2 class="card-title">Vue Router</h2>
      <p>Test if you can go to About page</p>
      <div class="card-actions justify-end">
        <router-link to="/about" class="btn btn-primary hover:text-current">Go to About ></router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>