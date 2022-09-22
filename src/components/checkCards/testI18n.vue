<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { locale, t } = useI18n()
</script>

<template>
  <div class="card w-96 bg-base-100 shadow-xl m-4">
    <div class="card-body text-left">
      <h2 class="card-title">Vue I18n</h2>
      <p>{{ t('hello') }}</p>
      <div class="card-actions justify-end">
        <form>
          <label>{{ t('language') }}</label>
          <select class="select btn-primary ml-4" v-model="locale">
            <option value="en">en</option>
            <option value="ja">ja</option>
            <option value="tw">tw</option>
          </select>
        </form>
      </div>
    </div>
  </div>
</template>
<!--<i18n>-->
<!--{-->
<!--  "en": {-->
<!--    "language": "Language",-->
<!--    "hello": "hello, world!"-->
<!--  },-->
<!--  "ja": {-->
<!--    "language": "言語",-->
<!--    "hello": "こんにちは、世界！"-->
<!--  }-->
<!--}-->
<!--</i18n>-->
<style scoped>
</style>