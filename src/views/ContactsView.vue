<script setup>
import data from '@/data.json'
import working_man from '@/assets/working_man.json'
</script>

<template>
  <main>
    <h1 class="mx-auto my-3 w-fit text-3xl font-extrabold tracking-wider lg:my-4 lg:text-4xl">
      Contact <span class="text-deep-sky-blue hover:brightness-200">Details</span>
    </h1>
    <div class="flex flex-col-reverse items-center md:flex-row">
      <div class="my-8 w-[90%] md:w-[40%] lg:w-1/3">
        <div class="mb-4 rounded-md border-[3px] border-deep-sky-blue p-2 hover:brightness-200">
          <p class="text-xl font-bold sm:text-2xl">Full Name</p>
          <p class="font-semibold text-deep-sky-blue sm:text-xl">
            {{ data.name }} {{ data.surname }}
          </p>
        </div>
        <div class="mb-4 rounded-md border-[3px] border-deep-sky-blue p-2 hover:brightness-200">
          <p class="text-xl font-bold sm:text-2xl">Address</p>
          <p class="font-semibold text-deep-sky-blue sm:text-xl">{{ data.address }}</p>
        </div>
        <div class="mb-4 rounded-md border-[3px] border-deep-sky-blue p-2 hover:brightness-200">
          <p class="text-xl font-bold sm:text-2xl">Mobile Number</p>
          <p class="font-semibold text-deep-sky-blue sm:text-xl">{{ data.phone_number }}</p>
        </div>
        <div class="mb-4 rounded-md border-[3px] border-deep-sky-blue p-2 hover:brightness-200">
          <p class="text-xl font-bold sm:text-2xl">Email Address</p>
          <p class="font-semibold text-deep-sky-blue sm:text-xl">{{ data.email }}</p>
        </div>
      </div>
      <div class="flex-1">
        <LottieAnimation
          :animationData="working_man"
          :width="`100%`"
          :loop="false"
        ></LottieAnimation>
      </div>
    </div>
  </main>
</template>
