<script setup>
import { RouterLink, RouterView } from 'vue-router'
import LinkBlock from '@/components/LinkBlock.vue'
</script>

<template>
  <main>
    <div class="h-screen w-screen bg-orange-200 text-stone-900 overflow-y-scroll">
      <h1 class="text-center py-10 font-title text-4xl font-bold text-indigo-400" >Drawing Studio</h1>
      <p class="font-mono text-center py-10">This little studio is a place where I can make quick drawings. I hope you enjoy the visit.</p>
      <nav class="px-10 max-w-[1000px] m-auto flex justify-center intems-center gap-10 flex-wrap">
        <RouterLink to="/windmill">
          <LinkBlock class="bg-blue-300 hover:bg-blue-400">
            The windmill
          </LinkBlock>
        </RouterLink>
        <RouterLink to="/flowers">
          <LinkBlock class="bg-pink-300 hover:bg-pink-400">
            Blooming vase
          </LinkBlock>
        </RouterLink>
        <RouterLink to="/light">
          <LinkBlock class="bg-purple-300 hover:bg-purple-400">
            Living roomn
          </LinkBlock>
        </RouterLink>
        <RouterLink to="/cap">
          <LinkBlock class="bg-red-300 hover:bg-red-400">
            Cap
          </LinkBlock>
        </RouterLink>
        <LinkBlock class="h-0"> </LinkBlock>
        <LinkBlock class="h-0"> </LinkBlock>
        <LinkBlock class="h-0"> </LinkBlock>
        <LinkBlock class="h-0"> </LinkBlock>

      </nav>
  </div>
  </main>
</template>
