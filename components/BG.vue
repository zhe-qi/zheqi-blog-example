<script setup lang="ts">
const { isDark } = useTheme()

const bg = ref<HTMLElement | null>(null)
// TODO: Fix this, 刷新样式丢失，所以这样补救
onMounted(() => {
  if (isDark.value) { bg.value?.classList.remove('bg') }
})
</script>

<template>
  <div ref="bg" :class="isDark ? '' : 'bg' " />
</template>

<style scoped lang="postcss">
.bg {
  @apply fixed h-screen w-screen top-0 left-0 z-[-99];
  background-image: url('/images/tailwind.jpg');
  background-size: cover;
  background-position: center;
}
</style>
