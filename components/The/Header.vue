<script setup lang="ts">
const body = ref<HTMLElement | null>(null)

onMounted(() => {
  body.value = document.body
})

const { isFullscreen, toggle } = useFullscreen(body)

const headerList = [
  {
    name: '博客',
    path: '/home'
  },
  {
    name: '项目',
    path: '/project'
  }
]

const handlerToPath = (path: string) => {
  switch (path) {
    case '/home':
      navigateTo(path)
      break
    case '/project':
      navigateTo(path)
      break
    default:
      break
  }
}

const handlerReload = () => {
  location.reload()
}

</script>

<template>
  <div class="fixed z-20 flex items-center justify-between w-screen h-16 px-3 border-b-2 md:pr-10 border-slate-200 backdrop-blur-md">
    <div class="flex items-center justify-center space-x-1 text-3xl md:space-x-4">
      <div class="hidden cursor-pointer md:block" @click="toggle">
        <Icon v-if="isFullscreen" name="material-symbols:fullscreen-exit" />
        <Icon v-else name="material-symbols:fullscreen" />
      </div>
      <div class="text-2xl cursor-pointer">
        <Icon name="tabler:reload" @click="handlerReload" />
      </div>
      <div class="w-[2px] h-8 rounded-sm bg-zinc-300" />
      <NuxtLink to="/" title="首页" class="overflow-hidden text-xl font-bold whitespace-nowrap text-ellipsis lg:text-4xl">
        <div class="rainbow-text dark:text-gray-200">
          zhe-qi
        </div>
      </NuxtLink>
    </div>
    <div class="flex items-center justify-center space-x-2 text-sm md:space-x-4 md:text-base">
      <div class="w-[2px] h-8 rounded-sm bg-zinc-300 md:hidden block" />
      <div v-for="item in headerList" :key="item.name" class="overflow-hidden cursor-pointer whitespace-nowrap text-ellipsis hover:text-blue-200" @click="handlerToPath(item.path)">
        {{ $t(item.name) }}
      </div>
      <div class="w-[2px] h-8 rounded-sm bg-zinc-300" />
      <HeaderIconI18n />
      <HeaderIconSwitch />
      <Icon name="carbon:logo-github" class="text-3xl cursor-pointer" />
    </div>
  </div>
</template>
