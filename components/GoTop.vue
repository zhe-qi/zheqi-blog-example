<script setup lang="ts">
// TODO: 待更新api
const { y } = useWindowScroll()

const top = ref<string>('-999px')

watch(y, () => {
  if (y.value > 100) {
    if (top.value !== '-200px') {
      top.value = '-200px'
    }
  } else if (top.value !== '-900px') { top.value = '-999px' }
})

const changeTop = () => {
  if (process.client) {
    // 回到顶部并过渡
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
}
</script>

<template>
  <div
    class="transition-all back-to-top cd-top faa-float animated cd-is-visible"
    @click="changeTop"
  />
</template>

<style scoped>
@import '~/assets/css/szgotop.css';
.back-to-top {
  top: v-bind(top);
}
</style>
