import { shallow, mount } from 'vue-test-utils'
import comp7 from '@/components/comp7'
import todoItem from '@/components/todoItem'

describe('comp7', () => {
  let component, vm, element

  beforeEach(() => {
    component = shallow(comp7)
    vm = component.vm
    element = component.element
  })

  test('should match snapshot', () => {
    expect(element).toMatchSnapshot()
  })

  // Evaluate the results of functions in
  // the raw component options
  test('sets the correct default data', () => {
    expect(comp7.components).toEqual({
      'todo-item': todoItem
    })
    expect(comp7.components['todo-item']).toBe(todoItem)
    expect(typeof comp7.data).toBe('function')
    const defaultData = comp7.data()
    expect(defaultData.groceryList).toEqual([
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Whatever else humans are supposed to eat' }
    ])
  })

  // Inspect the component instance on mount
  test('correctly sets the seen flag when created', () => {
    expect(vm.groceryList).toEqual([
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Whatever else humans are supposed to eat' }
    ])
  })

  // Mount an instance and inspect the render output
  test('renders the correct message', () => {
    const element = mount(comp7).element
    expect(element.textContent).toContain('Vegetables')
    expect(element.textContent).toContain('Cheese')
    expect(element.textContent).toContain('Whatever else humans are supposed to eat')
  })
})
