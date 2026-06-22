<script setup>
import { useRoute } from 'vitepress'

const route = useRoute()
const isHome = route.path === '/'
</script>

<template>
  <div class="bg-slate-100 font-sans text-lg leading-relaxed text-slate-800 antialiased min-h-dvh">
    <header class="container mr-auto p-8">
      <span v-if="isHome" class="text-2xl font-semibold">
        QUARKS
      </span>
      <a v-else href="/">
        <span aria-hidden="true">🔙</span>
        back to homepage
      </a>
    </header>

    <main class="container mr-auto rounded-r-lg bg-white p-8">
      <div class="content">
        <Content />
      </div>
    </main>

    <footer class="container mr-auto flex items-center justify-between p-8">
      <a href="#top">
        <span aria-hidden="true">🔝</span>
        back to top
      </a>

      <span class="flex items-center gap-3">
        <a href="https://github.com/levonium/quarks">
          <span aria-hidden="true">🐙</span>
          source code
        </a>

        <a href="https://levon.dev">
          <span aria-hidden="true">👨‍🏭</span>
          levon.dev
        </a>
      </span>
    </footer>
  </div>
</template>
