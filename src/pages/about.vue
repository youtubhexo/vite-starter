<template>
  <div>
    这是关于的介绍，详细资料可访问 https://github.com/youtubhexo
  </div>
  <h1 className="text-3xl font-bold underline">
    Hello world!
  </h1>
  <p>{{ width }} x {{ height }}</p>
</template>

<script setup lang="ts">
import { useWindowSize } from '@vueuse/core'

const { width, height } = useWindowSize()
</script>

<style scoped></style>