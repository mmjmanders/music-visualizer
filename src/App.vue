<script setup lang="ts">
import { VueQueryDevtools } from '@tanstack/vue-query-devtools'
import { routes } from '@/router'
</script>

<template>
  <header class="w-full bg-neutral-100">
    <nav class="h-14 w-full lg:w-1/2 lg:mx-auto flex justify-start items-center px-4">
      <RouterLink
        :to="route.path"
        role="navigation"
        v-for="route in routes"
        :key="route.path"
        activeClass="text-neutral-900 bg-neutral-200"
        class="px-4 flex items-center h-full text-neutral-500 hover:text-neutral-900"
        >{{ route.name }}</RouterLink
      >
    </nav>
  </header>
  <main class="m-4">
    <RouterView />
  </main>
  <VueQueryDevtools />
</template>

<style scoped></style>
