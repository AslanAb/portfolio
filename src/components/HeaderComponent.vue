<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import RouterLinks from '@/components/RouterLinks.vue'
import router from '@/router/index.js'
import { vOnClickOutside } from '@vueuse/components'

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

const showMenu = ref(false)

const bgMenuBar = ref('')

watch(
  () => router.currentRoute.value.name,
  (name) => {
    if (name === 'Home' || name === 'Education' || name === 'Contacts') {
      bgMenuBar.value = 'bg-prussian-blue-dark'
    } else {
      bgMenuBar.value = 'bg-prussian-blue-light'
    }
  },
  { immediate: true }
)
const closeMenu = () => {
  showMenu.value = false
}
</script>

<template>
  <header class="w-full">
    <nav class="flex h-full w-full items-center justify-between">
      <router-link
        :to="{ name: 'Home' }"
        class="h-full w-[10%] min-w-[100px] max-w-[136px] pl-3 pt-2"
      >
        <div class="logoImg h-full w-full bg-cover bg-center"></div>
      </router-link>
      <div v-if="windowWidth <= 768" class="relative flex h-full items-center">
        <button
          v-show="!showMenu"
          @click="showMenu = true"
          class="menu_bar_open mr-3 h-[32px] w-[35px] bg-cover bg-center"
        ></button>
        <Transition>
          <div
            v-if="showMenu"
            class="absolute right-0 top-0 z-10 h-screen w-[45vw]"
            :class="bgMenuBar"
            v-on-click-outside="() => (showMenu = false)"
          >
            <div class="flex h-16 w-full items-center justify-end pr-3">
              <button
                @click="showMenu = false"
                class="menu_bar_close h-[32px] w-[35px] bg-cover bg-center"
              ></button>
            </div>
            <div
              class="flex h-[40vh] flex-col items-end justify-around pr-5 pt-12 text-2xl font-medium"
            >
              <RouterLinks :closeMenu="closeMenu" />
            </div>
          </div>
        </Transition>
      </div>
      <div v-else class="flex w-2/3 justify-around font-medium lg:w-1/2 xl:w-4/12">
        <RouterLinks />
      </div>
    </nav>
  </header>
</template>

<style scoped>
.logoImg {
  background-image: url('@/assets/logo.png');
}
.menu_bar_open {
  background-image: url('@/assets/menu-bar.png');
}
.menu_bar_close {
  background-image: url('@/assets/x-symbol.png');
}
</style>
