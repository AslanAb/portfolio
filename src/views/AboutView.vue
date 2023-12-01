<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const isShow = ref(false)

const windowWidth = ref(window.innerWidth)
const handleResize = () => {
  windowWidth.value = window.innerWidth
}
onMounted(() => {
  window.addEventListener('resize', handleResize)
})
onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<template>
  <main class="flex flex-col items-center">
    <h1 class="my-3 text-3xl font-extrabold tracking-wider lg:my-4 lg:text-4xl">
      {{ $t('aboutView.about') }}
      <span class="text-deep-sky-blue hover:brightness-200">{{ $t('aboutView.me') }}</span>
    </h1>
    <!-- <div class="mt-3 w-[60vw] sm:w-[35vw] lg:mt-8 lg:w-[25vw] xl:w-[300px]">
      <LottieAnimation :animationData="webDeveloper" :width="`100%`"></LottieAnimation>
    </div> -->
    <div
      class="min-h-[15rem] min-w-[15rem] overflow-hidden rounded-full border-[3px] border-deep-sky-blue bg-prussian-blue-dark md:min-h-[20rem] md:min-w-[20rem]"
      :class="windowWidth <= 767 ? 'bgMyImg200' : 'bgMyImg500'"
    ></div>
    <h2 class="my-4 text-center text-2xl font-bold text-deep-sky-blue hover:brightness-200">
      {{ $t('aboutView.frontendDeveloper') }}
    </h2>
    <p class="my-2 w-full px-3 text-justify indent-4 md:px-0 lg:w-2/3 lg:indent-12">
      {{ $t('aboutView.text.1') }}
    </p>
    <p class="my-2 w-full px-3 text-justify indent-4 md:px-0 lg:w-2/3 lg:indent-12" v-show="isShow">
      {{ $t('aboutView.text.2') }}
    </p>
    <p class="my-2 w-full px-3 text-justify indent-4 md:px-0 lg:w-2/3 lg:indent-12" v-show="isShow">
      {{ $t('aboutView.text.3') }}
    </p>
    <p class="my-2 w-full px-3 text-justify indent-4 md:px-0 lg:w-2/3 lg:indent-12" v-show="isShow">
      {{ $t('aboutView.text.4') }}
    </p>
    <p class="my-2 w-full px-3 text-justify indent-4 md:px-0 lg:w-2/3 lg:indent-12" v-show="isShow">
      {{ $t('aboutView.text.5') }}
    </p>
    <button class="customBtn mb-6" @click="isShow = !isShow">
      {{ isShow ? $t('aboutView.button.closeText') : $t('aboutView.button.readMore') }}
    </button>
  </main>
</template>

<style scoped>
.bgMyImg500 {
  background-image: url('@/assets/myPhoto_500.png');
  background-size: cover;
  background-position: center;
}
.bgMyImg200 {
  background-image: url('@/assets/myPhoto_250.png');
  background-size: cover;
  background-position: center;
}
</style>
