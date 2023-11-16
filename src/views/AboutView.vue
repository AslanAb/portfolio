<script setup>
import developer from '@/assets/developer.json'
import { ref } from 'vue'
import { Vue3Lottie } from 'vue3-lottie'

const isShow = ref(false)
</script>

<template>
  <main class="flex flex-col items-center">
    <h1 class="my-3 text-3xl font-extrabold tracking-wider lg:my-4 lg:text-4xl">
      About <span class="text-deep-sky-blue hover:brightness-200">me</span>
    </h1>
    <div class="mt-3 w-[60vw] sm:w-[35vw] lg:mt-8 lg:w-[25vw] xl:w-[300px]">
      <Vue3Lottie :animationData="developer"></Vue3Lottie>
    </div>
    <h2 class="my-4 text-2xl font-bold text-deep-sky-blue hover:brightness-200">
      Frontend Developer!
    </h2>
    <p class="my-2 w-full px-3 text-justify indent-4 md:px-0 lg:w-2/3 lg:indent-12">
      I have successfully graduated from the 'IT STEP' Computer Academy with a focus on Front-end
      development.
    </p>
    <p class="my-2 w-full px-3 text-justify indent-4 md:px-0 lg:w-2/3 lg:indent-12" v-show="isShow">
      Throughout my studies, I gained expertise in HTML, CSS, JS, and explored frameworks/libraries
      such as Node (back-end), Vue, React, and Angular. My emphasis was on the React library, and I
      utilized the Next.js framework to develop my diploma project.
    </p>
    <p class="my-2 w-full px-3 text-justify indent-4 md:px-0 lg:w-2/3 lg:indent-12" v-show="isShow">
      Entering the job market a year ago, I deliberately chose the IT field, driven by my passion
      and eagerness to delve deeper into the profession.
    </p>
    <p class="my-2 w-full px-3 text-justify indent-4 md:px-0 lg:w-2/3 lg:indent-12" v-show="isShow">
      During my learning journey, I took the initiative to independently seek information and solve
      complex problems. While I have made significant progress, I recognize the value of having an
      experienced mentor to accelerate my path towards becoming a senior web developer.
    </p>
    <p class="my-2 w-full px-3 text-justify indent-4 md:px-0 lg:w-2/3 lg:indent-12" v-show="isShow">
      I am committed to continuous learning and growth in the ever-evolving field of web
      development.
    </p>
    <button class="customBtn mb-6" @click="isShow = !isShow">
      {{ isShow ? 'Close' : 'Read More' }}
    </button>
  </main>
</template>
