<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import RouterLinks from '@/components/RouterLinks.vue'
import router from '@/router/index.js'
import { vOnClickOutside } from '@vueuse/components'
import { useI18n } from 'vue-i18n'

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

const i18n = useI18n()

const localeBg = (value) => {
  if (value === i18n.locale.value) {
    return 'bg-deep-sky-blue text-prussian-blue-dark border-deep-sky-blue font-semibold'
  }
}
const changeLocale = (locale) => {
  localStorage.setItem('locale', locale)
  i18n.locale.value = localStorage.getItem('locale')
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
      <div
        class="flex h-full items-center justify-between md:max-xl:min-w-[70%] xl:w-[60%] 2xl:w-[50%]"
      >
        <div class="mx-4 flex rounded-lg border-[2px] border-deep-sky-blue text-deep-sky-blue">
          <button
            class="rounded border border-transparent px-2 w-[38px]"
            :class="localeBg('en')"
            @click="changeLocale('en')"
          >
            en
          </button>
          <button
            class="rounded border border-transparent px-2 w-[38px]"
            :class="localeBg('ru')"
            @click="changeLocale('ru')"
          >
            ru
          </button>
        </div>
        <div v-if="windowWidth <= 767" class="relative flex h-full items-center">
          <button
            v-show="!showMenu"
            @click="showMenu = true"
            class="menu_bar_open mr-3 h-[32px] w-[35px] bg-cover bg-center"
          ></button>
          <Transition>
            <div
              v-if="showMenu"
              class="absolute right-0 top-0 z-10 h-screen w-[47vw]"
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
                class="flex h-[35vh] flex-col items-end justify-around pl-1 pr-5 pt-12 text-xl font-medium"
              >
                <RouterLinks :closeMenu="closeMenu" />
              </div>
            </div>
          </Transition>
        </div>
        <div
          v-else
          class="flex flex-1 justify-between whitespace-nowrap border-l-2 border-white pl-4 font-medium"
        >
          <RouterLinks />
        </div>
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
