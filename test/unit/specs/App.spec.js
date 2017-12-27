import { shallow } from 'vue-test-utils'
import App from '@/App'

describe('App', () => {
  test('should match snapshot', () => {
    const component = shallow(App)
    expect(component.element).toMatchSnapshot()
  })

  // Evaluate the results of functions in
  // the raw component options
  test('sets the correct components data', () => {
    expect(App.name).toBe('App')
  })
})
