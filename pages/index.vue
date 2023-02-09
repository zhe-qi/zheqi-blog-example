<script setup lang="ts">

</script>

<template>
  <div class="box-border w-full h-full px-[10%]">
    <section
      class="flex box-border text-zinc-700 dark:text-zinc-200 items-center justify-between w-full md:my-20 md:px-[15%] px-[12vw] h-[30vh]"
    >
      <div class="md:w-[30vw] md:h-[30vh] w-[60vw] box-border h-[20vh] rainbow-text">
        <div class="text-3xl md:mt-10 w-full leading-[4rem] h-16 font-bold md:text-[4rem] text-ellipsis whitespace-nowrap overflow-hidden">
          {{ $t('zheqi-blog') }}
        </div>
        <div class="w-full h-10 mt-2 text-xl font-semibold leading-10 md:mt-5 md:ml-[2em] ml-4 md:text-2xl whitespace-nowrap text-ellipsis overflow-hidden">
          {{ $t('下一代博客模板') }}
        </div>
        <div
          class="flex items-center space-x-8 text-base font-normal leading-7 text-center text-black md:leading-10 mt-7 dark:text-zinc-200 md:mt-12"
        >
          <NuxtLink
            to="/home"
            class="block w-16 overflow-hidden border rounded-md dark:hover:bg-cyan-500 md:h-10 h-7 hover:bg-cyan-500 text-ellipsis whitespace-nowrap border-zinc-400 dark:border-zinc-200 md:w-28 bg-cyan-400 dark:bg-cyan-700"
          >
            {{ $t('开始使用') }}
          </NuxtLink>
          <NuxtLink
            to="https://github.com/zhe-qi/zheqi-blog"
            class="block w-16 overflow-hidden bg-white border rounded-md dark:hover:bg-zinc-800 md:h-10 h-7 hover:bg-zinc-100 text-ellipsis whitespace-nowrap border-zinc-400 md:w-28 dark:border-zinc-200 dark:bg-black"
          >
            {{ $t('了解更多') }}
            <Icon name="material-symbols:chevron-right" class="mb-1 text-2xl" />
          </NuxtLink>
        </div>
      </div>
      <div class="md:mr-20">
        <Logo />
      </div>
    </section>
    <section class="w-full px-2 md:px-[10%]">
      <div class="grid grid-cols-1 gap-20 md:grid-cols-3">
        <div v-for="item in 9" :key="item" class="w-full">
          <Card />
        </div>
      </div>
    </section>
    <QuickLinks />
  </div>
</template>

<style scoped>

</style>
