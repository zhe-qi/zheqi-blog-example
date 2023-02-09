<template>
  <div>
    <slot name="app-before">
      <BG />
      <GoTop />
    </slot>
    <div id="app-before" />
    <div class="flex flex-col min-h-screen overflow-x-hidden">
      <slot name="header">
        <TheHeader />
      </slot>
      <div class="flex flex-col flex-1 w-full">
        <div
          class="relative flex flex-col flex-1 w-full h-full pt-16"
        >
          <slot />
        </div>
      </div>
    </div>
    <slot name="app-after" />
    <div id="app-after" />
  </div>
</template>
