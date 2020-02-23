import { initDva } from 'utils/jest'

test('vm/query', async () => {
  const { app } = initDva([require('models/vm.js').default])
  await app._store.dispatch({
    type: 'vm/query'
  })
  expect(app._store.getState()['vm'].list).toMatchSnapshot()
})

describe('vm/doAction', () => {
  let app
  beforeEach(() => {
    const vmModel = require('models/vm.js').default
    vmModel.state = {
      ...vmModel.state,
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
        },
        {
          uuid: 'd1A29DEB-CB8C-25ef-21dd-a858bD2c6A5e',
          name: 'vm580',
          state: '已暂停'
        }
      ]
    }
    app = initDva([vmModel]).app
  })

  test('start', async () => {
    const payload = {
      current: {
        uuid: '0B81621F-CCf1-6bfc-A95d-f4b1CB97fb68',
        name: 'vm263',
        state: '已停止'
      },
      action: 'start'
    }
    await app._store.dispatch({
      type: 'vm/doAction',
      payload
    })
    const current = app._store
      .getState()
      ['vm'].list.find(item => item.uuid === payload.current.uuid)
    expect(current.state).toEqual('运行中')
  })

  test('stop', async () => {
    const payload = {
      current: {
        uuid: '63CAef4F-2DC8-2eFc-BC22-df3a6deF3DDD',
        name: 'vm240',
        state: '运行中'
      },
      action: 'stop'
    }
    await app._store.dispatch({
      type: 'vm/doAction',
      payload
    })
    const current = app._store
      .getState()
      ['vm'].list.find(item => item.uuid === payload.current.uuid)
    expect(current.state).toEqual('已停止')
  })

  test('pause', async () => {
    const payload = {
      current: {
        uuid: '63CAef4F-2DC8-2eFc-BC22-df3a6deF3DDD',
        name: 'vm240',
        state: '运行中'
      },
      action: 'pause'
    }
    await app._store.dispatch({
      type: 'vm/doAction',
      payload
    })
    const current = app._store
      .getState()
      ['vm'].list.find(item => item.uuid === payload.current.uuid)
    expect(current.state).toEqual('已暂停')
  })

  test('resume', async () => {
    const payload = {
      current: {
        uuid: '63CAef4F-2DC8-2eFc-BC22-df3a6deF3DDD',
        name: 'vm240',
        state: '运行中'
      },
      action: 'pause'
    }
    await app._store.dispatch({
      type: 'vm/doAction',
      payload
    })
    const current = app._store
      .getState()
      ['vm'].list.find(item => item.uuid === payload.current.uuid)
    expect(current.state).toEqual('已暂停')
  })

  test('resume', async () => {
    const payload = {
      current: {
        uuid: 'd1A29DEB-CB8C-25ef-21dd-a858bD2c6A5e',
        name: 'vm580',
        state: '已暂停'
      },
      action: 'resume'
    }
    await app._store.dispatch({
      type: 'vm/doAction',
      payload
    })
    const current = app._store
      .getState()
      ['vm'].list.find(item => item.uuid === payload.current.uuid)
    expect(current.state).toEqual('运行中')
  })

  test('other', async () => {
    const payload = {
      current: {
        uuid: 'd1A29DEB-CB8C-25ef-21dd-a858bD2c6A5e',
        name: 'vm580',
        state: '已暂停'
      },
      action: 'other'
    }
    await app._store.dispatch({
      type: 'vm/doAction',
      payload
    })
    const current = app._store
      .getState()
      ['vm'].list.find(item => item.uuid === payload.current.uuid)
    expect(current.state).toEqual('未知')
  })
})
