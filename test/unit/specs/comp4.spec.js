import { shallow } from 'vue-test-utils'
import comp4 from '@/comp4'

describe('comp4', () => {
  test('should match snapshot', (done) => {
    const component = shallow(comp4)
    expect(component.element).toMatchSnapshot()
    component.vm.todos.push({ text: 'test 4th element' })
    component.vm.$nextTick(() => {
      expect(component.element).toMatchSnapshot()
      done()
    })
  })

  // Evaluate the results of functions in
  // the raw component options
  test('sets the correct default data', () => {
    expect(typeof comp4.data).toBe('function')
    const defaultData = comp4.data()
    expect(defaultData.todos).toEqual([
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ])
  })

  // Inspect the component instance on mount
  test('correctly sets the todos array when created', () => {
    const vm = shallow(comp4).vm
    expect(vm.todos).toEqual([
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ])
  })

  // Mount an instance and inspect the render output
  test('renders the correct todos list', () => {
    const vm = shallow(comp4).vm
    expect(vm.$el.textContent).toContain('Build something awesome')
    expect(vm.$el.querySelector('ol').childElementCount).toBe(3)
  })
})
