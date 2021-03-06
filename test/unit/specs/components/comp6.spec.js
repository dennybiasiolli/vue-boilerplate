import { shallowMount, createLocalVue } from '@vue/test-utils'
import comp6 from '@/components/comp6'

const localVue = createLocalVue()

describe('comp6', () => {
  test('should match snapshot', () => {
    const component = shallowMount(comp6, { localVue })
    expect(component.element).toMatchSnapshot()
  })

  // Evaluate the results of functions in
  // the raw component options
  test('sets the correct default data', () => {
    expect(typeof comp6.data).toBe('function')
    const defaultData = comp6.data()
    expect(defaultData.message).toBe('Hello Vue!')
  })

  // Inspect the component instance on mount
  test('correctly sets the seen flag when created', () => {
    const vm = shallowMount(comp6).vm
    expect(vm.message).toBe('Hello Vue!')
  })

  // Mount an instance and inspect the render output
  test('renders the correct message', () => {
    const vm = shallowMount(comp6).vm
    expect(vm.$el.textContent).toContain('Hello Vue!')
    expect(vm.$el.querySelector('p').textContent).toBe('Hello Vue!')
  })
})
