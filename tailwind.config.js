/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
module.exports = {
  // 手动模式，依赖vueuse提供的useDark
  darkMode: 'class',
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue'
  ],
  theme: {
    extend: {
      // Set font family
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans]
      },
      // Set theme colors (Required config!)
      colors: {
        primary: {
          DEFAULT: colors.violet[700],
          ...colors.violet
        },
        secondary: colors.slate
      }
    }
  },
  // Add plugins
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms'), require('@tailwindcss/line-clamp')]
}
