<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import { watch } from 'vue'
import router from '@/router/index.js'

watch(
  () => router.currentRoute.value.name,
  (name) => {
    if (name === 'Home' || name === 'Education' || name === 'Contacts') {
      document.body.style.backgroundColor = '#003452'
    } else {
      document.body.style.backgroundColor = '#0B2132'
    }
  },
  { immediate: true }
)
</script>

<template>
  <div class="flex min-h-screen w-full flex-col font-montserrat text-white">
    <HeaderComponent class="h-16 w-full md:px-[10%]" />
    <router-view class="w-full flex-1 md:px-[10%]" />
    <FooterComponent class="w-full md:px-[10%]" />
  </div>
</template>

<style scoped></style>
