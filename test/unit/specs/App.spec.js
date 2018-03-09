import { shallow, RouterLinkStub, createLocalVue } from '@vue/test-utils'
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '@/App'

// const localVue = createLocalVue()
// localVue.component('router-link', RouterLinkStub)
// localVue.use(VueRouter)
// Vue.use(VueRouter)

describe('App', () => {
  test('should match snapshot', () => {
    // const component = shallow(App, { localVue })
    const component = shallow(App, {
      // localVue,
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
  })
})
