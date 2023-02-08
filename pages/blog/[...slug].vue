<script setup lang="ts">
// 获取文章路径并把逗号替换成/
const slug = useRoute().params.slug.toString().replace(/,/g, '/')

// 获取文章内容
const { data: blog } = await useAsyncData(slug, () => {
  return queryContent(slug).findOne()
})

useHead({
  title: `${blog.value!.title}`
})

</script>

<template>
  <!-- 文章主体 -->
  <article
    class="dark:text-white dark:bg-zinc-800 pt-10 max-w-max overflow-x-hidden lg:pt-20 flex items-start lg:space-x-10 px-[5%] lg:px-[10%]"
  >
    <div class="w-[370px] hidden lg:block">
      <div
        class="dark:bg-black w-20% p-5 fixed top-24 border rounded-md bg-white"
      >
        <h2 class="mb-4 text-sm font-bold">
          Table Of Contents
        </h2>
        <ul class="space-y-2">
          <li v-for="(t, k) in blog?.body.toc.links" :key="`toc-item-${k}`">
            <NuxtLink
              :class="{
                'text-sm ml-4': t.depth == 2,
                'text-[13px] ml-6': t.depth > 2
              }"
              class="overflow-hidden capitalize truncate text-ellipsis whitespace-nowrap"
              :to="`#${t.id}`"
            >
              {{ t.text }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
    <ClientOnly>
      <!-- 渲染文章内容 -->
      <ContentRenderer
        class="w-screen prose-sm prose lg:prose-base prose-slate pr-7 blog-link lg:max-w-none"
        :value="blog!"
      >
        <template #empty>
          <p>No content found.</p>
        </template>
      </ContentRenderer>
    </ClientOnly>
  </article>
</template>

<style scoped lang="postcss">
.blog-link {
  @apply prose-a:text-primary before:prose-headings:content-['#'] before:prose-headings:mr-1 before:prose-headings:text-primary before:prose-h1:content-[''];
}
</style>
