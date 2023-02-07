<script setup lang="ts">
import { Switch } from '@headlessui/vue'

const { toggleDark, isDark } = useTheme()

</script>

<template>
  <Switch
    class="dark:bg-zinc-700 bg-zinc-200 relative inline-flex h-[29px] w-[54px] items-center shrink-0 cursor-pointer rounded-full border-2 border-gray-300 transition-colors duration-200 ease-in-out"
    @click="toggleDark()"
  >
    <div
      aria-hidden="true"
      class=" dark:translate-x-[1.6rem] translate-x-[0.1rem] pointer-events-none inline-flex justify-center items-center h-[23px] w-[23px] transform rounded-full bg-white shadow-lg text-black ring-0 transition duration-200 ease-in-out"
    >
      <Icon v-if="isDark" name="material-symbols:dark-mode-outline" />
      <Icon v-else name="material-symbols:sunny-outline" />
    </div>
  </Switch>
</template>

<style scoped>

</style>
