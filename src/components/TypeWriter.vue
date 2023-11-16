<script setup>
import { reactive } from 'vue'
const props = defineProps({
  data: Array,
  start: Number,
  enter: Number,
  end: Number,
  leave: Number
})
const state = reactive({ text: '', complete: false, index: 0 })
addText()
function addText() {
  if (state.text.length < props.data[state.index].length && !state.complete) {
    state.text += props.data[state.index].charAt(state.text.length)
    setTimeout(addText, props.enter)
  }
  if (state.text.length === props.data[state.index].length) {
    state.complete = true
    setTimeout(removeText, props.end)
  }
}
function removeText() {
  if (state.text.length > 0) {
    const t = state.text.split('')
    t.pop()
    state.text = t.join('')
    setTimeout(removeText, props.leave)
  }
  if (state.text.length === 0 && state.complete) {
    state.complete = false
    if (state.index === props.data.length - 1) {
      state.index = 0
    } else {
      state.index++
    }
    setTimeout(addText, props.start)
  }
}
</script>
<template>
  <h2
    class="my-2 flex h-8 w-fit animate-blink items-center border-r-4 border-deep-sky-blue text-2xl font-bold text-deep-sky-blue hover:brightness-200 md:h-9 md:text-3xl"
  >
    {{ state.text }}
  </h2>
</template>
