import Vuex from 'vuex'
import { shallow, createLocalVue } from '@vue/test-utils'
import comp8 from '@/components/comp8'

const localVue = createLocalVue()
localVue.use(Vuex)

const state = {
  count: 0
}

// Mock the `increment` mutation to make it
// possible to check if it was called.
let getters, actions

// This function creates a new Vuex store
// instance for every new test case.
const createStore = () => {
  getters = {
    isCountEven: jest.fn().mockReturnValue(false),
    isCountOdd: jest.fn().mockReturnValue(true)
  }
  actions = {
    incrementAsync: jest.fn(() => Promise.resolve())
  }
  return new Vuex.Store({
    modules: {
      a: {
        namespaced: true,
        state,
        actions,
        getters
      }
    }
  })
}

describe('comp8', () => {
  let component, vm, element

  beforeEach(() => {
    component = shallow(comp8, {
      localVue,
      store: createStore()
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
    expect(typeof comp8.data).toBe('function')
    const defaultData = comp8.data()
    expect(defaultData.localCount).toBe(10)
    expect(defaultData.localState).toBe(1000)
    expect(comp8.computed.localComputed()).toBe(100)
    expect(typeof comp8.mounted).toBe('function')
    expect(typeof comp8.methods.incrementAsync).toBe('function')
  })

  // Inspect the component instance on mount
  test('correctly sets the data when created', () => {
    expect(vm.localCount).toBe(10)
    expect(vm.localState).toBe(1001)
    expect(vm.localComputed).toBe(100)
    expect(vm.count).toBe(0)
    expect(vm.countAlias).toBe(0)
    expect(vm.countPlusLocalData).toBe(10)
    expect(vm.countPlusLocalComputed).toBe(100)
    expect(vm.isCountEven).toBe(false)
    expect(vm.isCountOdd).toBe(true)
    expect(actions.incrementAsync).toHaveBeenCalled()
    expect(getters.isCountEven).toHaveBeenCalled()
    expect(getters.isCountOdd).toHaveBeenCalled()
  })
})
