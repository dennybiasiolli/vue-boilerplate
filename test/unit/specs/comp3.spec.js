import { shallow } from 'vue-test-utils'
import comp3 from '@/comp3'

describe('comp3', () => {
  test('should match snapshot', (done) => {
    const component = shallow(comp3)
    expect(component.element).toMatchSnapshot()
    component.vm.seen = false
    component.vm.$nextTick(() => {
      expect(component.element).toMatchSnapshot()
      done()
    })
  })

  // Evaluate the results of functions in
  // the raw component options
  test('sets the correct default data', () => {
    expect(typeof comp3.data).toBe('function')
    const defaultData = comp3.data()
    expect(defaultData.seen).toBe(true)
  })

  // Inspect the component instance on mount
  test('correctly sets the seen flag when created', () => {
    const vm = shallow(comp3).vm
    expect(vm.seen).toBe(true)
  })

  // Mount an instance and inspect the render output
  test('renders the correct element', (done) => {
    const vm = shallow(comp3).vm
    expect(vm.$el.textContent).toContain('Now you see me')
    vm.seen = false
    vm.$nextTick(() => {
      expect(vm.$el.textContent).not.toContain('Now you see me')
      done()
    })
  })
})
