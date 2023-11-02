<template>
    <section class="bg-[#FAFAFA]">
        <div class="text-center py-20">
            <h2 class="uppercase text-3xl font-bold tracking-wider">about me</h2>
            <div class="w-[20px] mx-auto bg-emerald-500 h-1 rounded-lg my-2" />
            <p>In this portfolio, you'll find samples of my work that reflect my current skills and the path I am enthusiastically building in web development.</p>
        </div>
        <div class="lg:flex xl:mx-60 lg:md-20">
            <div class="p-5">
                <h4 class="text-xl font-bold mb-4">Get to know me!</h4>
                <div class="leading-7 tracking-wide">
                    <p>I'm a passionate Web Developer with a foundational skill set in modern web technologies and a rampant enthusiasm for learning and innovation. </p>
                    <br />
                    <p>
                        I Am an enthusiastic junior web developer with a zest for turning ideas into beautiful,<span class="font-semibold">functional</span> websites. My journey in web development started with a curiosity for how web applications are built and a strong desire to create. This passion quickly evolved into a dedicated pursuit of knowledge in <span class="font-semibold">front-end</span> and <span class="font-semibold">back-end</span> technologies.
                    </p>

                    <br>
                    I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.
                </div>
                <div class="w-fit my-10 shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]">
                    <a href="mailto: dumedavid11@gmail.com" class="uppercase py-3 px-14 text-lg text-white font-bold bg-emerald-500 rounded-md">contact</a>
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