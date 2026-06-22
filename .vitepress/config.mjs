import { defineConfig } from 'vitepress'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  title: 'Quarks',
  titleTemplate: ':title |> Quarks',
  description: 'A personal blog about math, science, and programming',
  cleanUrls: true,
  head: [
    ['link', { rel: 'icon', href: '/quark.png' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.bunny.net' }],
  ],
  vite: {
    plugins: [tailwindcss()],
  },
})
