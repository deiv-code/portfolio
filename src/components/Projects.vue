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
                    <img :src="project.image" class="mx-auto" alt="">
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
            image: 'https://placehold.co/600x400',
            title: 'Fanta Chat',
            desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium unde assumenda maxime debitis? Qui magni nihil enim fuga placeat hic, ex temporibus vero neque, corrupti delectus doloremque quas atque ab?',
            link: '/'
        },
        {
            image: 'https://placehold.co/600x400',
            title: 'Fanta Chat',
            desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium unde assumenda maxime debitis? Qui magni nihil enim fuga placeat hic, ex temporibus vero neque, corrupti delectus doloremque quas atque ab?',
            link: '/'
        },
        {
            image: 'https://placehold.co/600x400',
            title: 'Fanta Chat',
            desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium unde assumenda maxime debitis? Qui magni nihil enim fuga placeat hic, ex temporibus vero neque, corrupti delectus doloremque quas atque ab?',
            link: '/'
        },
    ])
</script>

<style scoped>

</style>