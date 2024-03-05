import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'index': 'url(/assets/index-background.png)',
      },
      colors: {
        primary: {
          400: '#D86A6A', // hover red
          500: '#EE2737', // logo red
          600: '#CB303D', // float item red
          700: '#C13541', // title red
        },
        secondary: {
          400: '#BC9496', // light content
          500: '#6E4648', // text
        },
        light: {
          500: '#FDD5BD', // background
        },
      },
    },
  },
  plugins: [],
}
export default config
