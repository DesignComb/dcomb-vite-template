<script setup lang="ts">
import Api from '@/api'
import {ref} from "vue"

let testData = ref<any>({
  fact : null
})

const testAxios = () =>{
  Api.getTestData()
      .then((res) => {
        testData.value = res
      })
}
</script>

<template>
  <div class="card w-96 bg-base-100 shadow-xl m-4">
    <div class="card-body text-left">
      <h2 class="card-title">Axios Get API</h2>
      <p>{{ testData.fact || 'Nothing here' }}</p>
      <div class="card-actions justify-end">
        <button @click="testAxios" class="btn btn-primary">Test Axios !</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>