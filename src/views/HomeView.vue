<script setup>
import Typewriter from '@/components/TypeWriter.vue'
import webDeveloper from '@/assets/web-developer.json'
import { useI18n } from 'vue-i18n'

const hrefForCv = () => {
  const i18n = useI18n()
  if (i18n.locale.value === 'ru') {
    return 'https://sweetcv.com/exu2k2uoy8ug8'
  } else {
    return 'https://sweetcv.com/rwofkfmkhuiwn'
  }
}
// const windowWidth = ref(window.innerWidth)
// const handleResize = () => {
//   windowWidth.value = window.innerWidth
// }
// onMounted(() => {
//   window.addEventListener('resize', handleResize)
// })
// onUnmounted(() => {
//   window.removeEventListener('resize', handleResize)
// })
</script>

<template>
  <main class="flex flex-col-reverse items-center justify-center lg:flex-row">
    <div class="flex flex-col items-center justify-center lg:mr-9 lg:w-[60%] lg:items-start">
      <h1
        class="w-fit text-3xl font-extrabold tracking-wider max-lg:text-center md:my-4 lg:text-4xl xl:text-5xl"
      >
        {{ $t('homeView.iAmAslan') }}
      </h1>
      <Typewriter
        :data="[$t('homeView.frontendDeveloper')]"
        :start="1000"
        :enter="60"
        :end="1500"
        :leave="30"
      />
      <p class="mt-3 w-fit text-center max-sm:px-1 md:text-2xl lg:text-left">
        {{ $t('homeView.myPath.path') }}
      </p>
      <p class="mb-3 w-fit text-center max-sm:px-1 md:text-2xl lg:text-left">
        {{ $t('homeView.myPath.road') }}
      </p>
      <a
        :href="hrefForCv()"
        download="Aslan Abdygaliyev - CV"
        class="customBtn mb-6"
        target="_blank"
        >{{ $t('homeView.openCV') }}</a
      >
    </div>
    <!-- <div
      class="min-h-[15rem] min-w-[15rem] overflow-hidden rounded-full border-[3px] border-deep-sky-blue bg-prussian-blue-dark md:min-h-[20rem] md:min-w-[20rem] lg:min-h-[25rem] lg:min-w-[25rem]"
      :class="windowWidth <= 767 ? 'bgMyImg200' : 'bgMyImg500'"
    ></div> -->
    <div class="mb-4 w-[60%] md:max-lg:w-[50%] lg:flex-1">
      <LottieAnimation :animationData="webDeveloper"></LottieAnimation>
    </div>
  </main>
</template>

<style scoped></style>
