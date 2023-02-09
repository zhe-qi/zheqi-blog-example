<script setup lang="ts">
useHead({
  title: 'ZheQi Home'
})

const { data: user } = await useFetch('/api/user')
const isFilter = ref(false)

const showFilter = () => {
  isFilter.value = !isFilter.value
}
// https://www.dmoe.cc/random.php
// https://img.xjh.me/random_img.php
// https://api.ghser.com/random/api.php

const rdmImg = Array.from({ length: 10 }, (_, i) => {
  return `/images/${i + 2}.jpg`
})

interface ArticleData {
  _path: string
  title: string
  children?: ArticleData[]
  img?: string
}

// 获取所有文章导航
const articleData = ref<ArticleData[]>([])
const { data: blogNav } = await useAsyncData('navigation', () => {
  return fetchContentNavigation(queryContent('blog'))
})
const nav = toRaw(blogNav.value) as Array<ArticleData>
// 递归把所有叶子节点放入数组articleData.value
const recursion = (data: ArticleData[]) => {
  data.forEach(item => {
    if (item.children) {
      recursion(item.children)
    } else {
      articleData.value.push(
        Object.assign(
          { img: rdmImg[Math.floor(Math.random() * rdmImg.length)] },
          item
        )
      )
    }
  })
}
recursion(nav)

const search = ref('')
const indexV = ref(0)

// 使用虚拟列表
// 不区分大小写过滤
const filteredList = computed(() =>
  articleData.value.filter(item =>
    item.title.toLowerCase().includes(search.value.toLowerCase())
  )
)
const { list, containerProps, wrapperProps, scrollTo } = useVirtualList(
  filteredList,
  {
    itemHeight: 22
  }
)
const handleScrollTo = () => {
  if (indexV.value >= 0) { scrollTo(indexV.value) }
}

interface Util {
  url: string
  img: string
  title: string
  text: string
  id: number | string
}

const utils: Util[] = [
  {
    id: '1',
    url: 'https://vuetelescope.com/',
    img: '/images/12.jpg',
    title: 'Vuetelescope',
    text: '这是一个可以查看你vue技术栈的浏览器插件'
  },
  {
    id: '2',
    url: 'https://picsum.photos/',
    img: '/images/2.jpg',
    title: 'Picsum',
    text: '这是一个随机图片API生成工具'
  },
  {
    id: '3',
    url: 'https://tail-animista.vercel.app/play/basic/scale-up/scale-up-center',
    img: '/images/1.jpg',
    title: 'Tailanimista',
    text: '这是一个Tailwindcss的动画生成工具'
  }
]

interface Imgs {
  url: string
  title: string
}
const imgs: Imgs[] = []

for (let i = 2, len = 12; i < len; i++) {
  imgs.push({
    url: `/images/${i}.jpg`,
    title: `图片${i}`
  })
}

</script>

<template>
  <div class="lg:px-[15%] px-[5%] w-full box-border overflow-x-hidden">
    <main class="pt-[4.5rem] w-full">
      <!-- 头上三个大板块 -->
      <div class="grid w-full grid-cols-1 grid-rows-3 lg:grid-cols-3 lg:grid-rows-1 lg:gap-4 lg:h-64">
        <div class="grid grid-cols-2 grid-rows-2 gap-4 mb-5 overflow-hidden rounded dark:contrast-50 md:mb-0">
          <div
            v-for="(item, index) in rdmImg.slice(2, 6)"
            :key="index"
            class="overflow-hidden rounded cursor-pointer w-50 h-30 "
          >
            <nuxt-img
              preset="image"
              loading="lazy"
              class="object-cover w-full h-full transition-all border hover:scale-150"
              :src="item"
              alt="zheqi-blog"
            />
          </div>
        </div>
        <div class="w-full mt-4 overflow-hidden rounded lg:h-full lg:mt-0 h-52">
          <Swiper
            class="w-full h-full cursor-col-resize"
            :modules="[SwiperAutoplay, SwiperEffectCreative]"
            :slides-per-view="1"
            :loop="true"
            :effect="'creative'"
            :autoplay="{
              delay: 5000,
              disableOnInteraction: true,
            }"
            :creative-effect="{
              prev: {
                shadow: false,
                translate: ['-20%', 0, -1],
              },
              next: {
                translate: ['100%', 0, 0],
              },
            }"
          >
            <SwiperSlide v-for="slide in imgs" :key="slide.title">
              <nuxt-img preset="image" loading="lazy" :src="slide.url" alt="slide.title" class="object-cover w-full h-full dark:brightness-75" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div>
          <Introduce :user="user!" class="rounded" />
        </div>
      </div>
      <!-- 文章列表 -->
      <section class="w-full pt-2 lg:pt-7">
        <div class="flex justify-between h-[1000px] overflow-y-hidden w-full">
          <div class="lg:w-[70%] overflow-hidden  w-full h-full border rounded">
            <div class="flex justify-between w-full py-2 border-b dark:text-red-50">
              <div class="pl-2 border-l-2 border-l-purple-500">
                {{ $t('文章列表') }}
              </div>
              <div class="flex items-center cursor-pointer" @click="showFilter">
                {{ $t('条件筛选') }}
                <Icon name="material-symbols:filter-alt" class="ml-2" />
              </div>
            </div>
            <!-- 过滤列表 -->
            <Transition>
              <div v-show="isFilter" class="w-full h-40 p-2">
                <div class="grid w-full grid-cols-3 grid-row-1 h-15">
                  <input v-model="search" type="text" placeholder="filter title" class="input">
                  <input v-model="indexV" type="number" class="ml-2">
                  <button class="ml-2 btn dark:hover:bg-zinc-600 btn-outline btn-info" @click="handleScrollTo">
                    {{ $t('跳转') }}
                  </button>
                </div>
                ......
              </div>
            </Transition>
            <!-- 虚拟列表 -->
            <div class="w-full dark:text-green-50 h-[calc(100%-2.65rem)]" v-bind="(containerProps as any)">
              <div v-bind="wrapperProps">
                <NuxtLink
                  v-for="item in list"
                  :key="'Nav' + item.index + item.data.title"
                  class="flex h-20 p-2 m-2 border"
                  :to="'/blog' + item.data._path"
                >
                  <nuxt-img preset="image" loading="lazy" class="object-cover h-full w-28" :src="item.data.img" alt="" />
                  <div class="ml-2">
                    title:
                    <span class="rainbow-text">{{ $t(item.data.title) }}</span>
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
          <aside class="w-[28%] lg:block hidden">
            <!-- 公告 -->
            <div
              class="w-full p-2 mb-2 overflow-x-hidden overflow-y-scroll prose border rounded dark:text-yellow-50 lg:prose-xs h-75"
            >
              <h1 class="text-xl font-bold text-center dark:text-yellow-50 rainbow-text">
                {{ $t('关于本站') }}
              </h1>
              <p class="overflow-hidden indent-8 text-ellipsis">
                {{
                  $t('互相学习，成长，相关源代码可以在我的github找到，欢迎fork，如果您有什么好的建议或者想法可以添加我的个人微信，提出您宝贵的意见。也欢迎各位同志加入学习群，加我微信邀请您进群，提供大量稀有主流学习资料，模拟面试。我本人很菜，但是群里大佬可以带您一起学习，遇到比我更菜的也可以根据情况解答。')
                }}
              </p>
            </div>
            <div class="w-full border dark:text-yellow-50 h-[1000px] p-2">
              <h1 class="text-xl font-bold text-center rainbow-text dark:text-yellow-50">
                {{ $t('开发工具') }}
              </h1>
              <ul class="w-full h-full">
                <li v-for="item in utils" :key="item.id" class="w-full h-32 p-2 border rounded">
                  <NuxtLink class="flex w-full h-full overflow-auto" target="_blank" :to="item.url">
                    <nuxt-img preset="image" loading="lazy" class="w-40 bg-center bg-cover h-30" :src="item.img" alt="" />
                    <div class="prose w-[60%] ml-2">
                      <h4 class="text-center dark:text-red-50">
                        {{ item.title }}
                      </h4>
                      <p class="dark:text-yellow-50">
                        {{ $t(item.text) }}
                      </p>
                    </div>
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </main>
    <TheFooter />
  </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: all 0.3s;
}

.v-enter-from,
.v-leave-to {
  transform: translateY(-50px);
  opacity: 0;
}
</style>
