import _ from 'lodash'
import { testMockLodash, testMockTime } from './foo'

jest.mock('lodash')
jest.useFakeTimers()

function forEach(items, callback) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index])
  }
}
const mockCallback = jest.fn(x => 42 + x)

test('mock fn', () => {
  forEach([9, 11], mockCallback)
  expect(mockCallback.mock.calls.length).toBe(2)
  expect(mockCallback.mock.calls[0][0]).toBe(9)
  expect(mockCallback.mock.calls[1][0]).toBe(11)
  expect(mockCallback.mock.results[0].value).toBe(51)
  // mock library
  _.find
    .mockReturnValue(10)
    .mockReturnValueOnce(11)
    .mockReturnValueOnce(12)
  expect(testMockLodash()).toEqual(11)
  expect(testMockLodash()).toEqual(12)
  expect(testMockLodash()).toEqual(10)
  _.find.mockImplementation(() => 0)
  expect(testMockLodash()).toEqual(0)
})

test('mock timer', () => {
  const callback = jest.fn()
  testMockTime(callback)
  expect(setTimeout).toHaveBeenCalledTimes(1)
  // 判断 setTimeout 参数
  expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 10000)
  // timer 未执行
  expect(callback).not.toBeCalled()
  jest.runAllTimers()
  expect(callback).toBeCalled()
  expect(callback).toHaveBeenCalledTimes(1)
})

test('object equal', () => {
  let vm = {
    list: [
      {
        uuid: '63CAef4F-2DC8-2eFc-BC22-df3a6deF3DDD',
        name: 'vm240',
        state: '运行中'
      },
      {
        uuid: '0B81621F-CCf1-6bfc-A95d-f4b1CB97fb68',
        name: 'vm263',
        state: '已停止'
      }
    ]
  }
  // do some change
  vm.list[0].state = '已停止'
  // deep equal
  expect(vm).toEqual({
    list: [
      {
        uuid: '63CAef4F-2DC8-2eFc-BC22-df3a6deF3DDD',
        name: 'vm240',
        state: '已停止'
      },
      {
        uuid: '0B81621F-CCf1-6bfc-A95d-f4b1CB97fb68',
        name: 'vm263',
        state: '已停止'
      }
    ]
  })
})
