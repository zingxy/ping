import { render } from '@testing-library/vue'
import Button from '../src/Button'

describe('Button', () => {
  test('defalut', () => {
    const { getByText, getByRole } = render(Button)
    getByRole('button')
  })
})
