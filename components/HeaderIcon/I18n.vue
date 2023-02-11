<script setup lang="ts">
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'

defineProps<{
  isIcon?: boolean
}>()

const { locale } = useI18n()

const current = ref<string>('简体中文')
const availableLocales = [
  { code: 'en', name: 'English' },
  { code: 'zh', name: '简体中文' }
]

const switchLocalePath = (code: string, name: string) => {
  locale.value = code
  current.value = name
}

</script>

<template>
  <Menu as="div" class="relative inline-block text-left">
    <div>
      <MenuButton class="flex items-center justify-center space-x-2">
        <Icon v-show="isIcon" name="uil:english-to-chinese" class="text-xl" />
        <span>{{ current }}</span>
      </MenuButton>
    </div>

    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <MenuItems
        class="absolute right-0 w-32 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      >
        <div v-for="item in availableLocales" :key="item.code" class="px-1 py-1">
          <div class="px-1 py-1">
            <MenuItem v-slot="{ active }" @click="switchLocalePath(item.code, item.name)">
              <button
                :class="[
                  active ? 'bg-zinc-400 text-white' : 'text-gray-900',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm space-x-2',
                ]"
              >
                {{ item.name }}
              </button>
            </MenuItem>
          </div>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>
