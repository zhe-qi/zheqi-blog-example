<script setup lang="ts">
const fps = useFps()
</script>

<template>
  <div class="h-[2px] bg-sky-100" />
  <div
    class="flex items-center justify-center h-10 rounded-bl-lg rounded-br-lg dark:bg-zinc-800"
  >
    <div class="text-sm dark:text-white lg:text-base">
      @2022 -内容仅供参考，网站仅供学习 --FPS:
      <span class="text-emerald-300">{{ fps }}</span>
    </div>
  </div>
</template>

<style scoped></style>
