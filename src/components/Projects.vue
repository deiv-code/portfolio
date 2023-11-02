<template>
    <section class="xl:mx-[10%]">
        <div class="text-center py-20">
            <h2 class="uppercase text-3xl font-bold tracking-wider">projects</h2>
            <div class="w-[20px] mx-auto bg-emerald-500 h-1 rounded-lg my-6" />
            <p class="mx-20 text-lg">Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
        </div>
        <div class="xl:mx-20 mx-10" v-for="project in projects">
            <div class="lg:flex items-center sm:text-center mb-10">
                <div class="mx-auto">
                    <img :src="project.image" class="max-w-[30rem]" alt="">
                </div>
                <div class="lg:pl-20">
                    <h4 class="font-bold tracking-wider text-2xl my-10">{{ project.title }}</h4>
                    <p class="leading-8 text-gray-500 text-lg">{{ project.desc }}</p>
                    <div class="w-fit my-10 shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] mx-auto">
                        <a :href="project.link" class="uppercase py-3 px-14 text-lg text-white font-bold bg-emerald-500 rounded-md">visit</a>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
    import {ref} from 'vue'

    const projects = ref([
        {
            image: '/src/assets/fantachatpc.png',
            title: 'Fanta Chat',
            desc: "Designed for 'FantaCalcio' fans, this web app gives Serie A player insights and advice to the users, thanks to ChatGPT’s API. It's crafted with Vue.js, Nuxt.js for backend integration, styled with Tailwind CSS, and powered by the OpenAI API for chat and embeddings. During this project, I've honed my skills in Nuxt.js, dabbled in web scraping, and started navigating the world of vector databases, broadening my development toolkit.",
            link: 'https://fantachat-daviddume.vercel.app/'
        },
        {
            image: '/src/assets/moviespc.png',
            title: 'Nuxt Movies',
            desc: 'This is the very first app i made using NuxtJS. Its a simple webapp that lets the users search for their favourite movies using MovieDB APIs. While building this app i learned how to build a functional website with NuxtJS and how to use routes.',
            link: 'https://nuxt-movies-eta.vercel.app/'
        },
    ])
</script>

<style scoped>

</style>