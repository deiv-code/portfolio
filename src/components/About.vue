<template>
    <section class="bg-[#FAFAFA]">
        <div class="text-center py-20">
            <h2 class="uppercase text-3xl font-bold tracking-wider">about me</h2>
            <div class="w-[20px] mx-auto bg-emerald-500 h-1 rounded-lg my-2" />
            <p>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
        </div>
        <div class="lg:flex xl:mx-60 lg:md-20">
            <div class="p-5">
                <h4 class="text-xl font-bold mb-4">Get to know me!</h4>
                <p class="leading-7 tracking-wide">
                    I'm a Frontend Web Developer building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.
                    <br>
                    I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to Connect or Follow me on my Linkedin where I post useful content related to Web Development and Programming
                    <br>
                    I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.
                </p>
                <div class="w-fit my-10 shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]">
                    <a href="#" class="uppercase py-3 px-14 text-lg text-white font-bold bg-emerald-500 rounded-md">contact</a>
                </div>
            </div>
            <div class="p-5">
                <h4 class="text-xl font-bold mb-4">My Skills</h4>
                <div class="flex flex-wrap">
                    <div v-for="skill in skills" class="bg-[#E7E7E7] p-4 rounded-lg mr-3 mb-3 text-sm">{{ skill }}</div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
    import {ref} from 'vue'

    const skills = ref(['HTML', 'CSS', 'Javascript', 'VueJs', 'SASS', 'GIT', 'NUXT', 'PHP', 'Laravel', 'SQL', 'TailwindCSS', 'C#'])
</script>

<style scoped>

</style>