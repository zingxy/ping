import { defineComponent } from 'vue'
export default defineComponent({
  setup(props, { slots }) {
    return () => (
      <>
        默认插槽: {slots.default && slots.default()}
        <br />
        具名插槽: {slots.prefix && slots.prefix()}
        <br />
        作用域插槽:{slots.suffix && slots.suffix({ name: 'suffix' })}
      </>
    )
  },
})
