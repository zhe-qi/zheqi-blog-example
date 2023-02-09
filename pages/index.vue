<script setup lang="ts">
const List: {
  title: string
  description: string
  path: string
}[] = [
  {
    title: 'Shooting Stars',
    description: 'Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.',
    path: 'M22 12h-4l-3 9L9 3l-3 9H2'
  },
  {
    title: 'The Catalyzer',
    description: 'Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.',
    path: 'M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12'
  },
  {
    title: 'Neptune',
    description: 'Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.',
    path: 'M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2'
  },
  {
    title: 'Melanchole',
    description: 'Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.',
    path: 'M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7'
  },
  {
    title: 'Bunker',
    description: 'Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.',
    path: 'M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z'
  },
  {
    title: 'Ramona Falls',
    description: 'Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.',
    path: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'
  }
]

const step: {
  title: string
  description: string
  path: string
}[] = [{
  title: 'Step 1',
  description: 'Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.',
  path: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'
}, {
  title: 'Step 2',
  description: 'Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.',
  path: 'M22 12h-4l-3 9L9 3l-3 9H2'
}, {
  title: 'Step 3',
  description: 'Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.',
  path: 'M12 22V8M5 12H2a10 10 0 0020 0h-3'
}, {
  title: 'Step 4',
  description: 'Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.',
  path: 'M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2'
}, {
  title: 'Step 5',
  description: 'Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.',
  path: 'M22 4L12 14.01l-3-3'
}]
</script>

<template>
  <div class="box-border w-full h-full px-[10%]">
    <section
      class="flex box-border text-zinc-700 dark:text-zinc-200 items-center justify-between w-full md:my-20 px-[10%] h-[30vh]"
    >
      <div class="md:w-[30vw] md:h-[30vh] w-[60vw] flex flex-col justify-between h-[20vh] rainbow-text">
        <div class="text-3xl md:mt-10 w-full leading-[4rem] h-16 font-bold md:text-[5rem] text-ellipsis whitespace-nowrap overflow-hidden">
          {{ $t('zheqi-blog') }}
        </div>
        <div class="w-[23vw] h-10 mt-2 box-border text-xl font-semibold leading-10 md:mt-5 md:ml-[2em] ml-4 md:text-4xl whitespace-nowrap text-ellipsis overflow-hidden">
          {{ $t('下一代博客模板') }}
        </div>
        <div
          class="flex items-center justify-center space-x-8 text-base font-normal leading-7 text-center text-gray-600 md:leading-10 mt-7 dark:text-zinc-200 md:mt-12"
        >
          <NuxtLink
            to="/home"
            class="block w-16 overflow-hidden border rounded-md md:h-10 h-7 text-ellipsis whitespace-nowrap dark:hover:bg-zinc-700 hover:bg-cyan-50 border-zinc-400 dark:border-zinc-200 md:w-28"
          >
            {{ $t('开始使用') }}
          </NuxtLink>
          <NuxtLink
            to="https://github.com/zhe-qi/zheqi-blog"
            class="block w-16 overflow-hidden border border-gray-300 rounded-md md:h-10 h-7 dark:hover:bg-zinc-800 hover:bg-blue-50 text-ellipsis whitespace-nowrap md:w-28 dark:border-zinc-200"
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
    <section class="text-gray-600 dark:text-zinc-300 body-font">
      <div class="container px-5 mx-auto">
        <div class="flex flex-wrap -m-4">
          <div v-for="item in List" :key="item.title" class="p-4 xl:w-1/3 md:w-1/2">
            <div class="p-6 border border-gray-200 rounded-lg">
              <div class="inline-flex items-center justify-center w-10 h-10 mb-4 text-indigo-500 bg-indigo-100 rounded-full">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path :d="item.path" />
                </svg>
              </div>
              <h2 class="mb-2 text-lg font-medium text-gray-900 dark:text-zinc-300 title-font">
                {{ item.title }}
              </h2>
              <p class="text-base leading-relaxed">
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="text-gray-600 dark:text-zinc-300 body-font">
      <div class="container flex flex-wrap px-5 py-24 mx-auto">
        <div class="flex flex-wrap w-full">
          <div class="space-y-10 lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
            <div v-for="item in step" :key="item.title" class="relative flex pb-12">
              <div class="absolute inset-0 flex items-center justify-center w-10 h-full">
                <div class="w-1 h-full bg-gray-200 pointer-events-none" />
              </div>
              <div class="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-indigo-500 rounded-full">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path :d="item.path" />
                </svg>
              </div>
              <div class="flex-grow pl-4">
                <h2 class="mb-1 text-sm font-medium tracking-wider text-gray-900 dark:text-zinc-300 title-font">
                  {{ item.title }}
                </h2>
                <p class="leading-relaxed">
                  {{ item.description }}
                </p>
              </div>
            </div>
          </div>
          <nuxt-img
            class="object-cover object-center mt-12 rounded-lg lg:w-3/5 md:w-1/2 md:mt-0"
            alt="妮露"
            src="/images/nilu.jpg"
          />
        </div>
      </div>
    </section>
    <section class="text-gray-600 dark:text-zinc-300 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col w-full mb-20 text-center">
          <h1 class="mb-4 text-2xl font-medium text-gray-900 sm:text-3xl title-font">
            Our Team
          </h1>
          <p class="mx-auto text-base leading-relaxed lg:w-2/3">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.
          </p>
        </div>
        <div class="flex flex-wrap -m-2">
          <div class="w-full p-2 lg:w-1/3 md:w-1/2">
            <div class="flex items-center h-full p-4 border border-gray-200 rounded-lg">
              <img alt="team" class="flex-shrink-0 object-cover object-center w-16 h-16 mr-4 bg-gray-100 rounded-full" src="https://dummyimage.com/80x80">
              <div class="flex-grow">
                <h2 class="font-medium text-gray-900 title-font">
                  Holden Caulfield
                </h2>
                <p class="text-gray-500">
                  UI Designer
                </p>
              </div>
            </div>
          </div>
          <div class="w-full p-2 lg:w-1/3 md:w-1/2">
            <div class="flex items-center h-full p-4 border border-gray-200 rounded-lg">
              <img alt="team" class="flex-shrink-0 object-cover object-center w-16 h-16 mr-4 bg-gray-100 rounded-full" src="https://dummyimage.com/84x84">
              <div class="flex-grow">
                <h2 class="font-medium text-gray-900 title-font">
                  Henry Letham
                </h2>
                <p class="text-gray-500">
                  CTO
                </p>
              </div>
            </div>
          </div>
          <div class="w-full p-2 lg:w-1/3 md:w-1/2">
            <div class="flex items-center h-full p-4 border border-gray-200 rounded-lg">
              <img alt="team" class="flex-shrink-0 object-cover object-center w-16 h-16 mr-4 bg-gray-100 rounded-full" src="https://dummyimage.com/88x88">
              <div class="flex-grow">
                <h2 class="font-medium text-gray-900 title-font">
                  Oskar Blinde
                </h2>
                <p class="text-gray-500">
                  Founder
                </p>
              </div>
            </div>
          </div>
          <div class="w-full p-2 lg:w-1/3 md:w-1/2">
            <div class="flex items-center h-full p-4 border border-gray-200 rounded-lg">
              <img alt="team" class="flex-shrink-0 object-cover object-center w-16 h-16 mr-4 bg-gray-100 rounded-full" src="https://dummyimage.com/90x90">
              <div class="flex-grow">
                <h2 class="font-medium text-gray-900 title-font">
                  John Doe
                </h2>
                <p class="text-gray-500">
                  DevOps
                </p>
              </div>
            </div>
          </div>
          <div class="w-full p-2 lg:w-1/3 md:w-1/2">
            <div class="flex items-center h-full p-4 border border-gray-200 rounded-lg">
              <img alt="team" class="flex-shrink-0 object-cover object-center w-16 h-16 mr-4 bg-gray-100 rounded-full" src="https://dummyimage.com/94x94">
              <div class="flex-grow">
                <h2 class="font-medium text-gray-900 title-font">
                  Martin Eden
                </h2>
                <p class="text-gray-500">
                  Software Engineer
                </p>
              </div>
            </div>
          </div>
          <div class="w-full p-2 lg:w-1/3 md:w-1/2">
            <div class="flex items-center h-full p-4 border border-gray-200 rounded-lg">
              <img alt="team" class="flex-shrink-0 object-cover object-center w-16 h-16 mr-4 bg-gray-100 rounded-full" src="https://dummyimage.com/98x98">
              <div class="flex-grow">
                <h2 class="font-medium text-gray-900 title-font">
                  Boris Kitua
                </h2>
                <p class="text-gray-500">
                  UX Researcher
                </p>
              </div>
            </div>
          </div>
          <div class="w-full p-2 lg:w-1/3 md:w-1/2">
            <div class="flex items-center h-full p-4 border border-gray-200 rounded-lg">
              <img alt="team" class="flex-shrink-0 object-cover object-center w-16 h-16 mr-4 bg-gray-100 rounded-full" src="https://dummyimage.com/100x90">
              <div class="flex-grow">
                <h2 class="font-medium text-gray-900 title-font">
                  Atticus Finch
                </h2>
                <p class="text-gray-500">
                  QA Engineer
                </p>
              </div>
            </div>
          </div>
          <div class="w-full p-2 lg:w-1/3 md:w-1/2">
            <div class="flex items-center h-full p-4 border border-gray-200 rounded-lg">
              <img alt="team" class="flex-shrink-0 object-cover object-center w-16 h-16 mr-4 bg-gray-100 rounded-full" src="https://dummyimage.com/104x94">
              <div class="flex-grow">
                <h2 class="font-medium text-gray-900 title-font">
                  Alper Kamu
                </h2>
                <p class="text-gray-500">
                  System
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>

</style>
