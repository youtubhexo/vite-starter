<template>
  <div>
    这是关于的介绍，详细资料可访问 https://github.com/youtubhexo
  </div>
  <h1 className="text-3xl font-bold underline">
    Hello world!
  </h1>
  <p>{{ width }} x {{ height }}</p>
  <el-input v-model="input" style="width: 240px" placeholder="Please input" />
  <div class="i-bi:1-circle w-1em h-1em"></div>
</template>

<script setup lang="ts">
import { useWindowSize } from '@vueuse/core'

import { ref } from 'vue'

const { width, height } = useWindowSize()
const input = ref('')
</script>

<style scoped></style>
<route lang="yaml">
meta:
  layout: header
</route>