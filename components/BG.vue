<script setup lang="ts">
const { isDark } = useTheme()

</script>

<template>
  <div :class="isDark ? '' : 'bg' " />
</template>

<style scoped lang="postcss">
.bg {
  @apply fixed h-screen w-screen top-0 left-0 z-[-99];
  background-image: url('/images/tailwind.jpg');
  background-size: cover;
  background-position: center;
}
</style>
