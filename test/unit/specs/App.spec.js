import { shallowMount, createLocalVue } from '@vue/test-utils'
import App from '@/App'

const localVue = createLocalVue()

describe('App', () => {
  test('should match snapshot', () => {
    const component = shallowMount(App, {
      localVue,
      stubs: {
        RouterView: true
      }
    })
    expect(component.element).toMatchSnapshot()
  })

  // Evaluate the results of functions in
  // the raw component options
  test('sets the correct components data', () => {
    expect(App.name).toBe('App')
  })
})
