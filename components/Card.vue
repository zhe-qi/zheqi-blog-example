<script setup lang="ts">

</script>

<template>
  <article
    class="rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:shadow-sm"
  >
    <div class="rounded-[10px] bg-white dark:bg-black p-4 !pt-20 sm:p-6">
      <time datetime="2022-10-10" class="block text-xs text-gray-500 dark:text-zinc-200">
        {{ $t('10th Oct 2022') }}
      </time>

      <a href="#">
        <h3 class="mt-0.5 text-lg font-medium text-gray-900 dark:text-zinc-400">
          {{ $t('How to center an element using JavaScript and jQuery') }}
        </h3>
      </a>

      <div class="flex flex-wrap gap-1 mt-4">
        <span
          class="whitespace-nowrap rounded-full bg-purple-100 dark:bg-purple-400 px-2.5 py-0.5 text-xs text-purple-600 dark:text-purple-900"
        >
          {{ $t('Snippet') }}
        </span>

        <span
          class="whitespace-nowrap rounded-full bg-purple-100 dark:bg-purple-400 px-2.5 py-0.5 text-xs text-purple-600 dark:text-purple-900"
        >
          JavaScript
        </span>
      </div>
    </div>
  </article>
</template>

<style scoped>

</style>
