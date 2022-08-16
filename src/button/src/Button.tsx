import { defineComponent } from 'vue'
import { buttonProps, ButtonProps } from './types'

export default defineComponent({
  name: 'WButton',
  props: buttonProps,
  setup(props: ButtonProps, { slots }) {
    return () => {
      return (
        <button
          disabled={props.disabled}
          class={`w-btn w-btn--${props.type} w-btn--${props.size} `}
        >
          {slots.default ? slots.default() : '按钮'}
        </button>
      )
    }
  },
})
