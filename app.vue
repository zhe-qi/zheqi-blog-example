<script setup lang="ts">
const { locale } = useI18n()

useHead({
  title: 'zheqi-blog',
  htmlAttrs: {
    // 设置语言
    lang: locale.value
  },
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      hid: 'description',
      name: 'description',
      content: 'zheqi-blog'
    }
  ],
  link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
})

</script>

<template>
  <Body class="antialiased transition-colors duration-300 dark:text-gray-200 dark:bg-neutral-900">
    <NuxtLayout>
      <NuxtLoadingIndicator :height="2" :duration="3000" :throttle="400" />
      <NuxtPage />
    </NuxtLayout>
  </Body>
</template>

<style lang="postcss">
/* 并不是使用postcss， 而是为了兼容apply */

/* 整个滚动条 */
::-webkit-scrollbar {
  @apply w-2 h-2;
}

/* 滚动条上的滚动滑块 */
::-webkit-scrollbar-thumb {
  @apply bg-zinc-400 dark:bg-zinc-600;
  border-radius: 32px;
}

/* 滚动条轨道 */
::-webkit-scrollbar-track {
  @apply bg-zinc-200 dark:bg-zinc-400;
  border-radius: 32px;
}
</style>
