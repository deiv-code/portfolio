<template>
    <div class="bg">
        <div class="bg-white p-3 absolute top-[400px] hidden lg:flex flex-col">
            <a href="" class="text-2xl my-2">
                <i class="pi pi-linkedin hover:text-emerald-700"></i>
            </a>
            <a href="" class="text-2xl my-2">
                <i class="pi pi-github hover:text-emerald-700 "></i>
            </a>
        </div>
        <div class="flex items-center justify-center py-40 md:py-80">
            
            <div class="md:mx-[200px] xl:mx-[400px] text-center">
                <h1 class="uppercase text-4xl md:text-6xl font-bold tracking-widest">hey, I'm David Dume</h1>
                <p class="pt-10 pb-16 leading-6 md:text-xl tracking-wider mx-8">A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
                <div class="transition duration-500 transform hover:scale-125 w-fit mx-auto">
                    <a href="#" class="uppercase py-3 px-14 text-lg text-white font-bold bg-emerald-500 rounded-md">Projects</a>
                </div>
                
            </div>       
        </div>
        <div class="text-center text-3xl animate-bounce">
            <i class="pi pi-arrow-down"></i>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

    .bg {
        
        background: linear-gradient(to right,rgba(245,245,245,.8),rgba(245,245,245,.8)), url('../assets/bg.svg');
    }

</style>