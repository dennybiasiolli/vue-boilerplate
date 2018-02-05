import Vuex from 'vuex'
import router, { middlewareAuth } from '@/router'
import comp1 from '@/components/comp1'
import comp2 from '@/components/comp2'
import comp3 from '@/components/comp3'
import comp4 from '@/components/comp4'
import comp5 from '@/components/comp5'
import comp6 from '@/components/comp6'
import comp7 from '@/components/comp7'
import comp8 from '@/components/comp8'
import Dashboard from '@/components/Dashboard'
import Login from '@/components/Login'
import store from '@/store'

describe('router', () => {
  test('should have expected routes', () => {
    expect(router.options).toEqual({
      routes: [
        { path: '/comp1', component: comp1 },
        { path: '/comp2', component: comp2 },
        { path: '/comp3', component: comp3 },
        { path: '/comp4', component: comp4 },
        { path: '/comp5', component: comp5 },
        { path: '/comp6', component: comp6 },
        { path: '/comp7', component: comp7 },
        { path: '/comp8', component: comp8 },
        { path: '/dashboard', component: Dashboard, meta: { requiresAuth: true } },
        { path: '/login', component: Login }
      ]
    })
  })

  test('should have beforeEach customized function', () => {
    expect(typeof router.beforeEach).toBe('function')
  })

  describe('route change', () => {
    test('should redirect to login if path requires auth and is not logged', () => {
      const getters = {
        'auth/isLogged': () => false
      }
      const mockStore = new Vuex.Store({ getters })
      store.getters = mockStore.getters
      const to = {
        matched: {
          some: jest.fn(fn => fn({ meta: { requiresAuth: true } }))
        },
        fullPath: 'fullPath'
      }
      const spyNext = jest.fn()
      middlewareAuth(to, {}, spyNext)
      expect(spyNext).toHaveBeenCalledWith({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    })

    test('should not redirect to login if path requires auth and is logged', () => {
      const getters = {
        'auth/isLogged': () => true
      }
      const mockStore = new Vuex.Store({ getters })
      store.getters = mockStore.getters
      const to = {
        matched: {
          some: jest.fn(fn => fn({ meta: { requiresAuth: true } }))
        },
        fullPath: 'fullPath'
      }
      const spyNext = jest.fn()
      middlewareAuth(to, {}, spyNext)
      expect(spyNext).toHaveBeenCalledWith()
    })

    test('should not redirect to login if path does not requires auth', () => {
      const getters = {
        'auth/isLogged': () => false
      }
      const mockStore = new Vuex.Store({ getters })
      store.getters = mockStore.getters
      const to = {
        matched: {
          some: jest.fn(fn => fn({ meta: { requiresAuth: false } }))
        },
        fullPath: 'fullPath'
      }
      const spyNext = jest.fn()
      middlewareAuth(to, {}, spyNext)
      expect(spyNext).toHaveBeenCalledWith()
    })
  })
})
