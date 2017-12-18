import { shallow } from 'vue-test-utils'
import comp2 from '@/comp2'

describe('comp2', () => {
  // Evaluate the results of functions in
  // the raw component options
  test('sets the correct default data', () => {
    expect(typeof comp2.data).toBe('function')
    const defaultData = comp2.data()
    expect(defaultData.message).toContain('You loaded this page on ')
  })

  // Inspect the component instance on mount
  test('correctly sets the message when created', () => {
    const vm = shallow(comp2).vm
    expect(vm.message).toContain('You loaded this page on ')
  })

  // Mount an instance and inspect the render output
  test('renders the correct message', () => {
    const vm = shallow(comp2).vm
    expect(vm.$el.textContent).toContain('Hover your mouse over me for a few seconds to see my dynamically bound title!')
  })
})
