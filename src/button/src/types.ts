// Botton props
import { ExtractPropTypes, PropType } from 'vue'

export type IButtonType = 'primary' | 'secondary' | 'text'

// options:props  类似defineProps
export const buttonProps = {
  type: {
    type: String as PropType<'primary' | 'secondary' | 'text'>,
    default: 'secondary',
  },
} as const

// setup 函数props参数
export type ButtonProps = ExtractPropTypes<typeof buttonProps>
