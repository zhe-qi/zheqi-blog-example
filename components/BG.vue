<script setup lang="ts">
const { isDark } = useTheme()

</script>

<template>
  <nuxt-img v-show="!isDark" src="/images/tailwind.webp" class="fixed h-screen w-screen top-0 left-0 z-[-99] bg-cover bg-center" />
</template>

<style scoped lang="postcss">
</style>
