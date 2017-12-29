import Vuex from 'vuex'
import { shallow, createLocalVue } from 'vue-test-utils'
import comp8 from '@/components/comp8'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('comp8', () => {
  let component, vm, element
  let state, mutations, getters

  beforeEach(() => {
    state = {
      count: 0
    }

    mutations = {
      increment: jest.fn(state => state.count++)
    }

    getters = {
      isCountEven: jest.fn().mockReturnValue(false),
      isCountOdd: jest.fn().mockReturnValue(true)
    }

    const store = new Vuex.Store({
      state,
      mutations,
      getters
    })

    component = shallow(comp8, { store, localVue })
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
    expect(typeof comp8.methods.increment).toBe('function')
  })

  // Inspect the component instance on mount
  test('correctly sets the data when created', () => {
    expect(vm.localCount).toBe(10)
    expect(vm.localState).toBe(1001)
    expect(vm.localComputed).toBe(100)
    expect(vm.count).toBe(1)
    expect(vm.countAlias).toBe(1)
    expect(vm.countPlusLocalData).toBe(11)
    expect(vm.countPlusLocalComputed).toBe(101)
    expect(vm.isCountEven).toBe(false)
    expect(vm.isCountOdd).toBe(true)
    expect(mutations.increment).toHaveBeenCalled()
    expect(mutations.increment.mock.calls[0][1]).toBeUndefined()
    expect(getters.isCountEven).toHaveBeenCalled()
    expect(getters.isCountOdd).toHaveBeenCalled()
  })
})
