import { shallow } from 'vue-test-utils'
import todoItem from '@/todoItem.vue'

describe('todoItem', () => {
  let component, element

  beforeEach(() => {
    component = shallow(todoItem, { propsData: { todo: { text: 'ciao' } } })
    element = component.element
  })

  test('should match snapshot', () => {
    expect(element).toMatchSnapshot()
  })

  // Evaluate the results of functions in
  // the raw component options
  test('sets the correct default data', () => {
    expect(todoItem.props).toEqual({
      todo: {
        type: Object,
        required: true
      }
    })
    expect(todoItem.data).toBeUndefined()
  })

  // Mount an instance and inspect the render output
  test('renders the correct message', () => {
    expect(element.textContent).toContain('ciao')
    expect(component.find('li').element.textContent).toBe('ciao')
  })
})
