<script setup>
const skills = [
  {
    id: 1,
    name: 'HTML',
    ImgUrl: 'skillIcons/html.png'
  },
  {
    id: 2,
    name: 'CSS',
    ImgUrl: 'skillIcons/css.png'
  },
  {
    id: 3,
    name: 'JavaScript',
    ImgUrl: 'skillIcons/js.png'
  },
  {
    id: 4,
    name: 'TypeScript',
    ImgUrl: 'skillIcons/ts.png'
  },
  {
    id: 7,
    name: 'Node',
    ImgUrl: 'skillIcons/node.png'
  },
  {
    id: 8,
    name: 'Tailwind',
    ImgUrl: 'skillIcons/tailwind.png'
  },
  {
    id: 5,
    name: 'Vue',
    ImgUrl: 'skillIcons/vue.png'
  },
  {
    id: 6,
    name: 'React / React Native',
    ImgUrl: 'skillIcons/react.png'
  }
]
</script>

<template>
  <main>
    <h1 class="mx-auto my-3 w-fit text-3xl font-extrabold tracking-wider lg:my-4 lg:text-4xl">
      {{ $t('skillsView.my') }}
      <span class="text-deep-sky-blue hover:brightness-200">{{ $t('skillsView.skills') }}</span>
    </h1>
    <div class="my-8 grid grid-cols-3 gap-4 px-8 sm:grid-cols-4 lg:mt-14">
      <div
        class="transition duration-200 hover:scale-125 hover:brightness-200"
        v-for="skill in skills"
        :key="skill.id"
      >
        <div class="h-16 sm:h-32 2xl:h-36">
          <img :src="skill.ImgUrl" alt="" class="m-auto h-full" />
        </div>
        <p class="my-2 text-center font-medium lg:text-2xl">{{ skill.name }}</p>
      </div>
    </div>
  </main>
</template>
