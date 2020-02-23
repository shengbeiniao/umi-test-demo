import mockjs from 'mockjs'

export default {
  'GET /api/cloud/zstack/v1/vm-instances': mockjs.mock({
    'inventories|100': [
      {
        uuid: '@guid',
        name: /vm\d{3}/,
        state: /运行中|已停止|已暂停/
      }
    ],
    total: 100
  })
}
