import _ from 'lodash'

export function testMockLodash() {
  const result = _.find([1, 2, 3], value => value === 2)
  return result
}

export function testMockTime(callback) {
  console.log('Ready....go!')
  setTimeout(() => {
    console.log("Time's up -- stop!")
    callback && callback()
  }, 10000)
}
