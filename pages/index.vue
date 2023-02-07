<script setup lang="ts">

</script>

<template>
  <div class="w-full h-full">
    <section class="flex text-zinc-700 dark:text-zinc-200 items-center justify-between w-full md:h-[30rem] h-[10rem] px-[10%] md:px-[15%]">
      <div class="box-border text-xl font-bold md:text-[5rem] md:pt-10 pt-2  md:h-48 h-24 md:w-[28rem] w-36 rainbow-text">
        {{ $t('zheqi-blog') }}
        <div class="mt-2 ml-5 text-base md:mt-16 md:ml-24 md:text-4xl">
          {{ $t('下一代博客模板') }}
        </div>
      </div>
      <div class="md:mr-20">
        <Logo />
      </div>
    </section>
    <section class="w-full px-2 md:px-[10%]">
      <div class="grid grid-cols-1 gap-10 md:grid-cols-3">
        <div v-for="item in 9" :key="item" class="w-full md:w-80">
          <Card />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>

</style>
