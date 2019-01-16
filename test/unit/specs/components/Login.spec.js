import Vuex from 'vuex'
import { mount, createLocalVue } from '@vue/test-utils'
import Login from '@/components/Login'

const localVue = createLocalVue()
localVue.use(Vuex)

const state = {
  count: 0
}

let getters, actions

// This function creates a new Vuex store
// instance for every new test case.
const createStore = () => {
  getters = {
    isLogged: jest.fn().mockReturnValue(true)
  }
  actions = {
    loginAsync: jest.fn(() => Promise.resolve())
  }
  return new Vuex.Store({
    modules: {
      auth: {
        namespaced: true,
        state,
        actions,
        getters
      }
    }
  })
}

describe('Login', () => {
  let component, vm, element

  beforeEach(() => {
    component = mount(Login, {
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
    expect(typeof Login.data).toBe('function')
    const defaultData = Login.data()
    expect(defaultData.username).toBe('')
    expect(defaultData.password).toBe('')
    expect(defaultData.remember).toBe(true)
    expect(Login.computed.isLogged).toBeDefined()
    expect(typeof Login.methods.login).toBe('function')
    expect(typeof Login.methods.loginAsync).toBe('function')
  })

  describe('login', () => {
    test('should have been called when clicking on login button', () => {
      jest.spyOn(vm, 'loginAsync').mockReturnValue(Promise.resolve())
      component.find('button').trigger('click')
      expect(vm.loginAsync).toHaveBeenCalledWith({
        username: vm.username,
        password: vm.password,
        remember: vm.remember
      })
      return vm.loginAsync().then(() => {
        expect(vm.$router).toEqual(['/dashboard'])
      })
    })
  })
})
