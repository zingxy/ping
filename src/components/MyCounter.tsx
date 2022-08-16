import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const counter = ref<number>(0)
    const inc = () => counter.value++
    return () => {
      return <h1 onClick={inc}>{counter.value}</h1>
    }
  },
})
