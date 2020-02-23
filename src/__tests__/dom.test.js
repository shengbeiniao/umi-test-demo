import {
  getByText,
  findByText,
  queryByText,
  getAllByText,
  getByRole,
  getAllByRole
} from '@testing-library/dom'

describe('@testing-library/dom', () => {
  test('dom', () => {
    document.body.innerHTML = `
      <button>test</button>
      <span>multi-test</span>
      <div>multi-test</div>
    `
    const ele = getAllByRole(document.body, 'button')
    console.log(ele)
    // // debug single element
    // screen.debug(screen.getByText('test'))
    // // debug multiple elements
    // screen.debug(screen.getAllByText('multi-test'))
  })
})
