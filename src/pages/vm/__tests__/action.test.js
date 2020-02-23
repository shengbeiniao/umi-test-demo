import {
  render,
  waitForDomChange,
  fireEvent,
  wait,
  waitForElement
} from '@testing-library/react'
import { delay, initDva } from 'utils/jest'
import Action from '../Action'

let store

const renderPage = async current => {
  let vmModel = require('models/vm.js').default
  vmModel.state = {
    ...vmModel.state,
    list: [
      {
        uuid: '1',
        state: '运行中'
      },
      {
        uuid: '2',
        state: '已停止'
      },
      {
        uuid: '3',
        state: '已暂停'
      }
    ]
  }
  const { app, Page } = initDva([vmModel], <Action current={current} />)
  const root = render(<Page />)
  const { getByTestId,debug } = root
  fireEvent.mouseEnter(getByTestId('dropdown'))
  await waitForDomChange({ container: document.body })
  store = app._store
  return root
}

test('render menu/运行中', async () => {
  const current = {
    uuid: '1',
    state: '运行中'
  }
  const { getByTestId } = await renderPage(current)
  expect(getByTestId('menu')).toMatchSnapshot()
})

test('render menu/已停止', async () => {
  const current = {
    uuid: '2',
    state: '已停止'
  }
  const { getByTestId } = await renderPage(current)
  expect(getByTestId('menu')).toMatchSnapshot()
})

test('render menu/已暂停', async () => {
  const current = {
    uuid: '3',
    state: '已暂停'
  }
  const { getByTestId } = await renderPage(current)
  expect(getByTestId('menu')).toMatchSnapshot()
})

test('action/stop', async () => {
  const current = {
    uuid: '1',
    state: '运行中'
  }
  const { getByTestId, debug } = await renderPage(current)
  fireEvent.click(getByTestId('stop'))
  await delay(1000)
  const newCurrent = store
    .getState()
    ['vm'].list.find(item => item.uuid === current.uuid)
  expect(newCurrent.state).toEqual('已停止')
})

test('action/start', async () => {
  const current = {
    uuid: '2',
    state: '已停止'
  }
  const { getByTestId, debug } = await renderPage(current)
  fireEvent.click(getByTestId('start'))
  await delay(1000)
  const newCurrent = store
    .getState()
    ['vm'].list.find(item => item.uuid === current.uuid)
  expect(newCurrent.state).toEqual('运行中')
})

test('action/pause', async () => {
  const current = {
    uuid: '1',
    state: '运行中'
  }
  const { getByTestId, debug } = await renderPage(current)
  fireEvent.click(getByTestId('pause'))
  await delay(1000)
  const newCurrent = store
    .getState()
    ['vm'].list.find(item => item.uuid === current.uuid)
  expect(newCurrent.state).toEqual('已暂停')
})

test('action/resume', async () => {
  const current = {
    uuid: '3',
    state: '已暂停'
  }
  const { getByTestId, debug } = await renderPage(current)
  fireEvent.click(getByTestId('resume'))
  await delay(1000)
  const newCurrent = store
    .getState()
    ['vm'].list.find(item => item.uuid === current.uuid)
  expect(newCurrent.state).toEqual('运行中')
})
