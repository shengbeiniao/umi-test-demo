import { initDva } from 'utils/jest'
import VM from '../index'
import { create, act } from 'react-test-renderer'

const { app, Page } = initDva([require('models/vm.js').default], <VM />)

// error
test('render', () => {
  // const tree = create(<Page />)
  // expect(tree.toJSON()).toMatchSnapshot()
})
