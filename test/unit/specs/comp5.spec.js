import { shallow } from 'vue-test-utils'
import comp5 from '@/comp5'

describe('comp5', () => {
  let component, vm, element

  beforeEach(() => {
    component = shallow(comp5)
    vm = component.vm
    element = component.element
  })

  test('should match snapshot', (done) => {
    expect(element).toMatchSnapshot()
    vm.reverseMessage()
    vm.$nextTick(() => {
      expect(element).toMatchSnapshot()
      done()
    })
  })

  // Evaluate the results of functions in
  // the raw component options
  test('sets the correct default data', () => {
    expect(typeof comp5.data).toBe('function')
    const defaultData = comp5.data()
    expect(defaultData.message).toBe('Hello Vue.js!')
  })

  // Inspect the component instance on mount
  test('correctly sets the seen flag when created', () => {
    expect(vm.message).toBe('Hello Vue.js!')
  })

  // Mount an instance and inspect the render output
  test('renders the correct message', () => {
    expect(element.textContent).toContain('Hello Vue.js!')
    const pElem = component.find('p').element
    expect(pElem.textContent).toBe('Hello Vue.js!')
    jest.spyOn(vm, 'reverseMessage')
    component.update() // Forces to re-render, applying changes on template
    component.find('button').trigger('click')
    expect(vm.reverseMessage).toHaveBeenCalled()
    expect(pElem.textContent).toBe('!sj.euV olleH')
    component.find('button').trigger('click')
    expect(pElem.textContent).toBe('Hello Vue.js!')
  })
})
