import {
  render,
  waitForDomChange,
  waitForElement
} from '@testing-library/react'
import { initDva } from 'utils/jest'
import VM from '../index'

// import { vmList } from './_mock'
// import request from 'utils/request'
// jest.mock('utils/request')
// request.get.mockResolvedValue({
//   data: vmList
// })

const { app, Page } = initDva([require('models/vm.js').default], <VM />)

test('render list', async () => {
  const { getByTestId, findByTestId, debug } = render(<Page />)
  // await waitForElement(() => getByTestId('list'))
  await waitForDomChange({ container: getByTestId('list')})
  expect(getByTestId('list')).toMatchSnapshot()
})


test('render all', async () => {
  const { baseElement } = render(<Page />)
  expect(baseElement).toMatchSnapshot()
})
