<script setup>
import working_man from '@/assets/working_man.json'
import { onMounted, ref } from 'vue'
const lottieShow = ref(false)
onMounted(() => {
  lottieShow.value = true
})
</script>

<template>
  <main>
    <h1
      class="mx-auto my-3 w-fit text-center text-3xl font-extrabold tracking-wider lg:my-4 lg:text-4xl"
    >
      {{ $t('contactsView.contact') }}
      <span class="text-deep-sky-blue hover:brightness-200">{{ $t('contactsView.details') }}</span>
    </h1>
    <div class="flex flex-col-reverse items-center md:flex-row">
      <div class="my-8 w-[90%] md:w-[40%] lg:w-1/3">
        <div class="mb-4 rounded-md border-[3px] border-deep-sky-blue p-2 hover:brightness-200">
          <p class="text-xl font-bold sm:text-2xl">{{ $t('contactsView.fullName') }}</p>
          <p class="font-semibold text-deep-sky-blue sm:text-xl">
            {{ $t('contactsView.name') }} {{ $t('contactsView.surname') }}
          </p>
        </div>
        <div class="mb-4 rounded-md border-[3px] border-deep-sky-blue p-2 hover:brightness-200">
          <p class="text-xl font-bold sm:text-2xl">{{ $t('contactsView.address') }}</p>
          <p class="font-semibold text-deep-sky-blue sm:text-xl">
            {{ $t('contactsView.myAddress') }}
          </p>
        </div>
        <div class="mb-4 rounded-md border-[3px] border-deep-sky-blue p-2 hover:brightness-200">
          <p class="text-xl font-bold sm:text-2xl">{{ $t('contactsView.mobileNumber') }}</p>
          <p class="font-semibold text-deep-sky-blue sm:text-xl">
            {{ $t('contactsView.phone_number') }}
          </p>
        </div>
        <div class="mb-4 rounded-md border-[3px] border-deep-sky-blue p-2 hover:brightness-200">
          <p class="text-xl font-bold sm:text-2xl">{{ $t('contactsView.emailAddress') }}</p>
          <p class="font-semibold text-deep-sky-blue sm:text-xl">
            {{ $t('contactsView.emailFirstPart') }}@{{ $t('contactsView.emailSecondPart') }}
          </p>
        </div>
      </div>
      <div class="flex-1">
        <LottieAnimation
          :animationData="working_man"
          :width="`100%`"
          :loop="false"
          v-if="lottieShow"
        ></LottieAnimation>
      </div>
    </div>
  </main>
</template>
