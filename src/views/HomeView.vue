<script setup>
import Typewriter from '@/components/TypeWriter.vue'
const typewriterData = ['Frontend Developer']
</script>

<template>
  <main class="flex flex-col-reverse items-center justify-center lg:flex-row">
    <div class="flex flex-col items-center justify-center lg:mr-9 lg:w-2/3 lg:items-start">
      <h1 class="w-fit text-3xl font-extrabold tracking-wider md:my-4 md:text-4xl lg:text-5xl">
        Hi, I'm Aslan
      </h1>
      <Typewriter :data="typewriterData" :start="1000" :enter="60" :end="1500" :leave="30" />
      <p class="mt-3 w-fit text-center md:text-2xl lg:text-left">
        On the path to becoming a senior web developer.
      </p>
      <p class="mb-3 w-fit text-center md:text-2xl lg:text-left">
        As the saying goes, the road by walking.
      </p>
      <a
        href="https://sweetcv.com/rwofkfmkhuiwn"
        download="Aslan Abdygaliyev - CV"
        class="customBtn mb-6"
        target="_blank"
        >Download CV</a
      >
    </div>
    <div
      class="bgMyImg min-h-[15rem] min-w-[15rem] overflow-hidden rounded-full border-[3px] border-deep-sky-blue bg-prussian-blue-dark md:min-h-[20rem] md:min-w-[20rem] lg:min-h-[25rem] lg:min-w-[25rem]"
    ></div>
  </main>
</template>

<style scoped>
.bgMyImg {
  background-image: url('@/assets/myPhoto.png');
  background-size: cover;
  background-position: center;
}
</style>
