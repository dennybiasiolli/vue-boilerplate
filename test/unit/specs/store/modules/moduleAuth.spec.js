import { moduleAuth } from '@/store/modules/moduleAuth'
const { state, mutations, getters, actions } = moduleAuth

describe('state', () => {
  test('should have default state', () => {
    expect(localStorage.getItem).toHaveBeenCalledWith('authUser')
    expect(state.user).toBe(JSON.parse(localStorage.getItem('authUser')))
  })
})

describe('mutations', () => {
  describe('login', () => {
    const { login } = mutations
    test('should login without remembering user', () => {
      // mock state
      const state = { user: null }
      // apply mutation
      login(state, { username: 'foo', remember: false })
      // assert result
      expect(localStorage.setItem).not.toHaveBeenCalled()
      expect(state.user).toEqual({ username: 'foo' })
    })
    test('should login remembering user', () => {
      // mock state
      const state = { user: null }
      // apply mutation
      login(state, { username: 'foo', remember: true })
      // assert result
      expect(localStorage.setItem).toHaveBeenCalledWith(
        'authUser', JSON.stringify({ username: 'foo' }))
      expect(state.user).toEqual({ username: 'foo' })
    })
  })

  describe('logout', () => {
    const { logout } = mutations
    test('should logout as expected', () => {
      // mock state
      const state = { user: 'foo' }
      // apply mutation
      logout(state)
      // assert result
      expect(localStorage.removeItem).toHaveBeenCalledWith('authUser')
      expect(state.user).toBeNull()
    })
  })
})

describe('getters', () => {
  describe('isLogged', () => {
    const { isLogged } = getters
    test('should return expected value', () => {
      const state = { user: 'foo' }
      expect(isLogged(state)).toBe(true)
      state.user = null
      expect(isLogged(state)).toBe(false)
    })
  })
})

describe('actions', () => {
  describe('loginAsync', () => {
    const { loginAsync } = actions
    test('should return expected value', () => {
      const context = { commit: jest.fn() }
      const obj = { username: 'foo', remember: 'bar' }
      return loginAsync(context, obj).then(() => {
        expect(context.commit).toHaveBeenCalledWith(
          'login',
          { username: obj.username, remember: obj.remember })
      })
    })
  })

  describe('logoutAsync', () => {
    const { logoutAsync } = actions
    test('should return expected value', () => {
      const context = { commit: jest.fn() }
      return logoutAsync(context).then(() => {
        expect(context.commit).toHaveBeenCalledWith('logout')
      })
    })
  })
})
