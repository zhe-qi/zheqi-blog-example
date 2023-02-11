<script setup lang="ts">
const { data: items } = await useAsyncData('items', () => {
  return queryContent('project').find()
})

// 分类
const categories = items.value![0].body.reduce(
  (acc: any[], ele: { category: any }) => {
    if (!acc.includes(ele.category)) { acc.push(ele.category) }
    return acc
  },
  []
)

const activeCategory = ref<any>(null)

// 设置分类
const setCategory = (category: any) => {
  activeCategory.value = category
  useRouter().push({ query: { category } })
}

// 如果有的话就激活分类
onMounted(
  () =>
    useRoute().query.category &&
    (activeCategory.value = useRoute().query.category)
)

// 格式化日期
const formatData = (time: string) => {
  const res = time.split('-').map(e => Number(e))
  return new Intl.DateTimeFormat('zh-CN').format(
    new Date(Date.UTC(res[0], res[1], res[2]))
  )
}

// 过滤标签
const filteritems = computed(() => {
  if (!activeCategory.value) { return items.value![0].body }
  return items.value![0].body.filter(
    (ele: { category: string }) =>
      ele.category.toLowerCase() === activeCategory.value.toLowerCase()
  )
})

useHead({
  title: 'ZheQi Project'
})
</script>

<template>
  <div>
    <main>
      <section class="lg:px-[15%] px-[5%] dark:bg-zinc-800 pb-5 pt-10">
        <!-- title1 -->
        <h1 class="text-2xl font-semibold leading-normal text-center dark:text-yellow-100 text-zinc-600 lg:text-[4rem]">
          {{ $t('保持最新的') }}
        </h1>
        <!-- title2 -->
        <h1 class="text-4xl font-bold leading-normal text-center lg:text-6xl rainbow-text">
          {{ $t('流行趋势') }}
        </h1>
        <!-- body -->
        <div class="mt-10 lg:mt-20">
          <h1 class="mb-5 font-medium dark:text-green-50 lg:text-lg">
            {{ $t('过滤分类') }}:
            <button
              v-show="activeCategory"
              class="hover:bg-primary-100 hover:text-primary dark:bg-slate-800 dark:text-yellow-100 px-3 rounded text-[13px] capitalize bg-gray-200 ml-5"
              @click="setCategory(null)"
            >
              {{ $t('清除') }} &times;
            </button>
          </h1>
          <!-- tabs -->
          <div class="flex flex-wrap items-center mb-5 lg:space-x-5">
            <template v-for="(c, i) in categories" :key="`categroy-${i}`">
              <button
                :class="{
                  'bg-primary-100 text-primary': c == activeCategory,
                  ' bg-zinc-200': c !== activeCategory
                }"
                class="hover:bg-primary-100 hover:text-primary dark:bg-slate-800 dark:text-yellow-100 px-3 py-2 rounded text-[13px] capitalize shrink-0 mr-4 mb-4 lg:mr-0 lg:mb-0"
                @click="setCategory(c)"
              >
                {{ c }}
              </button>
            </template>
          </div>
          <!-- projects -->
          <div class="grid grid-cols-1 gap-10 lg:grid-cols-4 lg:mt-20">
            <template v-for="(p, i) in filteritems" :key="`ele-${i}-${p.id}`">
              <NuxtLink
                :to="`/project/${p.id}`"
                class="transition-all border rounded-md animate-shadow-drop-center dark:hover:text-zinc-900 hover:bg-zinc-400 hover:cursor-pointer"
              >
                <nuxt-img
                  quality="80"
                  format="webp"
                  preset="image"
                  :src="p.image"
                  :alt="p.title"
                  class="dark:brightness-50 w-full h-[300px] object-contain object-center rounded-lg"
                />
                <div class="p-3">
                  <h2 class="text-xl">
                    {{ $t((p.title as string).trim()) }}
                  </h2>
                  <p class="mt-2 text-sm font-bold">
                    {{ formatData(p.time) }}
                  </p>
                </div>
              </NuxtLink>
            </template>
          </div>
        </div>
      </section>
    </main>
    <TheFooter />
  </div>
</template>

<style>

</style>
