<script setup lang="ts">
import {mainStore} from "@/store";

const appStore = mainStore()
</script>

<template>
  <div class="card w-96 bg-base-100 shadow-xl m-4">
    <div class="card-body">
      <h2 class="card-title">Pinia!</h2>
      <p>State counter value : {{ appStore.counter }}</p>
      <div class="card-actions justify-end">
        <button @click="appStore.increaseCounter()" class="btn btn-primary">increment ++</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>