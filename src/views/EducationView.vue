<script setup>
import EducationCard from '@/components/EducationCard.vue'
</script>

<template>
  <main>
    <h1 class="mx-auto my-3 w-fit text-3xl font-extrabold tracking-wider lg:my-4 lg:text-4xl">
      {{ $t('educationView.my') }}
      <span class="text-deep-sky-blue hover:brightness-200">{{
        $t('educationView.journey')
      }}</span>
    </h1>
    <div class="flex flex-col justify-between md:flex-row">
      <div class="mx-auto w-[90%] md:w-[45%] xl:w-[48%]">
        <h2 class="mx-6 my-4 text-2xl font-bold lg:text-3xl">
          {{ $t('educationView.educationTitle') }}
        </h2>
        <div class="border-l-[3px] border-deep-sky-blue pl-[22px]">
          <EducationCard
            v-for="education in $tm('educationView.education')"
            :id="education.id"
            :name="education.name"
            :text="education.text"
            :year_begin="education.year_begin"
            :year_end="education.year_end"
            :key="education.id"
          />
        </div>
      </div>
      <div class="mx-auto w-[90%] md:w-[45%] xl:w-[48%]">
        <h2 class="mx-6 my-4 text-2xl font-bold lg:text-3xl">
          {{ $t('educationView.experienceTitle') }}
        </h2>
        <div class="border-l-[3px] border-deep-sky-blue pl-[22px]">
          <EducationCard
            v-for="experience in $tm('educationView.experience')"
            :id="experience.id"
            :name="experience.name"
            :text="experience.text"
            :year_begin="experience.year_begin"
            :year_end="experience.year_end"
            :key="experience.id"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
