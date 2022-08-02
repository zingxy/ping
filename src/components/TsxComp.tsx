import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup(props, { slots }) {
    const counter = ref<number>(0)
    const inc = () => counter.value++

    return () => (
      <>
        <header onClick={inc}>
          {slots.default ? slots.default() : 'defalut'}
          {counter.value}
        </header>
        <main>{slots.main ? slots.main() : 'main'}</main>
        <footer>{slots.footer ? slots.footer() : 'footer'}</footer>
      </>
    )
  },
})
