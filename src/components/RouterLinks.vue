<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
defineProps(['closeMenu'])
</script>

<template>
  <router-link
    :to="{ name: 'Home' }"
    :class="route.name === 'Home' && 'font-bold text-deep-sky-blue'"
    class="hover:text-deep-sky-blue hover:brightness-200"
    @click="closeMenu"
    >Home</router-link
  >
  <router-link
    :to="{ name: 'About' }"
    :class="route.name === 'About' && 'font-bold text-deep-sky-blue'"
    class="hover:text-deep-sky-blue hover:brightness-200"
    @click="closeMenu"
    >About</router-link
  >
  <router-link
    :to="{ name: 'Education' }"
    :class="route.name === 'Education' && 'font-bold text-deep-sky-blue'"
    class="hover:text-deep-sky-blue hover:brightness-200"
    @click="closeMenu"
    >Education</router-link
  >
  <router-link
    :to="{ name: 'Skills' }"
    :class="route.name === 'Skills' && 'font-bold text-deep-sky-blue'"
    class="hover:text-deep-sky-blue hover:brightness-200"
    @click="closeMenu"
    >Skills</router-link
  >
  <router-link
    :to="{ name: 'Contacts' }"
    :class="route.name === 'Contacts' && 'font-bold text-deep-sky-blue'"
    class="hover:text-deep-sky-blue hover:brightness-200"
    @click="closeMenu"
    >Contacts</router-link
  >
</template>

<style scoped></style>
