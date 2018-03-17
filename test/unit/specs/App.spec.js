import { shallow, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import App from '@/App'

const localVue = createLocalVue()

describe('App', () => {
  test('should match snapshot', () => {
    const component = shallow(App, {
      localVue,
      stubs: {
        RouterLink: RouterLinkStub,
        RouterView: true
      }
    })
    expect(component.element).toMatchSnapshot()
  })

  // Evaluate the results of functions in
  // the raw component options
  test('sets the correct components data', () => {
    expect(App.name).toBe('App')
    expect(typeof App.data).toBe('function')
    const defaultData = App.data()
    expect(defaultData.drawer).toBe(null)
    expect(defaultData.components).toEqual([
      { title: 'Component 1', url: '/comp1', icon: 'polymer' },
      { title: 'Component 2', url: '/comp2', icon: 'polymer' },
      { title: 'Component 3', url: '/comp3', icon: 'polymer' },
      { title: 'Component 4', url: '/comp4', icon: 'polymer' },
      { title: 'Component 5', url: '/comp5', icon: 'polymer' },
      { title: 'Component 6', url: '/comp6', icon: 'polymer' },
      { title: 'Component 7', url: '/comp7', icon: 'polymer' },
      { title: 'Dashboard', url: '/dashboard', icon: 'dashboard' }
    ])
    expect(App.computed.year()).toBe(new Date().getFullYear())
  })
})
