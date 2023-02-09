import { en, zh } from './locales'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // ssr: true,
  modules: [
    '@nuxt/image-edge',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    'nuxt-icon',
    '@nuxtjs/i18n',
    'nuxt-headlessui',
    '@nuxt/content',
    'nuxt-swiper'
    // https://github.com/nuxt/nuxt/issues/15500 在windows上似乎有问题，暂时不用，mac可以尝试打开
    // '@nuxtjs/robots'
  ],
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  image: {
    provider: 'netlify',
    presets: {
      image: {
        modifiers: {
          format: 'jpg',
          width: 120,
          height: 65
        }
      }
    }
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'zh'
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        // 引入英特尔字体,使用预加载
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com', crossorigin: '' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
        { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' }
      ]
    }
  },
  // plugins: [
  //   {
  //     src: '~/plugins/swiper.ts',
  //     ssr: false
  //   }
  // ],
  // vueuse: {
  //   ssrHandlers: true
  // },
  i18n: {
    // add `vueI18n` option to `@nuxtjs/i18n` module options
    vueI18n: {
      legacy: false,
      locale: 'zh',
      messages: {
        en,
        zh
      }
    }
  },
  content: {
    markdown: {
      toc: {
        depth: 3,
        searchDepth: 3
      }
    },
    highlight: {
      theme: 'dracula-soft'
    }
  },
  headlessui: {
    prefix: 'Headless'
  },
  typescript: {
    strict: true,
    shim: false
  }
})
