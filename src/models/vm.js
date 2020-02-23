import request from 'utils/request'

const delay = timeout => new Promise(resolve => setTimeout(resolve, timeout))

export default {
  namespace: 'vm',
  state: {
    list: []
  },
  effects: {
    *query({ payload }, { put }) {
      const { inventories: list } = yield request.get('/vm-instances')
      yield put({
        type: 'querySuccess',
        payload: {
          list
        }
      })
      return list
    },

    *doAction({ payload }, { put }) {
      yield put({
        type: 'doActionStart',
        payload: {
          uuid: payload.current.uuid
        }
      })
      yield delay(1000)
      let state = ''
      switch (payload.action) {
        case 'start': {
          state = '运行中'
          break
        }
        case 'stop': {
          state = '已停止'
          break
        }
        case 'pause': {
          state = '已暂停'
          break
        }
        case 'resume': {
          state = '运行中'
          break
        }
        default: state = '未知'
      }
      yield put({
        type: 'doActionSuccess',
        payload: {
          uuid: payload.current.uuid,
          state
        }
      })
    }
  },
  reducers: {
    querySuccess(state, { payload }) {
      state.list = payload.list
    },
    doActionStart(state, { payload }) {
      let current = state.list.find(item => {
        return item.uuid === payload.uuid
      })
      current.loading = true
    },
    doActionSuccess(state, { payload }) {
      let current = state.list.find(item => {
        return item.uuid === payload.uuid
      })
      current.state = payload.state
      current.loading = false
    }
  }
}
