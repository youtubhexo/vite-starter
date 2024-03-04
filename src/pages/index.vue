<template>
  <div>
    <span class="text-3xl font-bold underline">
      你好
    </span>
    <div>Now: {{ now }}</div>
    <HelloWorld></HelloWorld>
    <!-- Sun in light mode, Moon in dark mode, from Carbon -->
    <button class="i-carbon-sun dark:i-carbon-moon" />
    <div class="i-tabler:a-b w-1em h-1em" style="color: #669e2e;"></div>

    <ReloadPrompt></ReloadPrompt>
    <!-- //<img src="https://desperado.cloud/picgo-img//20240227135105.png"> -->
  </div>
</template>

<script setup lang="ts">
import { registerSW } from 'virtual:pwa-register'
import { useNow } from '@vueuse/core'
import { onMounted } from 'vue';



onMounted(() => {
  registerSW({
    immediate: true,
    onRegisteredSW(_url, registration) {
      setInterval(() => {
        registration && registration.update()
      }, 3600000)
    }
  })
})




const now = useNow()
</script>

<style lang="scss" scoped></style>

<route lang="yaml">
meta:
  layout: default
</route>