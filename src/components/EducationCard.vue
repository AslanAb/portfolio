<script setup>
defineProps({
  id: Number,
  name: String,
  text: String,
  year_begin: Number,
  year_end: Number
})
</script>

<template>
  <div
    class="mb-4 rounded-md border-[3px] border-deep-sky-blue p-2 before:absolute before:ml-[-43px] before:mt-[-11px] before:h-[18px] before:w-[18px] before:rounded-full before:bg-deep-sky-blue before:content-[''] hover:brightness-200"
  >
    <div class="flex items-center text-sm text-deep-sky-blue">
      <div class="mr-2 h-4 w-4 rounded-sm bg-deep-sky-blue"></div>
      <span class="mr-1">{{ year_begin }}</span>
      <span class="mr-1">-</span>
      <span class="mr-1">{{ year_end }}</span>
    </div>
    <p class="my-2 text-2xl font-medium lg:text-3xl">{{ name }}</p>
    <p>{{ text }}</p>
  </div>
</template>

<style scoped></style>
