import { extend } from 'umi-request'

const request = extend({
  prefix:
    process.env.NODE_ENV === 'test'
      ? `http://172.20.11.243:3000/mock/72/api/cloud/zstack/v1`
      : '/api/cloud/zstack/v1'
})

request.use(async (ctx, next) => {
  let { req } = ctx
  let { options } = req
  let { params } = options
  if (process.env.NODE_ENV === 'test') {
    params.test = true
  }
  await next()
})

export default request
