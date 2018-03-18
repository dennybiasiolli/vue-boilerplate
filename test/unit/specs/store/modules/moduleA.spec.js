import { moduleA } from '@/store/modules/moduleA'
const { state, mutations, getters, actions } = moduleA

describe('state', () => {
  test('should have default state', () => {
    expect(state.count).toBe(0)
    expect(state.drawer).toBe(null)
  })
})

describe('mutations', () => {
  describe('increment', () => {
    const { increment } = mutations
    test('should increment by one', () => {
      // mock state
      const state = { count: 0 }
      // apply mutation
      increment(state)
      // assert result
      expect(state.count).toBe(1)
    })
    test('should increment by defined value', () => {
      // mock state
      const state = { count: 2 }
      // apply mutation
      increment(state, 4)
      // assert result
      expect(state.count).toBe(6)
    })
  })

  describe('toggleDrawer', () => {
    const { toggleDrawer } = mutations
    test('should toggleDrawer', () => {
      const state = { drawer: null }
      toggleDrawer(state)
      expect(state.drawer).toBe(true)
      toggleDrawer(state)
      expect(state.drawer).toBe(false)
    })
    test('should toggleDrawer into defined value', () => {
      const state = { drawer: null }
      toggleDrawer(state, true)
      expect(state.drawer).toBe(true)
      toggleDrawer(state, true)
      expect(state.drawer).toBe(true)
    })
  })
})

describe('getters', () => {
  describe('isCountEven', () => {
    const { isCountEven } = getters
    test('should return expected value', () => {
      const state = { count: 2 }
      expect(isCountEven(state)).toBe(true)
      state.count = 3
      expect(isCountEven(state)).toBe(false)
    })
  })

  describe('isCountOdd', () => {
    const { isCountOdd } = getters
    test('should return expected value', () => {
      const getters = { isCountEven: true }
      expect(isCountOdd({}, getters)).toBe(false)
      getters.isCountEven = false
      expect(isCountOdd({}, getters)).toBe(true)
    })
  })
})

describe('actions', () => {
  describe('incrementAsync', () => {
    const { incrementAsync } = actions
    test('should return expected value', () => {
      const context = { commit: jest.fn() }
      return incrementAsync(context).then(() => {
        expect(context.commit).toHaveBeenCalledWith('increment')
      })
    })
  })
})
