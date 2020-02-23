import { act, create } from 'react-test-renderer'
import AuthButton from '../index.jsx'

jest.useFakeTimers()
test('role/admin', () => {
  let root = create(<AuthButton role="admin">Test</AuthButton>)
  expect(root.toJSON()).toMatchSnapshot()
  act(() => {
    root.getInstance().onClick()
    jest.runAllTimers()
  })
  expect(root.toJSON()).toMatchSnapshot()
})

test('role/user', () => {
  let root = create(<AuthButton role="user">Test</AuthButton>)
  expect(root.toJSON()).toMatchSnapshot()
})
