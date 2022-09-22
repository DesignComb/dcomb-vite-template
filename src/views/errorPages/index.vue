<script setup lang="ts">
import {ref} from "vue";
import {useRouter} from "vue-router";

const router = useRouter();
const errorCode = ref<number>(404);
const back = () => {
  router.push({name: "Home"});
};
</script>

<template>
  <div class="w-full flex justify-center items-center gap-20 bg-base-100 py-20">
    <h2>
      Error {{ errorCode }}!
    </h2>
    <p>We're sorry, something is not right, page not found!</p>
    <button class="btn btn-primary" @click="back">
      Back !
    </button>
  </div>
</template>
