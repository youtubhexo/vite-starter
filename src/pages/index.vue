<template>
  <div>
    <span class="text-3xl font-bold underline">
      Hello world by vite-plugin-pages
    </span>
    <div>Now: {{ now }}</div>
    <HelloWorld></HelloWorld>

    <!-- //<img src="https://desperado.cloud/picgo-img//20240227135105.png"> -->
  </div>
</template>
<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue';
import { useNow } from '@vueuse/core'

const now = useNow()
</script>

<style lang="scss" scoped></style>