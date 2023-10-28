<template>
  <header class="bg-white ">
    <nav class="flex items-center justify-between px-4 py-1 text-gray-600">
      <h3 class="font-sans font-bold text-xl tracking-widest hover:text-emerald">
        <a href="">DAVID DUME</a>
      </h3>
      <div class="md:block hidden">
        <ul class="flex">
          <li class="p-6 font-semibold tracking-widest ">
            <a href="" class="hover:text-emerald-500">HOME</a>
          </li>
          <li class="p-6 font-semibold tracking-widest ">
            <a href="" class="hover:text-emerald-500">ABOUT</a>
          </li>
          <li class="p-6 font-semibold tracking-widest ">
            <a href="" class="hover:text-emerald-500">PROJECTS</a>
          </li>
          <li class="p-6 font-semibold tracking-widest ">
            <a href="" class="hover:text-emerald-500">CONTACT</a>
          </li>
        </ul>
      </div>
      <div class="md:hidden" @click="showMenu = !showMenu">
        <div :class="showMenu ? '' :'hidden'">
          <i class="pi pi-times" ></i> 
        </div>
        <div  :class="showMenu ? 'hidden' :''">
          <i class="pi pi-align-justify"></i>
        </div>
               
      </div>
    </nav>
    <div class="bg-white text-right shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] md:hidden animate-fade" :class="showMenu ? '' : 'hidden'">
        <ul class="text-gray-600">
          
          <li class="p-4 border-t-2 border-gray-200 font-semibold tracking-widest ">
            <a href="" class="hover:text-emerald-500">HOME</a>
          </li>
          <li class="p-4 border-t-2 font-semibold tracking-widest ">
            <a href="" class="hover:text-emerald-500">ABOUT</a>
          </li>
          <li class="p-4 border-t-2 font-semibold tracking-widest ">
            <a href="" class="hover:text-emerald-500">PROJECTS</a>
          </li>
          <li class="p-4 border-t-2 font-semibold tracking-widest ">
            <a href="" class="hover:text-emerald-500">CONTACT</a>
          </li>
        </ul>
      </div>
      
  </header>
</template>

<script setup lang="ts">
  import {ref} from 'vue'

  const showMenu = ref(false)

</script>
