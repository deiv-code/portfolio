<template>
  <header class="bg-red-400 p-1">
    <nav class="flex md:items-center justify-between px-4">
      <h3>David Dume</h3>
      <div class="md:block hidden">
        <ul class="flex">
          <li class="p-2">HOME</li>
          <li class="p-2">ABOUT</li>
          <li class="p-2">PROJECTS</li>
          <li class="p-2">CONTACT</li>
        </ul>
      </div>
      <div class="md:hidden text-right" @click="showMenu = !showMenu">
        <button class="space-y-1">
          <span class="block w-6 h-[2px] bg-white rounded"></span>
          <span class="block w-6 h-[2px] bg-white rounded"></span>
          <span class="block w-6 h-[2px] bg-white rounded"></span>
        </button>
        <div class=" relative" :class="showMenu ? '' : 'hidden'">
          <ul class=" ">
            <li>HOME</li>
            <li>ABOUT</li>
            <li>PROJECTS</li>
            <li>CONTACT</li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
  import {ref} from 'vue'

  const showMenu = ref(false)

</script>
