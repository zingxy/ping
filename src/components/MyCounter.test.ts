import { render, fireEvent } from '@testing-library/vue'

import MyCounter from './MyCounter'

test('it should works', async () => {
  const { getByText } = render(MyCounter)
  const dom = getByText('0')
})
