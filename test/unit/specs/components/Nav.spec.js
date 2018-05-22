import Vuex from 'vuex'
import { shallow, createLocalVue } from '@vue/test-utils'
import Nav from '@/components/Nav'

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
    toggleDrawer: jest.fn()
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

describe('Nav', () => {
  test('should match snapshot', () => {
    const component = shallow(Nav, {
      localVue,
      store: createStore()
    })
    expect(component.element).toMatchSnapshot()
  })

  // Evaluate the results of functions in
  // the raw component options
  test('sets the correct components data', () => {
    expect(Nav.name).toBe('Nav')
    expect(typeof Nav.data).toBe('function')
    const defaultData = Nav.data()
    expect(defaultData.components).toEqual([
      { title: 'Component 1', url: '/comp1', icon: 'polymer' },
      { title: 'Component 2', url: '/comp2', icon: 'polymer' },
      { title: 'Component 3', url: '/comp3', icon: 'polymer' },
      { title: 'Component 4', url: '/comp4', icon: 'polymer' },
      { title: 'Component 5', url: '/comp5', icon: 'polymer' },
      { title: 'Component 6', url: '/comp6', icon: 'polymer' },
      { title: 'Component 7', url: '/comp7', icon: 'polymer' },
      { title: 'Component 8', url: '/comp8', icon: 'polymer' },
      { title: 'Dashboard', url: '/dashboard', icon: 'dashboard' }
    ])
    expect(typeof Nav.computed.drawer).toBe('function')
    expect(typeof Nav.methods.toggleDrawer).toBe('function')
  })
})
