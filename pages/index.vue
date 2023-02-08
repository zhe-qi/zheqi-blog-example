<script setup lang="ts">

</script>

<template>
  <div class="w-full h-full">
    <section class="box-border overflow-hidden flex text-zinc-700 dark:text-zinc-200 items-center justify-between w-full md:h-[30rem] h-[10rem] px-[10%] md:px-[15%]">
      <div class="text-xl font-bold md:text-[5rem] md:pt-10 pt-2  md:h-48 h-24 md:w-[28rem] w-36 rainbow-text">
        {{ $t('zheqi-blog') }}
        <div class="box-border mt-2 ml-5 text-base md:mt-16 md:ml-24 md:text-4xl">
          {{ $t('下一代博客模板') }}
        </div>
        <div class="flex items-center mt-2 space-x-8 text-base font-normal leading-10 text-center text-black dark:text-zinc-200 md:mt-12">
          <NuxtLink to="/home" class="block h-10 overflow-hidden border rounded-md text-ellipsis whitespace-nowrap border-zinc-400 dark:border-zinc-200 w-28 bg-cyan-400 dark:bg-cyan-700">
            {{ $t('开始使用') }}
          </NuxtLink>
          <NuxtLink to="https://github.com/zhe-qi/zheqi-blog" class="flex items-center justify-center h-10 overflow-hidden bg-white border rounded-md text-ellipsis whitespace-nowrap border-zinc-400 dark:border-zinc-200 dark:bg-black w-28">
            <span>{{ $t('了解更多') }}</span> <Icon name="material-symbols:chevron-right" class="text-2xl" />
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
  </div>
</template>

<style scoped>

</style>
