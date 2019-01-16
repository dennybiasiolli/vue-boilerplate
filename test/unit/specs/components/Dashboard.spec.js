import { shallowMount } from '@vue/test-utils'
import Dashboard from '@/components/Dashboard'

describe('Dashboard', () => {
  let component, element

  beforeEach(() => {
    component = shallowMount(Dashboard)
    element = component.element
  })

  test('should match snapshot', () => {
    expect(element).toMatchSnapshot()
  })

  // Evaluate the results of functions in
  // the raw component options
  test('sets the correct default data', () => {
    expect(typeof Dashboard.data).toBe('function')
    const defaultData = Dashboard.data()
    expect(defaultData.message).toBe('Hello Authenticated!')
  })
})
