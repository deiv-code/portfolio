<template>
  <section class="py-20 bg-gradient-to-b from-gray-50 to-white">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold tracking-tight relative inline-block">
          <span class="relative z-10">Projects</span>
          <span
            class="absolute bottom-1 left-0 w-full h-3 bg-emerald-200 opacity-50 z-0"
          ></span>
        </h2>
        <p class="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Here you will find some of my featured work that showcases my skills
          and experience in software development
        </p>
      </div>

      <!-- Projects Grid -->
      <div class="space-y-24">
        <!-- Project 1: Fanta Chat -->
        <div class="project-card">
          <div class="lg:grid lg:grid-cols-12 gap-x-8 gap-y-10 items-center">
            <div class="col-span-5 mb-10">
              <div
                class="rounded-xl overflow-hidden shadow-2xl h-[300px] flex items-center justify-center bg-white"
              >
                <img
                  src="../assets/fantachat.png"
                  class="w-full h-full object-contain p-4"
                  alt="Fanta Chat"
                />
              </div>
            </div>
            <div class="col-span-7 lg:pl-8">
              <div class="flex items-center mb-4">
                <div class="h-px bg-emerald-500 w-12 mr-4"></div>
                <span
                  class="text-emerald-600 font-medium uppercase text-sm tracking-wider"
                  >Featured Project</span
                >
              </div>
              <h3 class="text-3xl font-bold mb-4">Fanta Chat</h3>
              <div class="bg-white p-6 rounded-lg shadow-lg mb-6">
                <p class="text-gray-600 leading-relaxed">
                  Designed for 'FantaCalcio' fans, this web app gives Serie A
                  player insights and advice to the users, thanks to ChatGPT's
                  API. It's crafted with Next.js for frontend and backend
                  integration, styled with Tailwind CSS, and powered by the
                  OpenAI API for chat and embeddings. During this project, I've
                  honed my skills in Next.js, dabbled in web scraping, and
                  started navigating the world of vector databases, broadening
                  my development toolkit.
                </p>
              </div>
              <div class="flex flex-wrap gap-3 mb-6">
                <span
                  class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >Next.js</span
                >
                <span
                  class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >Tailwind CSS</span
                >
                <span
                  class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >OpenAI API</span
                >
                <span
                  class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >Vector DB</span
                >
              </div>
              <a
                href="https://www.fanta.chat/"
                class="inline-flex items-center px-6 py-3 bg-emerald-500 text-white font-medium rounded-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Website
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Project 2: Shardic Bot -->
        <div class="project-card">
          <div class="lg:grid lg:grid-cols-12 gap-x-8 gap-y-10 items-center">
            <div class="col-span-7 order-2 lg:order-1 lg:pr-8">
              <div class="flex items-center mb-4">
                <div class="h-px bg-emerald-500 w-12 mr-4"></div>
                <span
                  class="text-emerald-600 font-medium uppercase text-sm tracking-wider"
                  >Blockchain Project</span
                >
              </div>
              <h3 class="text-3xl font-bold mb-4">Shardic Bot</h3>
              <div class="bg-white p-6 rounded-lg shadow-lg mb-6">
                <p class="text-gray-600 leading-relaxed">
                  Blockchain-based bot for onchain token analysis. It uses the
                  Helius RPCs to gather information from the Solana blockchain.
                  It scrapes the data and uses it to give the user insights
                  about the token and the market. Along with token analysis, it
                  also has a GitHub repo analyzer and a Twitter username reuse
                  checker. This project was built using Next.js and Tailwind
                  CSS.
                </p>
              </div>
              <div class="flex flex-wrap gap-3 mb-6">
                <span
                  class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >Next.js</span
                >
                <span
                  class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >Tailwind CSS</span
                >
                <span
                  class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >Solana</span
                >
                <span
                  class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >Blockchain</span
                >
              </div>
              <a
                href="https://shardicbot.com/"
                class="inline-flex items-center px-6 py-3 bg-emerald-500 text-white font-medium rounded-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Website
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
            <div class="col-span-5 mb-10 order-1 lg:order-2">
              <div
                class="rounded-xl overflow-hidden shadow-2xl h-[300px] flex items-center justify-center bg-white"
              >
                <img
                  src="../assets/shardic.png"
                  class="w-full h-full object-contain p-4"
                  alt="Shardic Bot"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Project 3: Chartwiz -->
        <div class="project-card">
          <div class="lg:grid lg:grid-cols-12 gap-x-8 gap-y-10 items-center">
            <div class="col-span-5 mb-10">
              <div
                class="rounded-xl overflow-hidden shadow-2xl h-[300px] flex items-center justify-center bg-white"
              >
                <img
                  src="../assets/chartwiz.png"
                  class="w-full h-full object-contain p-4"
                  alt="Chartwiz"
                />
              </div>
            </div>
            <div class="col-span-7 lg:pl-8">
              <div class="flex items-center mb-4">
                <div class="h-px bg-emerald-500 w-12 mr-4"></div>
                <span
                  class="text-emerald-600 font-medium uppercase text-sm tracking-wider"
                  >Mobile App</span
                >
              </div>
              <h3 class="text-3xl font-bold mb-4">Chartwiz</h3>
              <div class="bg-white p-6 rounded-lg shadow-lg mb-6">
                <p class="text-gray-600 leading-relaxed">
                  Chartwiz is an iOS app that allows users to take a photo of a
                  chart and get insights about it. It uses the OpenAI API to
                  analyze the chart and provide the user with meaningful
                  interpretations and data points. This project was built using
                  React Native and leverages computer vision capabilities
                  through the OpenAI API.
                </p>
              </div>
              <div class="flex flex-wrap gap-3 mb-6">
                <span
                  class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >React Native</span
                >
                <span
                  class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >iOS</span
                >
                <span
                  class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >OpenAI API</span
                >
                <span
                  class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >Computer Vision</span
                >
              </div>
              <a
                href="https://apps.apple.com/us/app/chartwiz/id6742327246"
                class="inline-flex items-center px-6 py-3 bg-emerald-500 text-white font-medium rounded-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit App
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.project-card {
  position: relative;
}

.project-card::after {
  content: "";
  position: absolute;
  bottom: -3rem;
  left: 50%;
  transform: translateX(-50%);
  width: 60%;
  height: 1px;
  background: linear-gradient(
    to right,
    transparent,
    rgba(203, 213, 225, 0.7),
    transparent
  );
}

.project-card:last-child::after {
  display: none;
}
</style>
