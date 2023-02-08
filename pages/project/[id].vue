<script setup lang="ts">
const id = useRoute().params.id

const { data: item } = await useAsyncData('item-' + id, async () => {
  const q = await queryContent('project').only('body').findOne()
  return q.body.find((p: { id: number }) => p.id === parseInt(id as string))
})

const time = (item.value.time as string).split('-').map(e => Number(e))
const formatData = () =>
  new Intl.DateTimeFormat('zh-CN').format(
    new Date(Date.UTC(time[0], time[1], time[2]))
  )

// Set header
useHead({
  title: `ZheQi ${item.value.title}`
})
</script>

<template>
  <div>
    <main class="dark:bg-black pt-16 dark:text-yellow-50 h-[100vh] overflow-hidden">
      <section class="lg:px-[10%] pt-10 px-[5%] pb-16">
        <div class="relative flex flex-col items-start lg:flex-row lg:gap-7">
          <div class="flex-1">
            <nuxt-img class="object-cover h-[20vh] lg:h-[70vh] dark:brightness-50" :src="item.image"
              :alt="item.title" />
          </div>
          <div class="flex-1">
            <p
              class="hidden px-4 py-1 text-sm text-gray-500 capitalize bg-gray-200 rounded dark:bg-zinc-600 dark:text-yellow-100 lg:inline-block">
              {{ item.category }}
            </p>
            <h1 class="my-5 text-xl font-bold lg:text-3xl lg:my-6">
              {{ item.title }}
            </h1>
            <div class="flex items-center space-x-1">
              <span>难度：</span>
              <div v-for="(r, i) in 5" :key="`itemRating-${i}`">
                <Icon name="ri:star-fill" :class="{
                  'text-yellow-200': i < Math.round(item.rating.rate)
                }" />
              </div>
            </div>
            <div class="text-sm lg:text-lg">
              star: <span class="text-red-400">{{ item.rating.star }}</span>
            </div>
            <p class="mt-2 text-sm lg:text-3xl lg:mt-8">
              {{ formatData() }}
            </p>
            <p class="mt-5 text-xs text-gray-500 whitespace-pre-wrap lg:text-base">
              {{ item.description }}
            </p>
            <div class="flex items-center mt-2 space-x-5 lg:mt-12">
              <NuxtLink :to="item.github"
                class="w-full py-4 text-center text-white rounded-md dark:brightness-50 rainbow-bg">
                To GitHub
              </NuxtLink>
              <button>
                <Icon name="ph:heart-straight" class="text-gray-500 w-7 h-7" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>

</style>
