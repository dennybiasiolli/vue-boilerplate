import { shallow } from 'vue-test-utils'
import comp1 from '@/components/comp1'

describe('comp1', () => {
  test('should match snapshot', () => {
    const component = shallow(comp1)
    expect(component.element).toMatchSnapshot()
  })

  // Evaluate the results of functions in
  // the raw component options
  test('sets the correct default data', () => {
    expect(typeof comp1.data).toBe('function')
    const defaultData = comp1.data()
    expect(defaultData.message).toBe('Hello Vue!')
  })

  // Inspect the component instance on mount
  test('correctly sets the message when created', () => {
    const vm = shallow(comp1).vm
    expect(vm.message).toBe('Hello Vue!')
  })

  // Mount an instance and inspect the render output
  test('renders the correct message', () => {
    const component = shallow(comp1)
    expect(component.element.textContent).toContain('Hello Vue!')
  })
})
