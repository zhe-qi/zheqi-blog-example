<script setup lang="ts">
</script>

<template>
  <div class="fixed z-20 flex items-center justify-between w-screen h-16 px-2 border-b-2 md:px-10 border-slate-200 backdrop-blur-md">
    <NuxtLink to="/" title="首页" class="text-xl font-bold lg:text-4xl">
      <div class="rainbow-text dark:text-gray-200">
        zhe-qi
      </div>
    </NuxtLink>
    <div class="flex items-center justify-center space-x-1 text-sm md:space-x-4 md:text-base">
      <div class="h-[24px] cursor-pointer hover:text-blue-200">
        {{ $t('备忘录') }}
      </div>
      <div class="h-[24px] cursor-pointer hover:text-blue-200">
        {{ $t('项目') }}
      </div>
      <div class="w-[2px] h-8 rounded-sm bg-zinc-300" />
      <HeaderIconI18n />
      <HeaderIconSwitch />
      <Icon name="carbon:logo-github" class="text-3xl cursor-pointer" />
    </div>
  </div>
</template>
