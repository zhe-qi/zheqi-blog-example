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
  },
  {
    name: '友情链接',
    path: '/links'
  }
]

const handlerReload = () => {
  location.reload()
}

// 监听屏幕宽度
const { width } = useWindowSize()

const isMobile = ref(false)
watchThrottled(
  width,
  () => {
    isMobile.value = width.value < 768
  },
  { throttle: 500, immediate: true }
)
const toGithub = () => {
  if (isMobile.value) {
    location.href = 'https://github.com/zhe-qi'
  } else {
    window.open('https://github.com/zhe-qi')
  }
}

const navList = [
  {
    name: '博客',
    path: '/home'
  },
  {
    name: '项目',
    path: '/project'
  },
  {
    name: '友情链接',
    path: '/links'
  }
]

const toPath = (path: string) => {
  navigateTo(path)
  isOpen.value = false
}
const target = ref<HTMLElement | null>(null)
const isOpen = ref(false)
onClickOutside(target, () => {
  isOpen.value = false
})

const { locale } = useI18n()

const current = ref<string>('简体中文')
const idx = ref(1)
const availableLocales = [
  { code: 'en', name: 'English' },
  { code: 'zh', name: '简体中文' }
]

const changeLocales = () => {
  idx.value++
  if (idx.value >= availableLocales.length) {
    idx.value = 0
  }
  locale.value = availableLocales[idx.value].code
  current.value = availableLocales[idx.value].name
}

</script>

<template>
  <div class="fixed z-20 w-screen h-16 px-3 border-b md:pr-10 border-slate-200 backdrop-blur-md">
    <div class="flex items-center w-full h-full">
      <!-- 为什么使用v-show而不是v-if呢，等待解决方案，使用v-if v-else，在低端浏览器或者某些手机浏览器当中会造成水合错误1 -->
      <div v-show="isMobile" class="flex items-center justify-between w-full">
        <div ref="target" class="relative flex items-center space-x-4">
          <Icon name="material-symbols:menu" class="text-2xl" @click="isOpen = !isOpen" />
          <ul v-if="isOpen" class="absolute top-[100%] right-0 w-20 space-y-2 rounded dark:bg-zinc-900 bg-cyan-50" @focusout="isOpen = false">
            <li v-for="item in navList" :key="item.name" class="text-center border rounded" @click="toPath(item.path)">
              {{ item.name }}
            </li>
            <li class="overflow-hidden border rounded whitespace-nowrap text-ellipsis" @click.stop="changeLocales()">
              {{ current }}
            </li>
          </ul>
          <NuxtLink to="/" title="首页" class="overflow-hidden text-xl font-bold whitespace-nowrap text-ellipsis lg:text-4xl">
            <div class="rainbow-text dark:text-gray-200">
              zhe-qi
            </div>
          </NuxtLink>
        </div>
        <div class="flex items-center space-x-4">
          <HeaderIconSwitch />
          <Icon name="carbon:logo-github" class="text-3xl cursor-pointer" @click="toGithub" />
        </div>
      </div>
      <div v-show="!isMobile" class="flex items-center justify-between w-full">
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
          <div v-for="item in headerList" :key="item.name" class="overflow-hidden cursor-pointer whitespace-nowrap text-ellipsis hover:text-blue-200" @click="toPath(item.path)">
            {{ $t(item.name) }}
          </div>
          <div class="w-[2px] h-8 rounded-sm bg-zinc-300" />
          <HeaderIconI18n />
          <HeaderIconSwitch />
          <Icon name="carbon:logo-github" class="text-3xl cursor-pointer" @click="toGithub" />
        </div>
      </div>
    </div>
  </div>
</template>
