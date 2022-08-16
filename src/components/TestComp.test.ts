import { render, fireEvent } from '@testing-library/vue'

import TestComp from './TestComp.vue'

test('it should works', async () => {
  const { getByText } = render(TestComp)
  const dom = getByText('counter:0')
  await fireEvent.click(dom)

  expect(dom.textContent).toBe('counter:1')
})
