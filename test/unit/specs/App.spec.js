import { shallow } from 'vue-test-utils'
import App from '@/App'
import comp1 from '@/components/comp1'
import comp2 from '@/components/comp2'
import comp3 from '@/components/comp3'
import comp4 from '@/components/comp4'
import comp5 from '@/components/comp5'
import comp6 from '@/components/comp6'
import comp7 from '@/components/comp7'

describe('App', () => {
  test('should match snapshot', () => {
    const component = shallow(App)
    expect(component.element).toMatchSnapshot()
  })

  // Evaluate the results of functions in
  // the raw component options
  test('sets the correct components data', () => {
    expect(App.name).toBe('App')
    expect(App.components).toEqual({
      comp1: comp1,
      comp2: comp2,
      comp3: comp3,
      comp4: comp4,
      comp5: comp5,
      comp6: comp6,
      comp7: comp7
    })
  })
})
