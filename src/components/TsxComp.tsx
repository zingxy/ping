import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup(props, { slots }) {
    return () => (
      <>
        <header>{slots.default ? slots.default() : 'defalut'}</header>
        <main>{slots.main ? slots.main() : 'main'}</main>
        <footer>{slots.footer ? slots.footer() : 'footer'}</footer>
      </>
    )
  },
})
