import { shallow } from '@vue/test-utils'
import Dashboard from '@/components/Dashboard'

describe('Dashboard', () => {
  let component, vm, element

  beforeEach(() => {
    component = shallow(Dashboard, {
      mocks: {
        $store: {
          dispatch: jest.fn().mockReturnValue(Promise.resolve())
        },
        $router: []
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
    expect(typeof Dashboard.data).toBe('function')
    const defaultData = Dashboard.data()
    expect(defaultData.message).toBe('Hello Authenticated!')
    expect(typeof Dashboard.methods.logout).toBe('function')
  })

  describe('logout', () => {
    test('should have been called when clicking on logout button', () => {
      component.find('button').trigger('click')
      expect(vm.$store.dispatch).toHaveBeenCalledWith('auth/logoutAsync')
      return vm.$store.dispatch().then(() => {
        expect(vm.$router).toEqual(['/login'])
      })
    })
  })
})
