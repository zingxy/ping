import { defineComponent } from 'vue'
import { buttonProps, ButtonProps } from './types'

export default defineComponent({
  name: 'WButton',
  props: buttonProps,
  setup(props: ButtonProps, { slots }) {
    return () => {
      return (
        <button class={`w-btn s-btn--${props.type}`}>
          {slots.default ? slots.default() : '按钮'}
        </button>
      )
    }
  },
})
