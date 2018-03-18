import { shallow } from '@vue/test-utils'
import Footer from '@/components/Footer'

describe('Footer', () => {
  test('should match snapshot', () => {
    const component = shallow(Footer)
    expect(component.element).toMatchSnapshot()
  })

  // Evaluate the results of functions in
  // the raw component options
  test('sets the correct components data', () => {
    expect(Footer.name).toBe('Footer')
    expect(Footer.computed.year()).toBe(new Date().getFullYear())
  })
})
