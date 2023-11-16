<script setup>
import data from '@/data.json'

const skills = data.skills
</script>

<template>
  <main>
    <h1 class="mx-auto my-3 w-fit text-3xl font-extrabold tracking-wider lg:my-4 lg:text-4xl">
      My <span class="text-deep-sky-blue hover:brightness-200">Skills</span>
    </h1>
    <div class="my-8 grid grid-cols-3 gap-4 px-8 sm:grid-cols-4 lg:mt-14">
      <div
        class="transition duration-200 hover:scale-125 hover:brightness-200"
        v-for="skill in skills"
        :key="skill.id"
      >
        <div class="sm:h-32 2xl:h-36">
          <img :src="skill.ImgUrl" alt="" class="m-auto h-full" />
        </div>
        <p class="my-2 text-center font-medium lg:text-2xl">{{ skill.name }}</p>
      </div>
    </div>
  </main>
</template>
