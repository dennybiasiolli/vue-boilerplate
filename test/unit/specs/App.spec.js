import Vuex from 'vuex'
import { shallow, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import App from '@/App'

const localVue = createLocalVue()
localVue.use(Vuex)

const state = {
  drawer: null
}

// Mock the `increment` mutation to make it
// possible to check if it was called.
let mutations

// This function creates a new Vuex store
// instance for every new test case.
const createStore = () => {
  mutations = {
    toggleDrawer: jest.fn().mockReturnValue(false)
  }
  return new Vuex.Store({
    modules: {
      a: {
        namespaced: true,
        state,
        mutations
      }
    }
  })
}

describe('App', () => {
  test('should match snapshot', () => {
    const component = shallow(App, {
      localVue,
      store: createStore(),
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
    expect(typeof App.computed.drawer).toBe('function')
    expect(App.computed.year()).toBe(new Date().getFullYear())
    expect(typeof App.methods.toggleDrawer).toBe('function')
  })
})
