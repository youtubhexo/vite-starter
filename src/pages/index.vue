<template>
  <div>
    <span class="text-3xl font-bold underline">
      Hello world by vite-plugin-pages
    </span>
    <div>Now: {{ now }}</div>
    <HelloWorld></HelloWorld>
    <!-- Sun in light mode, Moon in dark mode, from Carbon -->
    <button class="i-carbon-sun dark:i-carbon-moon" />
    <div class="i-tabler:a-b w-1em h-1em" style="color: #669e2e;"></div>

    <!-- //<img src="https://desperado.cloud/picgo-img//20240227135105.png"> -->
  </div>
</template>
<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue';
import { useNow } from '@vueuse/core'

const now = useNow()
</script>

<style lang="scss" scoped></style>