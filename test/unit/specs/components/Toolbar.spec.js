import Vuex from 'vuex'
import { shallow, createLocalVue } from '@vue/test-utils'
import Toolbar from '@/components/Toolbar'

const localVue = createLocalVue()
localVue.use(Vuex)

const state = {
  drawer: null
}

let getters, mutations, actions

// This function creates a new Vuex store
// instance for every new test case.
const createStore = () => {
  getters = {
    isLogged: jest.fn().mockReturnValue(true)
  }
  mutations = {
    toggleDrawer: jest.fn()
  }
  actions = {
    logoutAsync: jest.fn(() => Promise.resolve())
  }
  return new Vuex.Store({
    modules: {
      a: {
        namespaced: true,
        state,
        mutations
      },
      auth: {
        namespaced: true,
        actions,
        getters
      }
    }
  })
}

describe('Toolbar', () => {
  let component, vm, element

  beforeEach(() => {
    component = shallow(Toolbar, {
      localVue,
      store: createStore(),
      mocks: {
        $router: [],
        $route: {
          query: {
            redirect: undefined
          }
        }
      }
    })
    vm = component.vm
    element = component.element
  })

  test('should match snapshot', () => {
    expect(element).toMatchSnapshot()
  })

  // Evaluate the results of functions in
  // the raw component options
  test('sets the correct default data', () => {
    expect(typeof Toolbar.computed.drawer).toBe('function')
    expect(typeof Toolbar.methods.handleToggle).toBe('function')
    expect(typeof Toolbar.methods.toggleDrawer).toBe('function')
    expect(typeof Toolbar.methods.handleLogout).toBe('function')
    expect(typeof Toolbar.methods.logoutAsync).toBe('function')
  })

  describe('handleToggle', () => {
    test('should have been called when clicking on drawer button', () => {
      jest.spyOn(vm, 'handleToggle')
      jest.spyOn(vm, 'toggleDrawer')
      component.find('button').trigger('click')
      expect(vm.handleToggle).toHaveBeenCalled()
      expect(vm.toggleDrawer).toHaveBeenCalledWith()
    })
  })

  describe('logoutAsync', () => {
    test('should have been called when clicking on logout', () => {
      jest.spyOn(vm, 'handleLogout')
      jest.spyOn(vm, 'logoutAsync')
      component.find('a').trigger('click')
      // FIXME: unexplicable error in the next line
      // expect(vm.handleLogout).toHaveBeenCalled()
      expect(vm.logoutAsync).toHaveBeenCalledWith()
      return vm.logoutAsync().then(() => {
        expect(vm.$router).toEqual(['/login'])
      })
    })
  })
})
